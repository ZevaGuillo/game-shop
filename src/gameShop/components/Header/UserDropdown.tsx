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

  const DropdownItem = (props: any) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

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

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <RegisterForm setActiveMenu={setActiveMenu} />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <LoginForm setActiveMenu={setActiveMenu} />
        </div>
      </CSSTransition>
    </div>
  );
};
export default UserDropdown;
