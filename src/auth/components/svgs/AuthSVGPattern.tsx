import React from "react";
import styled from "styled-components";

const AuthSVGPattern = () => {
  return (
    <StyledSVG
      viewBox="0 0 244.93 540"
    >
      <path
        className="cls-5"
        d="M132,0l-2.2,10c-2.1,10-6.5,30-6.3,50s4.8,40,8,60,4.8,40,6.8,60,4.4,40,4.5,60a223.79,223.79,0,0,1-7.1,60c-5.4,20-14,40-16.7,60s.7,40,5.3,60,10.7,40,12.9,60,.5,40-.4,50l-.8,10H0V0Z"
      />
      <path
        className="cls-6"
        d="M108,0l.3,10c.4,10,1,30-2.3,50s-10.7,40-12,60,3.3,40,7.3,60,7.4,40,7.2,60-3.8,40-4,60,3.2,40,2,60-6.8,40-10.2,60-4.3,40-4.1,60,1.5,40,2.1,50l.7,10H0V0Z"
      />
      <path
        className="cls-7"
        d="M83,0,80.5,10C78,20,73,40,73.8,60s7.5,40,11.2,60a195,195,0,0,1,1.8,60c-2.5,20-8.1,40-11.6,60a346.94,346.94,0,0,0-4.9,60c0,20,1.4,40,.5,60s-3.8,40-4.3,60,1.5,40,2.3,60,.5,40,.4,50L69,540H0V0Z"
      />
      <path
        className="cls-8"
        d="M41,0l3,10c3,10,9,30,12.7,50s5,40,2.3,60-9.3,40-10.8,60,2.1,40,2.6,60-2.1,40-2.8,60,.7,40,1.2,60,.1,40-1,60-3.2,40-1.9,60,6,40,8.4,50L57,540H0V0Z"
      />
      <path
        className="cls-9"
        d="M31,0l-.3,10c-.4,10-1,30-.2,50s3.2,40,1.3,60S24,160,21.5,180s-1.5,40-1.3,60-.5,40-.5,60,.6,40,2.3,60,4.3,40,4.5,60-2.2,40-3,60-.2,40,.2,50l.3,10H0V0Z"
      />
    </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  .cls-5 {
    fill: ${(props) => props.theme.colors.authPattern4};
    opacity: 0.30;
    filter: blur(30px);
  }
  .cls-6 {
    fill: ${(props) => props.theme.colors.authPattern3};
    opacity: 0.80;
  }
  .cls-7 {
    fill: ${(props) => props.theme.colors.authPattern2};
    opacity: 0.90;
  }
  .cls-8 {
    fill: ${(props) => props.theme.colors.authPattern1};
    opacity: 0.95;
  }
  .cls-9 {
    fill: ${(props) => props.theme.colors.bgColor};
  }
`;

export default AuthSVGPattern;
