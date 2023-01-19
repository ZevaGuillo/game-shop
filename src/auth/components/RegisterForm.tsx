import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import styled from "styled-components";

type RegisterFormProps = {
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
};

const RegisterForm = ({ setActiveMenu }: RegisterFormProps) => {
  return (
    <StyledRegister>
      <div onClick={() => setActiveMenu("main")}>{'<'}go to login</div>
      <h1>Sign Up</h1>
      <form className="form">
        <Input
          type="text"
          label="UserName"
        />
        <Input
          type="email"
          label="Email"
        />
        <Input
          type="password"
          label="Password"
        />
        <Button>
          <span>Sign up</span>
        </Button>
      </form>
    </StyledRegister>
  );
};

const StyledRegister = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;

  h1 {
    font-size: 2em;
    margin-block-start: 0;
    margin-block-end: 1rem;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      width: fit-content;
    }
  }
`;

export default RegisterForm;
