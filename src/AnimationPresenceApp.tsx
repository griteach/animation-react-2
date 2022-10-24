import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: xx-large;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
`;

const Grid = styled.div`
  display: grid;
  width: 80vh;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const OverLay = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: blue;
`;

const boxVariants = {
  entry: (back: boolean) => ({
    opacity: 0,
    x: back ? -500 : 500,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  leaving: (back: boolean) => ({
    opacity: 0,
    x: back ? 500 : -500,
    scale: 0,
  }),
};

const overLayVariants = {
  initial: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  visible: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  exit: {
    backgroundColor: "rgba(0,0,0,0)",
  },
};

function AnimationPresenceApp() {
  const [showing, setShowing] = useState(true);
  const showingToggle = () => {
    setShowing((prev) => !prev);
  };

  const [back, setBack] = useState(false);
  const [visible, setVisible] = useState(1);
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setBack(false);
  };
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setBack(true);
  };

  const [id, setId] = useState<null | string>(null);
  console.log(id);
  return (
    <Wrapper>
      {/* AnimatePresence는 반드시 visible한 상태쳐야 한다.  */}
      {/* <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={showingToggle}>CLICK</button> */}
      {/* <AnimatePresence custom={back}>
        <Box
          key={visible}
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="leaving"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button> */}
      {/* 
      <Box>
        {clicked ? (
          <Circle
            layoutId="circle"
            style={{
              scale: 1,
              borderRadius: 25,
              backgroundColor: "rgba(241, 196, 15,1.0)",
            }}
          />
        ) : null}
      </Box>
      <Box>
        {!clicked ? (
          <Circle
            layoutId="circle"
            style={{
              scale: 1.7,
              borderRadius: 10,
              backgroundColor: "rgba(41, 128, 185,1.0)",
            }}
          />
        ) : null}
      </Box> */}
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {id != null ? (
          <OverLay
            onClick={() => setId(null)}
            variants={overLayVariants}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 300, height: 100 }} />
          </OverLay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default AnimationPresenceApp;
