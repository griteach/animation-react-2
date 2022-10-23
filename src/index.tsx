import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reset from "styled-reset";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import GestureApp from "./GestureApp";
import SvgAnimation from "./SvgAnimation";
import AnimationPresenceApp from "./AnimationPresenceApp";
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    color: black;
    line-height:1.2;
    background:linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  }
  
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <App /> */}
    {/* <GestureApp /> */}
    {/* <SvgAnimation /> */}
    <AnimationPresenceApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
