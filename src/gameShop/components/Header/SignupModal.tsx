import Button from "@/components/Button";
import styled from "styled-components";
import { useAppDispatch } from '../../../hooks/redux';
import { handleModal } from '@/store/auth/authSlice';

const SignupModal = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledSignupModal>
      <section className="buttons">
        <Button
          className="login"
          onClick={() => {
            dispatch(handleModal('login'));
          }}>
          <span>Log in</span>
        </Button>
        <Button
          onClick={() => {
            dispatch(handleModal('register'));
          }}>
          <span>Create account</span>
        </Button>
      </section>
    </StyledSignupModal>
  );
};

const StyledSignupModal = styled.main`

  .buttons {
    display: flex;
    gap: 1rem;
    .login {
      background-color: transparent;
      border: 2px solid ${props => props.theme.colors.primary};
      span {
        color: ${props => props.theme.colors.negative};
      }
    }
  }

 
`;

export default SignupModal;
