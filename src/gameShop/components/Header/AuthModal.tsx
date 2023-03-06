import LoginForm from "@/auth/components/LoginForm";
import RegisterForm from "@/auth/components/RegisterForm";
import Layout from "@/auth/layout";
import { handleModal } from "@/store/auth/authSlice";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';


const AuthModal = () => {

  const {isModalOpen, activeMenu} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch()

  return (
    <StyledAuthModal>
      {isModalOpen && (
        <div
          className="modal"
          onClick={() => dispatch(handleModal('login'))}>
          <div
            className="modal-content"
            onClick={event => event.stopPropagation()}>
            <Layout>
              <>
                {activeMenu === "login" && (
                  <div className="menu">
                    <LoginForm/>
                  </div>
                )}
                {activeMenu === "register" && (
                  <div className="menu">
                    <RegisterForm/>
                  </div>
                )}
              </>
            </Layout>
          </div>
        </div>
      )}
    </StyledAuthModal>
  );
};

const StyledAuthModal = styled.div`
  .modal {
    top: 0;
    left: 0;
    z-index: 11111;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #212121c3;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .modal-content {
      width: 100%;
      height: 90%;
      background-color: ${props => props.theme.colors.bgColor};
      border-radius: 8px;
      overflow: hidden;
    }
  }

  @media (min-width: 900px) {
    .modal {
      align-items: center;
      .modal-content {
        width: 50%;
        height: 50%;
      }
    }
  }
`;

export default AuthModal;
