import { useAppDispatch } from "@/hooks/redux";
import { useForm } from "@/hooks/useForm";
import { startCreatingUserWithEmailPassword } from "@/store/auth/thunks";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import styled from "styled-components";
import { useMemo } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Alert, Snackbar } from "@mui/material";

type RegisterFormProps = {
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
};

const RegisterForm = ({ setActiveMenu }: RegisterFormProps) => {
  const { status, errorMessage } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  // TODO: Add validations
  const { displayName, email, password, formState, onInputChange } = useForm({
    displayName: "",
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <StyledRegister>
      <div
        className="link-login"
        onClick={() => setActiveMenu("login")}>
        {"<"}go to login
      </div>
      <h1>Sign Up</h1>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}>
        <Alert
          severity="error"
          sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>

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
        <Button
          type="submit"
          disabled={isAuthenticating}>
          <span>Sign up</span>
        </Button>
      </form>
    </StyledRegister>
  );
};

const StyledRegister = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;

  .link-login {
    cursor: pointer;
    color: ${props => props.theme.colors.variant3};
  }

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
