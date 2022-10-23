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
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: xx-large;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
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

  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
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
    </Wrapper>
  );
}

export default AnimationPresenceApp;
