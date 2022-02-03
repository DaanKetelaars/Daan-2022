import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Footer = styled.footer`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem 2rem;
    margin-top: 5rem;
    @media (min-width: 768px) {
      padding: 2rem 5rem;
    }
    @media (min-width: 1024px) {
      padding: 5rem 3rem 2rem 3rem;
    }
    @media (min-width: 1440px) {
      max-width: 90%;
      width: 100%;
      padding: 5rem 0 2rem 0;
    }
    @media (min-width: 2560px) {
      max-width: 90%;
      width: 100%;
      padding: 5rem 0 2rem 0;
    }
  `;
  const Nav = styled.nav`
    min-width: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    ul:nth-of-type(1) {
      display: inline-flex;
      align-items: center;
      width: 100%;
      margin-top: 5rem;
      li {
        list-style: none;
        text-transform: lowercase;
        margin-right: 2rem;
        a {
          text-decoration: none;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f0f0f0;
          color: #f0f0f0;
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
          font-size: 0.75rem;
          @media (min-width: 768px) {
            font-size: 1rem;
          }
          @media (min-width: 1024px) {
            &:hover {
              opacity: 0.5;
            }
          }
        }
      }
    }
    ul:nth-of-type(2) {
      display: inline-flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-top: 6rem;
      margin-bottom: 2rem;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      li:nth-child(1) {
        list-style: none;
        font-weight: lighter;
        text-transform: uppercase;
        margin-right: auto;
        color: #41413d;
        font-size: 0.65rem;
        @media (min-width: 1024px) {
          font-size: 0.85rem;
        }
      }
      li:nth-child(2) {
        list-style: none;
        font-weight: lighter;
        text-transform: uppercase;
        color: #41413d;
        font-size: 0.65rem;
        margin-right: auto;
        margin-top: 1rem;
        @media (min-width: 768px) {
          margin-right: 0;
          margin-top: 0;
        }
        @media (min-width: 1024px) {
          font-size: 0.85rem;
        }
      }
      li:nth-child(3) {
        list-style: none;
        font-weight: lighter;
        text-transform: uppercase;
        position: relative;
        color: #41413d;
        font-size: 0.65rem;
        margin-right: auto;
        @media (min-width: 768px) {
          margin-right: 0;
          margin-top: 0;
          margin-left: 5rem;
          &::before {
            content: "";
            width: 50px;
            height: 2px;
            left: -4rem;
            top: 0.3rem;
            position: absolute;
            background: #41413d;
          }
        }
        @media (min-width: 1024px) {
          font-size: 0.85rem;
        }
      }
    }
  `;
  const SubHeading = styled.h3`
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
  `;

  return (
    <Footer>
      <SubHeading>
        <div>
          contact me for any questions
          <br />
          or work enquiries.
        </div>
      </SubHeading>
      <Nav>
        <ul>
          <li>
            <a href="email">email</a>
          </li>
          <li>
            <a href="linkedin">linkedin</a>
          </li>
          <li>
            <a href="github">github</a>
          </li>
          <li>
            <a href="twitter">twitter</a>
          </li>
        </ul>
        <ul>
          <li>DESIGNED AND DEVELOPED BY ME</li>
          <li>AMS</li>
          <li>52.377956, 4.897070</li>
        </ul>
      </Nav>
    </Footer>
  );
}
