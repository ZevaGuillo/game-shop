import LogoSVG from "@/components/LogoSVG";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

type NavBarProps = {
  toggleDrawer: () => void;
};

const NavBar = ({ toggleDrawer }: NavBarProps) => {
  return (
    <StyledNavBar className="container">
      <div onClick={toggleDrawer}>
        <GiHamburgerMenu className="icon" />
      </div>
      <div className="logo-header">
        <LogoSVG className="logo-ico" />
        <span>GameLand</span>
      </div>
      <div className="options">
        <FiSearch className="icon" />

        <FiShoppingCart className="icon" />

        <FiUser className="icon" />
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  background-color: aliceblue;
  height: 3rem;
  max-height: 3rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .logo-header {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .logo-ico {
      height: 100%;
    }
    span {
      font-size: 1.2em;
      line-height: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .options {
    display: flex;
    gap: 0.4rem;
  }

  @media (min-width: 900px) {
    height: 5rem;
    max-height: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    .logo-header {
      .logo-ico {
        height: 90%;
      }
      span {
        font-size: 1.5em;
      }
    }
  }
`;

export default NavBar;
