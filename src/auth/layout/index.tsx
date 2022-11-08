import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <div className="image">
        <img src="https://cdna.artstation.com/p/assets/images/images/051/583/202/large/amir-zand-int3llect-x.jpg?1657657514" />
      </div>
      {/* <div>
        <LogoSVG/>
      </div> */}
      <div className="content">
        <nav className="navigation">
          <Link to="/auth/login">Sing in</Link>
          <Link to="/auth/register">Sing up</Link>
        </nav>
        {children}
      </div>
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  .image {
    position: relative;
    width: 100vw;
    height: 40vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .content {
    width: 100vw;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .navigation{
      display: flex;
      gap: 1rem;
    }

  }

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    .image {
      min-height: 100vh;
      max-width: 60vw;
    }
    .content {
      max-width: 40vw;
    }
  }
`;

export default Layout;
