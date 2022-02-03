import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Memorial() {
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
                src="./assets/2seconden/namenmonument-02.png"
                alt=""
                loading="lazy"
              />
            </figure>
            <h5>3rd year work</h5>
            <h2>
              Take 2 seconds,
              <br />
              to stand still.
            </h2>
            <p>
              The information design course is fully based on data and creating
              visualizations around the data you receive. During this 1st
              semester, I have been learning a lot about data & visualizing this
              data. When my group and I{" "}
              <strong>(Shantalla, Bas, Juul, Daan)</strong> got asked to work on
              this slavery names memorial for in the Tropenmuseum of Amsterdam I
              got very excited. I am very interested in history, so combining
              this with my love for design and coding was very exciting. We got
              the task to create a concept in 5 weeks for the clients that will
              finalise the project for the Tropenmuseum.
              <br />
              <br />
              To start we set a design challenge for ourselfs.{" "}
              <strong>
                “How can a monument to the enslaved give personality to the
                enslaved and at the same time create a connection with the
                visitor?”.
              </strong>{" "}
              From this challenge, we continued with our project. We have to
              create a digital product that is being shown on 1 enormous screen
              and you have 3 big tablets for interaction. We have access to 2
              databases, here lies information of 200.000 enslaved. In total
              there are 2.000.000 enslaved, but with the rest, we don’t have any
              information at the moment. We did incorporate every 2.000.000
              enslaved. Just to show that there might be no information, but
              they will still be people as well. Not numbers.
            </p>
            <h4> Grade: A+ (9) </h4>{" "}
          </HeaderContent>
        </header>
        <Main>
          <figure>
            <img
              src="./assets/2seconden/scroll-animatie.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <p>
            Our idea was to have a paper stack, where every paper is one person.
            With the option on the tablet to dive deeper into that person. Cause
            we have 20 <strong>“stories”</strong> of a few of the enslaved. So,
            in the end, you have 2.000.000 pieces of paper. This all is just for
            the 3 tablet screens. For the big screen, we have an animation that
            is combined with the goal we wanted to have for the visitors of the
            memorial. Make sure we have “seen” every single person in the 10
            years that the monument will stand. <br /> <br />
            We calculated this with our 2.000.000 people and figured out that it
            will take around 2 minutes for one person to walk from the right
            side of the screen to the left side. All of this will give it more
            personality and visitors will have a clearer understanding that
            these enslaved are just like u and I. People. Also on the big
            screen, everything is made of those 2.000.000 papers.
          </p>
          <figure>
            <img
              src="./assets/2seconden/animatie-grote-scherm.gif"
              alt=""
              loading="lazy"
              data-scroll-call="lazyLoad"
            />
          </figure>
          <p>
            We got amazing feedback from our teachers, but especially from the
            clients of the Tropenmuseum. Of course, we only had 5 weeks to build
            all of this and we might not have everything yet. I do think this
            concept will be the base for the final memorial that will be shown
            soon.
          </p>
          <a
            href="https://juulvrasdonk.github.io/namenmonument-design-rationale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our design rationale *in dutch
          </a>
          <TechBlock>
            <h5>Technologies / Software</h5>
            <p>
              We used Figma for the visuals and prototype. We tested the swiping
              through the paper stack in GSAP and the 3D visuals were made in
              Blender.
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
