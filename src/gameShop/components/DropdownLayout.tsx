import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { startLogout } from "@/store/auth/thunks";
import { useRef } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

type DropdownLayoutProps = {
    children: JSX.Element | JSX.Element[] 
  setIsOpen: () => void;
  className?: string
};

const DropdownLayout = ({ children, setIsOpen,className }: DropdownLayoutProps) => {

  const dropdownRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  useOnClickOutside(dropdownRef, () => setIsOpen());

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <StyledDropdown
      className={`dropdown ${className}`}
      ref={dropdownRef}>
      <section className="menu">
        {children}
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
  overflow-y: hidden;
  max-height: 25rem;
  overflow: auto;
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

export default DropdownLayout;
