import Button from "@/components/Button";
import Input from "@/components/Input";
import { BsGoogle } from "react-icons/bs";
import styled from "styled-components";
import { useForm } from "../../hooks/useForm";

type LoginFormProps = {
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
};

const LoginForm = ({ setActiveMenu }: LoginFormProps) => {

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log('fff');
    
  };

  return (
    <StyledLogin className="login">
      <header className="header">
        <h1 className="title">Sign in</h1>
        <div
          className="link-register"
          onClick={() => setActiveMenu("settings")}>
          Create an account {'>'}
        </div>
      </header>

      <Button className="btn-google">
        <BsGoogle className="icon" />
        <span>Sign in with Google</span>
      </Button>

<<<<<<< HEAD
      <form className="form">
        <Input
          label="Email"
          type="email"
=======
      <form className="form" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
>>>>>>> 89205ab (Added states to form from login)
        />
        <Input
          label="Password"
          type="password"
<<<<<<< HEAD
=======
          name="password"
          value={password}
          onChange={onInputChange}
>>>>>>> 89205ab (Added states to form from login)
        />
        <div className="sign">
          <Button type="submit" >
            <span>Sign in</span>
          </Button>
<<<<<<< HEAD
=======
          <Link
            to="/auth/register"
            className="link">
            Create an account
          </Link>
>>>>>>> 89205ab (Added states to form from login)
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
    .link-register{
      cursor: pointer;
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
