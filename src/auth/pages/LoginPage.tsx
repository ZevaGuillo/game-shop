import Input from '@/components/Input';
import styled from 'styled-components';
import LogoSVG from '@/components/LogoSVG';



const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div>
        <LogoSVG/>
      </div>
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
  div{
    width: 50%;
  }
`;

export default LoginPage