import React, { useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import styled from "styled-components";

export default function Profile() {
  let containerRef = useRef(null);

  const HeaderContent = styled.div`
    margin-top: 5rem;
    h2 {
      font-size: 1.25rem;
      font-weight: lighter;
      text-transform: lowercase;
      text-align: left;
      padding-right: 2rem;
      padding-left: 2rem;
      margin-bottom: 3rem;
      color: #4832ed;
      position: relative;
      overflow: hidden;
      @media (min-width: 768px) {
        padding-right: 5rem;
        padding-left: 5rem;
        font-size: 1.75rem;
      }
      @media (min-width: 1024px) {
        font-size: 2rem;
        padding-left: 3rem;
        padding-right: 3rem;
      }
      @media (min-width: 1440px) {
        max-width: 90%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
        font-size: 2.5rem;
      }
      @media (min-width: 2560px) {
        max-width: 90%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
      }
    }
  `;
  const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr;
    margin: 0 auto;
    padding: 0rem 2rem 0 2rem;
    @media (min-width: 768px) {
      padding: 5rem 5rem 0 5rem;
    }
    @media (min-width: 1024px) {
      padding: 5rem 3rem;
    }
    @media (min-width: 1440px) {
      max-width: 90%;
      width: 100%;
      padding: 5rem 0;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 2560px) {
      max-width: 90%;
      width: 100%;
      padding: 5rem 0;
      margin-bottom: 10rem;
      grid-template-columns: 1fr 2fr;
    }
    p {
      width: 100%;
      margin-left: auto;
      font-size: 0.75rem;
      font-weight: lighter;
      line-height: 1rem;
      overflow: hidden;
      @media (min-width: 768px) {
        font-size: 0.85rem;
        line-height: 1.25rem;
        width: 100%;
      }
      @media (min-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
        width: 45ch;
        &:nth-of-type(1) {
          margin-left: 0;
        }
      }
      @media (min-width: 2560px) {
        font-size: 1rem;
        line-height: 1.5rem;
        width: 45ch;
        margin-left: 0;
        &:nth-of-type(1) {
          margin-left: 0;
        }
      }
    }
    figure {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      margin-top: 3rem;
      height: 250px;
      width: 100%;
      @media (min-width: 768px) {
        height: 500px;
      }
      @media (min-width: 1024px) {
        height: 500px;
      }
      @media (min-width: 1440px) {
        height: 500px;
        max-width: 100%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding: 0;
        margin-top: 0;
      }
      @media (min-width: 2560px) {
        height: 750px;
        max-width: 100%;
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        padding: 0;
      }
      img {
        transform: scale(0.6);
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        transform-origin: 50% 70%;
        @media (min-width: 768px) {
          transform: scale(1.2);
          transform-origin: top;
        }
        @media (min-width: 1024px) {
          &:hover {
            transform: scale(1.1);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1);
          transform-origin: 50% 150%;
          &:hover {
            transform: scale(0.98);
          }
        }
        @media (min-width: 2560px) {
          transform: scale(1.85);
          transform-origin: center 10%;
          &:hover {
            transform: scale(1.8);
          }
        }
      }
    }
  `;

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <header>
          <Nav />
          <HeaderContent>
            <h2>
              <div className="reveal">
                What drives and <br /> interests me?
              </div>
            </h2>
          </HeaderContent>
        </header>
        <Main>
          <p>
            Focusing on the details can make your work stand out from the rest.
            This is something I strive for. Make sure it’s worked out to
            perfection and brining ideas to life, pixel by pixel. I have a huge
            interest in motion and interaction. For me 2 key components as a
            creative developer. <br /> <br />
            Next to this, I like to learn new things to bring my projects to the
            next level. My love and passion for visual design and graphic
            design, help me bring that creativity and extra touch to my
            projects. Combining these powers makes it much easier for me to
            bring a design to life.
            <br />
            <br />
            <br />
            Of course, I am not busy 24/7 with design and code. No matter how
            much I like it haha. I've been playing field hockey for 16+ years,
            have a great passion for sport and slowly developed more love for
            art and going to a nice museum. The same goes for reading books.
            <br /> <br /> I enjoy good food, travelling and exploring new spots,
            hanging out with family/friends, watching films/series, gaming,
            photography, music and enjoying a cold one 🍺 (a nice wine will do
            as well 🍷).
          </p>
          <figure>
            <img src="./assets/profile-photo.png" alt="" loading="lazy" />
          </figure>
        </Main>
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}
