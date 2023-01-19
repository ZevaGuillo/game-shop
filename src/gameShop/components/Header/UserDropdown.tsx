import LoginForm from "@/auth/components/LoginForm";
import RegisterForm from "@/auth/components/RegisterForm";
import ToggleSwitch from "@/components/ToggleSwitch";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

type UserDropdownProps = {
  setIsOpen: () => void;
};

const UserDropdown = ({ setIsOpen }: UserDropdownProps) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<number>();
  const dropdownRef = useRef<HTMLInputElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen());

  useEffect(() => {
    dropdownRef.current &&
      setMenuHeight(
        (dropdownRef.current.firstChild as HTMLElement).offsetHeight
      );
  }, []);

  function calcHeight(el: any) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div
      className="dropdown"
      style={{ height: (menuHeight! || 0) + 30 }}
      ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <div className="user">
            <p>Guillermo</p>
          </div>
          <div>
            <p>Dark Mode</p>
            <ToggleSwitch />
          </div>
        </div>
      </CSSTransition>
      
    </div>
  );
};
export default UserDropdown;
