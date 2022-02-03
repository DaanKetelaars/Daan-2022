import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Clock from "./CurrentTime";

export default function Header() {
  const HeaderContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5rem 2rem 0 2rem;
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
    }
    @media (min-width: 2560px) {
      max-width: 90%;
      width: 100%;
      padding: 5rem 0;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: lighter;
      text-transform: lowercase;
      display: flex;
      flex-direction: column;
      color: #4832ed;
      overflow: hidden;
      @media (min-width: 768px) {
        font-size: 2rem;
        margin-left: auto;
        margin-right: auto;
      }
      @media (min-width: 1024px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      @media (min-width: 1440px) {
        font-size: 4rem;
        line-height: 1;
        padding-bottom: 1rem;
        margin-top: 1rem;
        margin-bottom: 8rem;
      }
      @media (min-width: 2560px) {
        font-size: 5rem;
        line-height: 1;
        padding-bottom: 1rem;
        margin-top: 5rem;
        margin-bottom: 10rem;
      }
      .reveal:nth-of-type(1) {
        transform: translateY(400%);
      }
      .reveal:nth-of-type(2) {
        transform: translateY(400%);
        animation: reveal 2s cubic-bezier(1, 0, 0.3, 0.9) forwards;
      }
      .reveal:nth-of-type(3) {
        transform: translateY(400%);
        animation: reveal 2.5s cubic-bezier(1, 0, 0.3, 0.9) forwards;
      }
    }
    .ShortProfile {
      width: 100%;
      margin-left: auto;
      margin-top: 3rem;
      font-size: 0.75rem;
      font-weight: lighter;
      line-height: 1rem;
      overflow: hidden;
      @media (min-width: 768px) {
        font-size: 0.85rem;
        line-height: 1.25rem;
        width: 30ch;
      }
      @media (min-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
        width: 45ch;
      }
      @media (min-width: 1440px) {
        margin-top: 0;
      }
    }
    .CopyRight {
      text-transform: uppercase;
      margin-right: auto;
      margin-top: 6rem;
      color: #41413d;
      font-size: 0.75rem;
      font-weight: lighter;
      overflow: hidden;
      @media (min-width: 768px) {
        font-size: 0.85rem;
      }
      @media (min-width: 1024px) {
        font-size: 1rem;
      }
      @media (min-width: 1440px) {
        margin-top: 3rem;
        padding: 0;
      }
      @media (min-width: 2560px) {
        padding-top: 15rem;
      }
    }
  `;
  return (
    <header>
      <Nav />
      <HeaderContent>
        <h1>
          <div className="reveal">Daan ketelaars coreen.</div>
          <div className="reveal">creative developer and</div>
          <div className="reveal">visual design at the AUAS</div>
        </h1>
        <div className="ShortProfile">
          <p className="reveal">
            Focusing on interaction and motion and combining that with a passion
            for graphic design. Currently a 3rd-year communication & multimedia
            design student at the Amsterdam University of Applied Sciences.
            Bringing ideas to life, pixel by pixel.
          </p>
        </div>
        <div className="CopyRight">
          <div className="reveal">
            <Clock />
          </div>
        </div>
      </HeaderContent>
    </header>
  );
}
