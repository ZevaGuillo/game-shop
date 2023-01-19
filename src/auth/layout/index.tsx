import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthSVGPattern from "../components/svgs/AuthSVGPattern";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <div className="image">
        <AuthSVGPattern />
        <img src="https://cdna.artstation.com/p/assets/images/images/051/583/202/large/amir-zand-int3llect-x.jpg?1657657514" />
      </div>
      {/* <div>
        <LogoSVG/>
      </div> */}
      <div className="content">
        {children}
      </div>
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow-y: hidden;
  transition: all 0.25s ease;
  .image {
    position: relative;
    width: 100%;
    height: 40%;
    img {
      width: 100%;
      position: relative;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #012;
      opacity: 0.2;
      z-index: 1;
    }
    svg {
      position: absolute;
      display: none;
    }
  }

  .content {
    width: 100vw;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .navigation {
      display: flex;
      gap: 1rem;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    .image {
      min-height: 100%;
      max-width: 60%;
      svg {
        display: block;
        height: 100%;
        left: 0;
        z-index: 10;
        transform: rotate(0deg);
      }
    }
    .content {
      max-width: 45%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;

export default Layout;
