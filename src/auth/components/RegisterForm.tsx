import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAppDispatch } from "@/hooks/redux";
import { useForm } from "@/hooks/useForm";
import { startCreatingUserWithEmailPassword } from "@/store/auth/thunks";
import React from "react";
import styled from "styled-components";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { displayName, email, password, formState, onInputChange } = useForm({
    displayName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(startCreatingUserWithEmailPassword(formState))
    console.log("fff");
  };

  return (
    <StyledRegisterPage>
      <h1>Sign Up</h1>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <Input
          type="text"
          label="UserName"
          name="displayName"
          value={displayName}
          onChange={onInputChange}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <Button type="submit" >
          <span>Sign up</span>
        </Button>
      </form>
    </StyledRegisterPage>
  );
};

const StyledRegisterPage = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  gap: 1rem;

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    button {
      width: fit-content;
    }
  }
`;
export default RegisterForm;
