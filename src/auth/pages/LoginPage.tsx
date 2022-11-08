import Input from "@/components/Input";
import styled from "styled-components";
import LogoSVG from "@/components/LogoSVG";
import { Link } from "react-router-dom";
import Layout from "../layout";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <StyledPage>
        <LoginForm/>
      </StyledPage>
    </Layout>
  );
};

const StyledPage = styled.section`
  width: 100%;
  height: 100%;

`



export default LoginPage;
