import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAppDispatch } from "@/hooks/redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "@/store/auth/thunks";
import { BsGoogle } from "react-icons/bs";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";
import { useAppSelector } from "../../hooks/redux";
import { useMemo } from "react";
import { Alert, Snackbar } from "@mui/material";
import { setActiveMenu } from "@/store/auth/authSlice";

const LoginForm = () => {
  const { status, errorMessage } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <StyledLogin className="login">
      <header className="header">
        <h1 className="title">Sign in</h1>
        <div
          className="link-register"
          onClick={() => dispatch(setActiveMenu("register"))}>
          Create an account {">"}
        </div>
      </header>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}>
        <Alert
          severity="error"
          sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>

      <Button
        className="btn-google"
        onClick={handleGoogleSignIn}>
        <BsGoogle className="icon" />
        <span>Sign in with Google</span>
      </Button>

      <form
        className="form"
        onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <div className="sign">
          <Button
            type="submit"
            disabled={isAuthenticating}>
            <span>Sign in</span>
          </Button>
        </div>
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    h1 {
      font-size: 2em;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    .link-register {
      cursor: pointer;
      color: ${props => props.theme.colors.variant3};
    }
  }
  .btn-google {
    margin-bottom: 1rem;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .sign {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        width: fit-content;
      }
    }
  }
`;

export default LoginForm;
