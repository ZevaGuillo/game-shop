import { SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";
import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";
import LogoSVG from "@/components/LogoSVG";
import styled from "styled-components";
import FilterSideBar from "../catalog/FilterSideBar";

type DrawerProps = {
  open: boolean;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ open, toggleDrawer }: DrawerProps) => {
  return (
    <SwipeableDrawer
      sx={{ zIndex: "10000" }}
      anchor={"left"}
      open={open}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}>
      <StyledDrawer>
        <Link
          className="logo-header"
          to={"/"}>
          <LogoSVG className="logo-ico" />
          <span>Gameland</span>
        </Link>
        <FilterSideBar/>
      </StyledDrawer>
    </SwipeableDrawer>
  );
};

const StyledDrawer = styled.div.attrs(props => ({
  className: props.className,
}))`
width: 70vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .logo-header{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
  }

`;
export default Drawer;
