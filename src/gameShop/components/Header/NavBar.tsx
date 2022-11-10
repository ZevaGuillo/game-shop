import LogoSVG from "@/components/LogoSVG";
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import Search from "./Search";
import SearchInput from "./Search";

type NavBarProps = {
  toggleDrawer: () => void;
};

const NavBar = ({ toggleDrawer }: NavBarProps) => {
  return (
    <StyledNavBar className="container">
      <div onClick={toggleDrawer} className="drawer">
        <GiHamburgerMenu className="icon" />
      </div>
      <div className="logo-header">
        <LogoSVG className="logo-ico" />
        <span>Gameland</span>
      </div>

      <div className="options">
        <Search/>

        <FiUser className="icon" />

        <FiHeart className="icon favorite" />

        <FiShoppingCart className="icon" />
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav.attrs((props) => ({
  className: props.className,
}))`

  position: relative;
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
      user-select: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .options {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .favorite {
      display: none;
    }
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
    .drawer {
      display: none;
    }
    .options {
      gap: 2rem;
      .favorite {
        display: inline-block;
      }
    }
  }
`;

export default NavBar;
