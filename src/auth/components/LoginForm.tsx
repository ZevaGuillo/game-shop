import Input from '@/components/Input';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type LoginFormProps = {
    children?: JSX.Element;
  };

const LoginForm = ({ children }:LoginFormProps) => {
  return (
    <StyledLogin className="login">
        <h1 className='title'>Sign in</h1>
        <button>Sign in with Google</button>
        <form className="form">
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <button>Sign in</button>
        </form>
        <section>
          <Link to="/auth/register">Create an account</Link>
        </section>
      </StyledLogin>
  )
}

const StyledLogin = styled.section`
  width: 100%;
  .form{
    width: 100%;
  }
`;

export default LoginForm