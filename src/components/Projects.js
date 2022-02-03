import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "../scss/_animations.scss";

export default function Projects() {
  const ProjectContainer = styled.div`
    min-width: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 6rem;
  `;
  const SubHeading = styled.h2`
    font-size: 1.25rem;
    font-weight: lighter;
    text-transform: lowercase;
    text-align: right;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-bottom: 5rem;
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
  `;
  const Project = styled.div`
    min-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 2rem 5rem 2rem;
    @media (min-width: 768px) {
      padding: 0 5rem 5rem 5rem;
    }
    @media (min-width: 1024px) {
      padding: 0 3rem 8rem 3rem;
    }
    @media (min-width: 1440px) {
      padding: 0 0 8rem 0;
    }
    .projectSub {
      display: flex;
      flex-direction: row;
      align-items: center;
      @media (min-width: 1440px) {
        max-width: 90%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding: 0;
      }
      @media (min-width: 2560px) {
        max-width: 90%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding: 0;
      }
      .projectHeading {
        h4 {
          color: #f0f0f0;
          font-weight: lighter;
          margin-top: 1rem;
          font-size: 0.75rem;
          @media (min-width: 768px) {
            font-size: 1rem;
          }
          @media (min-width: 1024px) {
            font-size: 1.25rem;
          }
        }
        h5 {
          color: #41413d;
          text-transform: uppercase;
          font-size: 0.75rem;
          font-weight: lighter;
          @media (min-width: 768px) {
            font-size: 0.85rem;
          }
          @media (min-width: 1024px) {
            font-size: 1rem;
          }
        }
      }
      a {
        margin-left: auto;
        overflow: hidden;
        transition-duration: 0.8s;
        transition-property: transform;
        @media (min-width: 1024px) {
          &:hover {
            cursor: pointer;
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
          }
        }
        img {
          width: 30px;
          @media (min-width: 768px) {
            width: 50px;
          }
        }
      }
    }
    figure {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      height: 250px;
      width: 100%;
      @media (min-width: 1024px) {
        height: 500px;
      }
      @media (min-width: 1440px) {
        max-width: 90%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding: 0;
      }
      @media (min-width: 2560px) {
        max-width: 90%;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding: 0;
        height: 750px;
      }
      img {
        transform: scale(0.4);
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        opacity: 1;
        @media (min-width: 768px) {
          transform: scale(1);
        }
        @media (min-width: 1024px) {
          &:hover {
            transform: scale(0.96);
            opacity: 0.65;
          }
        }
        @media (min-width: 1440px) {
          transform: scale(2);
          &:hover {
            transform: scale(1.96);
            opacity: 0.65;
          }
        }
      }
    }
  `;
  return (
    <ProjectContainer>
      <SubHeading>
        <div>
          Latest <br />
          Projects{" "}
        </div>{" "}
      </SubHeading>
      <Project>
        <figure>
          <img
            src="./assets/ebiketogo.png"
            alt=""
            loading="lazy"
            data-scroll-call="lazyLoad"
          />
        </figure>{" "}
        <div className="projectSub">
          <div className="projectHeading">
            <h5> Internship </h5> <h4> E - bike to go / Ride Noord </h4>{" "}
          </div>{" "}
          <Link to="ebtg">
            <img src="./assets/arrow.svg" alt="" loading="lazy" />
          </Link>{" "}
        </div>{" "}
      </Project>
      <Project>
        <figure>
          <img
            src="./assets/namenmonument.png"
            alt=""
            loading="lazy"
            data-scroll-call="lazyLoad"
          />
        </figure>{" "}
        <div className="projectSub">
          <div className="projectHeading">
            <h5> Information design project </h5>{" "}
            <h4> Slavery names memorial </h4>{" "}
          </div>{" "}
          <Link to="memorial">
            <img src="./assets/arrow.svg" alt="" loading="lazy" />
          </Link>{" "}
        </div>{" "}
      </Project>
      <Project>
        <figure>
          <img
            src="./assets/spaceX.png"
            alt=""
            loading="lazy"
            data-scroll-call="lazyLoad"
          />
        </figure>{" "}
        <div className="projectSub">
          <div className="projectHeading">
            <h5> Front-end development project </h5>{" "}
            <h4> Rebuilding SpaceX </h4>{" "}
          </div>{" "}
          <Link to="/spacex">
            <img src="./assets/arrow.svg" alt="" loading="lazy" />
          </Link>{" "}
        </div>{" "}
      </Project>
      <Project>
        <figure>
          <img
            src="./assets/top3albums.png"
            alt=""
            loading="lazy"
            data-scroll-call="lazyLoad"
          />
        </figure>{" "}
        <div className="projectSub">
          <div className="projectHeading">
            <h5> Information design application </h5> <h4> Top 3 Albums </h4>{" "}
          </div>{" "}
          <Link to="/top-3-albums">
            <img src="./assets/arrow.svg" alt="" loading="lazy" />
          </Link>{" "}
        </div>{" "}
      </Project>{" "}
    </ProjectContainer>
  );
}
