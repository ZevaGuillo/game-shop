import LogoSVG from "@/components/LogoSVG";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import Search from "./Search";
import Usermenu from "./Usermenu";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks/redux";
import SignupModal from "./SignupModal";
import FavoriteMenu from "./FavoriteMenu";
import ShoppingCartMenu from "./ShoppingCardMenu";
import BottomNav from "./BottomNav";

type NavBarProps = {
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ toggleDrawer }: NavBarProps) => {
  const { status } = useAppSelector(state => state.auth);

  return (
    <StyledNavBar className="container">
      <div
        onClick={()=>toggleDrawer(true)}
        className="drawer">
        <GiHamburgerMenu className="icon" />
      </div>
      <Link
        className="logo-header"
        to={"/"}>
        <LogoSVG className="logo-ico" />
        <span>Gameland</span>
      </Link>

      <div className="search">
        <Search />
      </div>

      <div className="options">
        {/* <ToggleSwitch/> */}

        {status === "authenticated" ? (
          <>
            <FavoriteMenu />
            {/* <FiHeart className="icon favorite" /> */}

            <ShoppingCartMenu />

            <Usermenu />
          </>
        ) : status === "checking" ? (
          <></>
        ) : (
          <SignupModal />
        )}
        {/* <FiUser className="icon" /> */}
      </div>

      <BottomNav/>

    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav.attrs(props => ({
  className: props.className,
}))`
  z-index: 9991;
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.colors.bgColor};
  height: 3rem;
  width: 100vw;
  max-height: 3rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.variant};

  .logo-header {
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    .logo-ico {
      height: 100%;
    }
    span {
      font-size: 1.2em;
      line-height: 0;
      user-select: none;
      color: ${props => props.theme.colors.negative};
    }
    &:hover {
      cursor: pointer;
    }
  }

  .options {
    display: none;
    /* display: flex; */
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
    background-color: ${props => props.theme.colors.bgColorOpacity};
    backdrop-filter: blur(10px);
    .logo-header {
      flex: none;
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
      display: flex;
      gap: 2rem;
      .favorite {
        display: inline-block;
      }
    }
    .search {
      display: grid;
      place-content: center;
    }
  }
`;

export default NavBar;
