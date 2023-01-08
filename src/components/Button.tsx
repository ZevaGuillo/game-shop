import React from "react";
import { IconBaseProps, IconType } from "react-icons/lib";
import styled from "styled-components";

type ButtonProps = {
  children: JSX.Element | JSX.Element[],
  className?: string,
  type?:  "button" | "submit" | "reset" | undefined
  onClick?: ()=>void
};

const Button = ({ children, className, type, onClick }: ButtonProps) => {
  let classN = `button ${className}`;
  return (
    <StyledButton className={classN} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button.attrs((props) => ({
  className: props.className,
}))`

  border: none;
  border-radius: 2rem;
  box-sizing: border-box;
  letter-spacing: .1em;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

&:focus-visible {
  box-shadow: none;
}
`;

export default Button;
