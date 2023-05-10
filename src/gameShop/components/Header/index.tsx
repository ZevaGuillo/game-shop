import { useState } from "react";
import NavBar from "./NavBar";
import Drawer from "./Drawer";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <header>
      { isOpen && <Drawer open={isOpen} toggleDrawer={setIsOpen}/>} 
      <NavBar toggleDrawer={setIsOpen}/>
    </header>
  );
};




export default Header;
