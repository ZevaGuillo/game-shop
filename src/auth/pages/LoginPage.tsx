import Input from '@/components/Input';
import styled from 'styled-components';



const LoginPage = () => {
  return (
    <StyledLoginPage>
      <form className='form'>
        <Input label='Email' type='email'/>
        <Input label='Password' type='password'/>
      </form>
    </StyledLoginPage>
  )
}

const StyledLoginPage = styled.main`
  .form{
    width: 50%;
  }
`;

export default LoginPage