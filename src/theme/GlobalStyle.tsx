import { createGlobalStyle } from "styled-components";
import { StyleTheme } from "./Theme";

// ${ props => props.theme.primary };
type GlobalProps = {
  theme: StyleTheme  
} 

// ${ (props: GlobalProps) => {
//     console.log(props.theme.colors.primary);
//     return props.theme.colors.primary
// } };

export const GlobalStyle = createGlobalStyle`

    body{
        background-color: #f2f2f2;
        min-height: 100vh;
    }    

`;