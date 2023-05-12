import { createGlobalStyle } from "styled-components";
import { StyleTheme } from "./Theme";
import { normalize } from "styled-normalize";

// ${ props => props.theme.primary };
type GlobalProps = {
  theme: StyleTheme;
};

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root{
        --dark:  ${(props: GlobalProps) => props.theme.colors.bgColor};
        --thumb-bg: ${(props: GlobalProps) => props.theme.colors.btnHover};
    }
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--thumb-bg);
        border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:active,
    ::-webkit-scrollbar-thumb:hover {
        background: var(--dark);
    }
    ::-webkit-scrollbar-track {
        background: #ffffff15;
    }

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
    p{
      font-size: 1rem;
      margin-block-start: 0;
      margin-block-end: 0;
    }

    ul{
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a{
      color: ${(props: GlobalProps) => props.theme.colors.text};
      text-decoration: none;
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
    .icon.active{
      color: ${(props: GlobalProps) => props.theme.colors.primary};
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

    .glass{
      background: ${(props: GlobalProps) => props.theme.colors.cardGradient}; 
      box-shadow: ${(props: GlobalProps) => props.theme.colors.cardShadow}; 

    }

    .padding-nav{
      padding-top: 3.5rem ;
      @media (min-width: 900px) {
          padding-top: 6rem;
      }
    }

    .container-skeleton-slider{
      padding:5rem 0.7rem;
      .skeleton-slider{
        width: 100%;
      }
      @media (min-width: 900px) {
        padding:7.8rem 11%;
      }
    }

    .container-loading{
      min-height: 100vh;
      min-width: 100vw;
      display: grid;
      place-content: center;
    }

`;
