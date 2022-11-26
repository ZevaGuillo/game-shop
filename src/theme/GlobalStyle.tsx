import { createGlobalStyle } from "styled-components";
import { StyleTheme } from "./Theme";
import { normalize } from "styled-normalize";

// ${ props => props.theme.primary };
type GlobalProps = {
  theme: StyleTheme;
};

export const GlobalStyle = createGlobalStyle`
     ${normalize}
     
     * {
        box-sizing: border-box;
        line-height: normal;
     }  
       
     body {
      background-color: ${(props: GlobalProps) => props.theme.colors.bgColor};
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

    h1,h2,h3,h4,p,span{
      color: ${(props: GlobalProps) => props.theme.colors.negative};
    }

    .container{
      padding-left:.7rem;
      padding-right: .7rem;
      @media (min-width: 900px){
        padding-left:7%;
        padding-right: 7%;
      }
    }

    .icon{
      font-size: 1.3em;
      line-height: 0;
      color: ${(props: GlobalProps) => props.theme.colors.negative};
      @media (min-width: 900px){
        font-size: 1.5em;
      }
    }
    .icon.check{
      color: blue;
    }

    .button{
      background-color: ${(props: GlobalProps) => props.theme.colors.primary};
      span{
        color: #fff;
      }
    }

    .btn-google{
      background-color: ${(props: GlobalProps) =>
        props.theme.colors.googleColor};
      display: flex;
      align-items: center;
      justify-content: center;
      gap:.7rem;
      .icon, span{
        color: #fff;
      }
      span{
      }
      .icon{
        line-height: 0;
      }
    }

    .background-blur{
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      border-radius: 16px;
      filter: blur(5px);
      opacity: .4;
    }

`;
