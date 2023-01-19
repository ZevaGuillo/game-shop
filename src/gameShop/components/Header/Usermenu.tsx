import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useState } from 'react';
import UserDropdown from "./UserDropdown";

const Usermenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  // TODO: VAlidad incio de sesion
  return (
    <StyledUserMenu>
      <IconButton
        sx={{ p: 0 }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <Avatar
          sx={{ width: 37, height: 37 }}
          alt="username"
          src="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg"
        />
      </IconButton>

      {isOpen && <UserDropdown setIsOpen={() => setIsOpen(!isOpen)}/>}
    </StyledUserMenu>
  );
};

const StyledUserMenu = styled.div`
  --bg: ${(props) => props.theme.colors.menubg};
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border-radius: 8px;
  --speed: 500ms;
  position: relative;

  .option {
    display: flex;
  }

  .dropdown {
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
  }

  .menu {
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

  .icon-right {
    margin-left: auto;
  }

  /* CSSTransition classes  */
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
`;

export default Usermenu;
