import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Ebtg() {
  let containerRef = useRef(null);

  const Main = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr;
    margin: 0 auto;
    padding: 0rem 2rem 0 2rem;
    @media (min-width: 768px) {
      padding: 3rem 5rem 0 5rem;
    }
    @media (min-width: 1024px) {
      padding: 5rem 3rem;
      margin-bottom: 20rem;
    }
    @media (min-width: 1440px) {
      max-width: 90%;
      width: 100%;
      padding: 3rem 0;
      margin-bottom: 20rem;
    }
    @media (min-width: 2560px) {
      max-width: 90%;
      width: 100%;
      padding: 3rem 0;
      margin-bottom: 10rem;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: lighter;
      text-transform: lowercase;
      color: #4832ed;
      overflow: hidden;
      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
      @media (min-width: 1440px) {
        font-size: 2rem;
      }
    }
    p {
      width: 100%;
      margin-left: auto;
      font-size: 0.75rem;
      font-weight: lighter;
      line-height: 1rem;
      overflow: hidden;
      margin-top: 3rem;
      margin-bottom: 3rem;
      @media (min-width: 768px) {
        font-size: 0.85rem;
        line-height: 1.25rem;
        width: 100%;
      }
      @media (min-width: 1024px) {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-right: 0;
        margin-left: auto;
        margin-top: 5rem;
        margin-bottom: 5rem;
        width: 45ch;
        &:nth-of-type(2) {
          margin-left: 0;
          margin-right: auto;
        }
      }
      @media (min-width: 2560px) {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-right: 0;
        margin-left: auto;
        margin-top: 5rem;
        margin-bottom: 5rem;
      }
    }
    a {
      font-size: 2rem;
      color: #f0f0f0;
      text-decoration: none;
      @media (min-width: 1024px) {
        margin-bottom: 3rem;
      }
      @media (min-width: 1440px) {
        margin-bottom: 0;
      }
    }
    figure {
      overflow: hidden;
      height: 100%;
      width: 100%;
      margin-top: 3rem;
      @media (min-width: 768px) {
        margin-top: 1rem;
      }
      @media (min-width: 1440px) {
        height: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
      }
      @media (min-width: 2560px) {
        height: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
      }
      img {
        width: 100%;
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        @media (min-width: 1024px) {
          transform: scale(1.1);
          &:hover {
            transform: scale(1.085);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1);
          &:hover {
            transform: scale(0.96);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1.1);
          transform-origin: center 10%;
          &:hover {
            transform: scale(1.085);
          }
        }
      }
    }
  `;
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
    h2 {
      font-size: 1.25rem;
      font-weight: lighter;
      text-transform: lowercase;
      text-align: left;
      margin-bottom: 3rem;
      color: #4832ed;
      position: relative;
      overflow: hidden;
      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
      @media (min-width: 1024px) {
        font-size: 2rem;
      }
      @media (min-width: 1440px) {
        max-width: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
        font-size: 2.5rem;
      }
      @media (min-width: 2560px) {
        max-width: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
      }
    }
    h4 {
      color: #f0f0f0;
      font-weight: lighter;
      margin-top: 1rem;
      font-size: 0.75rem;
      margin-top: 2rem;
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
      margin-bottom: 1rem;
      @media (min-width: 768px) {
        font-size: 0.85rem;
      }
      @media (min-width: 1024px) {
        font-size: 1rem;
      }
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
        margin-right: auto;
        margin-left: auto;
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
            transform: scale(1.18);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1);
          transform-origin: 50% 150%;
          &:hover {
            transform: scale(0.96);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1.85);
          transform-origin: center 10%;
          &:hover {
            transform: scale(1.83);
          }
        }
      }
    }
  `;
  const TechBlock = styled.div`
    margin-top: 5rem;
    margin-bottom: 10rem;
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
    p {
      width: 100%;
      margin-left: auto;
      font-size: 0.75rem;
      font-weight: lighter;
      line-height: 1rem;
      overflow: hidden;
      margin-top: 1rem;
      margin-bottom: 1rem;
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
  `;
  const NextProjects = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    height: 100%;
    width: 100%;
    @media (min-width: 1024px) {
      flex-direction: row;
    }
    div {
      @media (min-width: 1024px) {
        &:nth-child(1) {
          margin-right: 5rem;
        }
      }
      figure {
        overflow: hidden;
        height: auto;
        width: 100%;
        margin: 2rem 0 0 0;
        @media (min-width: 1024px) {
          height: 100%;
        }
        @media (min-width: 1440px) {
          max-width: 100%;
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          padding: 0;
        }
        @media (min-width: 2560px) {
          max-width: 100%;
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          padding: 0;
        }
        img {
          transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          @media (min-width: 768px) {
            transform: scale(1);
          }
          @media (min-width: 1024px) {
            transform: scale(1.85);
            &:hover {
              transform: scale(1.83);
              opacity: 0.65;
            }
          }
          @media (min-width: 1440px) {
            transform: scale(2);
            &:hover {
              transform: scale(1.98);
              opacity: 0.65;
            }
          }
        }
      }
    }
    .ProjectContent {
      display: flex;
      align-items: center;
      margin-top: 0;
      @media (min-width: 768px) {
        margin-top: 2rem;
      }
      @media (min-width: 1024px) {
        margin-top: 0;
      }
      @media (min-width: 1440px) {
        margin-top: 3rem;
      }
      h4 {
        color: #f0f0f0;
        font-weight: lighter;
        margin-top: 1rem;
        font-size: 0.75rem;
        margin-top: 0;
        @media (min-width: 768px) {
          font-size: 1rem;
        }
        @media (min-width: 1024px) {
          font-size: 1.25rem;
        }
      }
      a {
        margin-left: auto;
        overflow: hidden;
        transition-duration: 0.8s;
        transition-property: transform;
        @media (min-width: 1024px) {
          margin-bottom: 0;
          margin-top: 0;
          &:hover {
            cursor: pointer;
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
          }
        }
        img {
          width: 20px;
          @media (min-width: 768px) {
            width: 50px;
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
        <Nav data-scroll-section />
        <header>
          <HeaderContent>
            <figure>
              <img
                src="./assets/noord/ebiketogo-02.png"
                alt=""
                loading="lazy"
              />
            </figure>
            <h5>2nd year short internship</h5>
            <h2>
              The future is electric, <br />
              with Ride Noord.
            </h2>
            <p>
              When I started my internship at E-Bike to go, I got the
              opportunity to work on their new upcoming e-bike brand. Ride
              Noord, a powerful new e-bike. The Range Rover among the e-bikes.
              During these 10 weeks, I worked on the wireframes of our user's
              platform. Later on, I also worked on building the website of Ride
              Noord. Besides this I also did some projects for E-Bike to go and
              I eventually got asked to work for them after my internship
            </p>
            <h4> Grade: A/A- (7,5) </h4>{" "}
          </HeaderContent>
        </header>
        <Main>
          <figure>
            <img
              src="./assets/noord/wireframes.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <p>
            Our team of 3 build the website from scratch. This would give us
            more control. The current website of E-bike to go is built in
            WordPress with Elementor. One of our decisions to start from
            scratch, was also that the Elementor based website was very slow.
            <br /> <br />
            In the end, we build our WordPress theme, called RideNoord. I
            learned to work in a team in this way. Being at the office was
            better, our communication through online, zoom or google meets was
            sometimes a bit chaotic. We used Github to make the process of
            pushing and pulling code easier. Before this, I used Github a few
            times, but in this period I grasped the way of working with Git.
          </p>
          <figure>
            <img
              src="./assets/noord/website.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <p>
            We build it in a way where we could use HTML and SASS. Later on, we
            would add this in the WordPress backend. I think this process could
            have been way easier. And also cost us some time. Having a setup
            where you write your code for the page you working on and it
            automatically transfers this to the website, is way cleaner in my
            opinion. But we had a deadline, so in the end, this was the fastest
            and easiest solution. Without needing to learn new stuff.
          </p>
          <a
            href="https://ridenoord.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ridenoord.nl
          </a>
          <TechBlock>
            <h5>Technologies / Software</h5>
            <p>
              We used Sketch for the visuals & wireframes. The website is built
              on a framework of PHP. We used HTML to structure our pages and
              SASS for styling.{" "}
            </p>
          </TechBlock>

          <h3>Disover other projects</h3>

          <NextProjects>
            <div>
              <figure>
                <img src="./assets/spaceX.png" alt="" loading="lazy" />
              </figure>
              <div className="ProjectContent">
                <h4> Rebuilding SpaceX </h4>{" "}
                <Link to="/spacex">
                  <img src="./assets/arrow.svg" alt="" loading="lazy" />
                </Link>{" "}
              </div>
            </div>
            <div>
              <figure>
                <img src="./assets/namenmonument.png" alt="" loading="lazy" />
              </figure>
              <div className="ProjectContent">
                <h4> Slavery names memorial </h4>{" "}
                <Link to="/memorial">
                  <img src="./assets/arrow.svg" alt="" loading="lazy" />
                </Link>{" "}
              </div>
            </div>
          </NextProjects>
        </Main>
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}
