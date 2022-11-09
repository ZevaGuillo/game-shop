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
     
     * {
         box-sizing: border-box;
         line-height: 0;
     }  
       
     body {
        height: 100vh;
        overflow-x: hidden;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        font-family: 'Outfit', sans-serif;
        font-size: 14px;
        line-height: 17.64px;

    }

    h1{
        font-size: 3.75em;
    }


`;