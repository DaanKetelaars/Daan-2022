import React, { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

function Home() {
  let containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Header />
        <Main />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default Home;
