import Button from "@/components/Button";
import { useRef, useState } from "react";
import LoginForm from "@/auth/components/LoginForm";
import styled from "styled-components";
import RegisterForm from "@/auth/components/RegisterForm";
import Layout from "../../../auth/layout/index";

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("login");
  const modalRef = useRef<HTMLInputElement>(null);

  return (
    <StyledSignupModal>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <span>Sign up</span>
      </Button>

      {isOpen && (
        <div
          className="modal"
          onClick={() => setIsOpen(!isOpen)}>
          <div
            className="modal-content"
            onClick={event => event.stopPropagation()}>
            <Layout>
              <>
                {activeMenu === "login" && (
                  <div className="menu">
                    <LoginForm setActiveMenu={setActiveMenu} />
                  </div>
                )}
                {activeMenu === "register" && (
                  <div className="menu">
                    <RegisterForm setActiveMenu={setActiveMenu} />
                  </div>
                )}
              </>
            </Layout>
          </div>
        </div>
      )}
    </StyledSignupModal>
  );
};

const StyledSignupModal = styled.main`
  --speed: 500ms;

  .modal {
    top: 0;
    left: 0;
    z-index: 11;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #212121ac;
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

export default SignupModal;
