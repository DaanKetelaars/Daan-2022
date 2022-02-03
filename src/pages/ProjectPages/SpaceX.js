import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function SpaceX() {
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
    }
    @media (min-width: 1440px) {
      max-width: 90%;
      width: 100%;
      padding: 3rem 0;
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
      margin-top: 5rem;
      @media (min-width: 1024px) {
        margin-bottom: 5rem;
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
          transform: scale(1.02);
          &:hover {
            transform: scale(1.01);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1);
          &:hover {
            transform: scale(0.96);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1.02);
          transform-origin: center 10%;
          &:hover {
            transform: scale(1.01);
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
        transform-origin: center 10%;
        @media (min-width: 768px) {
          transform: scale(1.2);
          transform-origin: center 150%;
        }
        @media (min-width: 1024px) {
          &:hover {
            transform: scale(1.18);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1);
          transform-origin: center bottom;
          &:hover {
            transform: scale(0.96);
          }
        }
        @media (min-width: 1440px) {
          transform: scale(1.85);
          transform-origin: center bottom;
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
        margin-top: 0;
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
        <Nav />
        <header>
          <HeaderContent>
            <figure>
              <img src="./assets/spacex/spacex-02.png" alt="" loading="lazy" />
            </figure>
            <h5>2nd year work</h5>
            <h2>
              Revolutionizing access <br />
              to space.
            </h2>
            <p>
              In my 2nd year, we had the course front-end development. Here we
              got the task to rebuild an existing website that you found
              interesting. I already had some experience with code due to my
              4-year interactive designer education before this bachelor. So I
              wanted to challenge myself and learn new things. I found SpaceX
              and liked the design and feel of the website. Especially working
              on rebuilding the animations was a good challenge. This is how I
              used GSAP for the first time to create the effect on the Falcon 9
              page (We had to create 2 pages btw).
              <br />
              <br />
              To challenge me even more I worked with SCSS and set everything up
              on a more professional level. Like I was working on this for real
              and as I was working with frameworks. even to the small details
              and make my code as clean as possible. Using almost no classes or
              ids. You could choose for surface plane or responsive, I chose
              both. It was challenging in the short amount of time we had, but
              I'm very proud of this project.
            </p>
            <h4> Grade: A++ (10) </h4>{" "}
          </HeaderContent>
        </header>
        <Main>
          <figure>
            <img
              src="./assets/spacex/home.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <p>
            The Falcon 9 page was the most challenging. I firstly got an A+ or
            9, but my teacher said to me you can get an A++ (10) if you add the
            scroll trigger animation from the Falcon 9 rocket to your project.
            Me being me, I accepted that challenge. I like to be challenged, I
            learn a lot from that. So I did and manage to do it with GSAP. The
            first time I used GSAP and it worked out great. It's not perfect
            yet, even when I look at it now with having more knowledge I would
            do some things differently. On safari, it doesn't fully work yet. I
            do think for the short period we had, it still looks decent and
            works fine.
          </p>
          <figure>
            <img
              src="./assets/spacex/falcon9.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <a
            href="https://github.com/DaanKetelaars/FED-J2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repository *the live site works best on chrome
          </a>
          <TechBlock>
            <h5>Technologies / Software</h5>
            <p>
              I built everything on basic semantic HTML. Next to this, I used
              SCSS to style everything and later on used some JS & GSAP for any
              more difficult animation/interaction work.
            </p>
          </TechBlock>

          <h3>Disover other projects</h3>

          <NextProjects>
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
            <div>
              <figure>
                <img src="./assets/top3albums.png" alt="" loading="lazy" />
              </figure>
              <div className="ProjectContent">
                <h4> Top 3 Albums </h4>{" "}
                <Link to="/top-3-albums">
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
