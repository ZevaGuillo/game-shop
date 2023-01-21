import LoginForm from "@/auth/components/LoginForm";
import RegisterForm from "@/auth/components/RegisterForm";
import Button from "@/components/Button";
import ToggleSwitch from "@/components/ToggleSwitch";
import { useAppDispatch } from "@/hooks/redux";
import { startLogout } from "@/store/auth/thunks";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useAppSelector } from "../../../hooks/redux";
import Avatar from "@mui/material/Avatar";

type UserDropdownProps = {
  setIsOpen: () => void;
};

const UserDropdown = ({ setIsOpen }: UserDropdownProps) => {
  const { displayName, photoURL } = useAppSelector(state => state.auth);

  const dropdownRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  useOnClickOutside(dropdownRef, () => setIsOpen());

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <StyledDropdown
      className="dropdown"
      ref={dropdownRef}>
      <section className="menu">
        <div className="option">
          <div className="name">
            <Avatar
              sx={{ width: 37, height: 37, bgcolor: "#7D52D9" }}
              alt={displayName || ""}
              src={photoURL || ""}
            />
            <h2>{displayName}</h2>
          </div>
          <div className="darkmode">
            <h3>Dark Mode</h3>
            <ToggleSwitch />
          </div>
        </div>
        <Button
          className="btn-logout"
          onClick={() => onLogout()}>
          <span>Logout</span>
        </Button>
      </section>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  --bg: ${props => props.theme.colors.menubg};
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border-radius: 8px;
  --speed: 500ms;

  position: absolute;
  top: 3rem;
  left: -7.5vw;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;

  .menu {
    width: 100%;
    .option {
      
      .darkmode, .name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      } 
      h3 {
        font-weight: normal;
      }
    }
  }
  .btn-logout {
    width: 100%;
  }
  
  .menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
  }

  .menu-item .icon-button {
    margin-right: 0.5rem;
  }

  .menu-item .icon-button:hover {
    filter: none;
  }

  .menu-item:hover {
    background-color: #525357;
  }
`;

export default UserDropdown;
