import { GiHamburgerMenu } from "react-icons/gi";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import LogoSVG from "@/components/LogoSVG";
import styled from "styled-components";
import { useState } from "react";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <header>
      { isOpen && <Drawer/>} 
      <NavBar toggleDrawer={toggleDrawer}/>
    </header>
  );
};




export default Header;
