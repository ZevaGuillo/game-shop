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
