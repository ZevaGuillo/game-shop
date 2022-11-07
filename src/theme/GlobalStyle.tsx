import { createGlobalStyle } from "styled-components";
import { StyleTheme } from "./Theme";
import { normalize } from 'styled-normalize'


// ${ props => props.theme.primary };
type GlobalProps = {
  theme: StyleTheme  
} 

// ${ (props: GlobalProps) => {
//     console.log(props.theme.colors.primary);
//     return props.theme.colors.primary
// } };

export const GlobalStyle = createGlobalStyle`
     ${normalize}

     body {
        height: 100vh;
        display: grid;
        font-family: Roboto;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
    }    

`;