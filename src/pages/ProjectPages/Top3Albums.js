import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function TopAlbums() {
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
        transform-origin: 50% 20%;
        @media (min-width: 768px) {
          transform: scale(1.2);
          transform-origin: bottom;
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
          transform-origin: center 75%;
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
              <img
                src="./assets/topalbums/top3albums-02.png"
                alt=""
                loading="lazy"
              />
            </figure>
            <h5>3rd year front-end applications</h5>
            <h2>
              Find your <br />
              favourite album
            </h2>
            <p>
              Entering the information design course you could choose to go in
              the visual track or the tech track. The tech track looked more fun
              for me and a good challenge to improve my coding skills. We had 3
              little projects in the period of our tech track. Functional
              programming, Front-end Data & Front-end Applications. My top 3
              albums are the project I build for Front-end Apps.
              <br /> <br />I used the API of LastFM to create a mini database of
              the top 3 albums of every artist in the API. We also had to
              configure this into a framework of choice. I used React for this
              application just so I could learn more about React. I opted to try
              and use ThreeJS for my data visualization, but due to lack of
              time, I switched to an easier application. As we only had 2 weeks
              for this. It was a hassle and a challenge, but I managed to create
              a decent application.
            </p>
            <h4> Grade: B/B+ (7,3) </h4>{" "}
          </HeaderContent>
        </header>
        <Main>
          <figure>
            <img
              src="./assets/topalbums/website.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <p>
            For this project what I did first was to collect my data. See what I
            was going to do with it. After that, you try to set everything up in
            a functional programming style. You go through a few processes of
            fetching the data, cleaning it and then implementing this data into
            your app. LastFM API wasn't easy to use. I had to figure something
            out to make it more dynamic and useable.
            <br /> <br />
            In their API key, you would always have a static name of an artist.
            I wanted to make this more dynamic. Just so I got to do more with
            it. I figured that out and it worked. If you search it will change
            the name of the artist dynamically in the API key. I think I could
            have used React and its powers way more. This is something my
            teachers also told me when they graded me. It's an okay little app
            for the 2 weeks we had, but I could have used React way better and
            spent less time.
          </p>
          <figure>
            <img
              src="./assets/topalbums/code.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <a
            href="https://github.com/DaanKetelaars/Top-3-Albums"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github repository
          </a>
          <TechBlock>
            <h5>Technologies / Software</h5>
            <p>
              For this project, I used React as my framework. Besides this I
              used SCSS for my styling. Combining everything with some
              Functional programming to fetch, clean and use the data.
            </p>
          </TechBlock>

          <h3>Disover other projects</h3>

          <NextProjects>
            <div>
              <figure>
                <img src="./assets/ebiketogo.png" alt="" loading="lazy" />
              </figure>
              <div className="ProjectContent">
                <h4> E - bike to go / Ride Noord </h4>{" "}
                <Link to="/ebtg">
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
