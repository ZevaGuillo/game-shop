import Button from "@/components/Button";
import Input from "@/components/Input";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";

type LoginFormProps = {
  children?: JSX.Element;
};

const LoginForm = ({ children }: LoginFormProps) => {

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (even: React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault();
    console.log('fff');
    
  };

  return (
    <StyledLogin className="login">
      <h1 className="title">Sign in</h1>
      <Button className="btn-google">
        <BsGoogle className="icon" />
        <span>Sign in with Google</span>
      </Button>

      <form className="form" onSubmit={handleSubmit}>
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
          <Button type="submit" >
            <span>Sign in</span>
          </Button>
          <Link
            to="/auth/register"
            className="link">
            Create an account
          </Link>
        </div>
      </form>

      <section></section>
    </StyledLogin>
  );
};

const StyledLogin = styled.section`
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
    .sign {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .link {
        text-align: end;
      }
      button {
        width: fit-content;
      }
    }
  }
`;

export default LoginForm;
