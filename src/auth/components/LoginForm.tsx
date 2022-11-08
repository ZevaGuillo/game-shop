import Button from '@/components/Button';
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
        <Button>Sign in with Google</Button>

        <form className="form">
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <div className='sign'>
            <Button>Sign in</Button>
            <Link to="/auth/register" className='link'>Create an account</Link>
          </div>
        </form>

        <section>
        </section>
      </StyledLogin>
  )
}

const StyledLogin = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  gap: 1rem;

  .form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .sign{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .link{
        text-align: end;
      }
      button{
          width: fit-content;
    }
    }
  }
`;

export default LoginForm