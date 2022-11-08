import Input from "@/components/Input"
import styled from "styled-components"
import Layout from "../layout"


export const RegisterPage = () => {
  return (
    <Layout>
      <StyledRegisterPage>
        <h1>Sign Up</h1>
        <form className="form">
          <Input type="text" label="UserName"/>
          <Input type="email" label="Email"/>
          <Input type="password" label="Password"/>
          <button>Sign up</button>
        </form>
      </StyledRegisterPage>
    </Layout>
  )
}

const StyledRegisterPage = styled.section`
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
    button{
        width: fit-content;
    }
  }

`