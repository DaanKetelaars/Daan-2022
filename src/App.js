import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Ebtg from "./pages/ProjectPages/Ebtg";
import Memorial from "./pages/ProjectPages/NamenMonument";
import SpaceX from "./pages/ProjectPages/SpaceX";
import TopAlbums from "./pages/ProjectPages/Top3Albums";

import ScrollToTop from "./components/ScrollToTop";
import { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: #10100E;
    font-family: "HelveticaNowDisplay-Regular", sans-serif;
    color:#f0f0f0;
  }
  strong {
    font-family: "HelveticaNowDisplay-Bold", sans-serif;
  }
  @font-face {
    font-family: "HelveticaNowDisplay-Bold";
    src: url("./assets/fonts/HelveticaNowDisplay-Bold.woff") format("woff");
    font-display: swap;
  }
  @font-face {
    font-family: "HelveticaNowDisplay-Regular";
    src: url("./assets/fonts/HelveticaNowDisplay-Regular.woff") format("woff");
    font-display: swap;
  }
`;
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        <Route exact path="/profile" element={<Profile />} />{" "}
        <Route exact path="/ebtg" element={<Ebtg />} />{" "}
        <Route exact path="/memorial" element={<Memorial />} />{" "}
        <Route exact path="/spacex" element={<SpaceX />} />{" "}
        <Route exact path="/top-3-albums" element={<TopAlbums />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
