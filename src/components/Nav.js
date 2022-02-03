import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Nav() {
  const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 2rem 2rem;
    @media (min-width: 768px) {
      padding: 2rem 5rem;
    }
    @media (min-width: 1024px) {
      padding: 2rem 3rem;
    }
    @media (min-width: 1440px) {
      max-width: 90%;
      width: 100%;
      padding: 4rem 0;
    }
    @media (min-width: 2560px) {
      max-width: 90%;
      width: 100%;
      padding: 4rem 0;
    }
    ul {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      li {
        list-style: none;
        overflow: hidden;
        a {
          text-decoration: none;
          color: #f0f0f0;
          overflow: hidden;
          div {
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
            @media (min-width: 1024px) {
              &:hover {
                opacity: 0.5;
              }
            }
          }
        }
        img {
          width: 30px;
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
        }
        &:nth-child(1) {
          overflow: none;
        }
      }
    }
  `;
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">
            <img src="./assets/logo.svg" alt="logo" loading="lazy" />
          </Link>
        </li>
        <li>
          <Link to="/Profile">
            <div className="reveal">full profile</div>
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
