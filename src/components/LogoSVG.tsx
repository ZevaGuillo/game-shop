import styled from "styled-components";

type LogoSVGProps = {
  color?: string;
  stroke?: string;
  className?:string
};

const LogoSVG = (logoConfig: LogoSVGProps) => {
  return (

      <StyledSVG
        {...logoConfig}
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="18.31 238.48 1403.37 794.98"
      >
        <g>
          {" "}
          <path className="st0" d="M1094.74,242.27c-17.49-2.51-35.42-3.79-53.62-3.79H398.93c-3.51,0-7.02,0.05-10.48,0.14   C183.07,244.16,18.31,412.38,18.31,619.09c0,210.17,170.4,380.57,380.62,380.57c57.46,0,111.99-12.75,160.82-35.56   c36.51-17.02,69.84-39.68,98.9-66.85c0.19-0.19,0.33-0.33,0.52-0.47c0.95-1,1.94-1.9,2.94-2.8c15.36-13.75,35.65-22.14,57.89-22.14   s42.53,8.39,57.89,22.14c0.95,0.95,1.94,1.9,2.94,2.8c0.19,0.14,0.33,0.28,0.52,0.47c28.54,26.65,61.16,48.98,96.81,65.85   c49.4,23.47,104.64,36.55,162.95,36.55c210.17,0,380.57-170.4,380.57-380.57C1421.69,427.08,1279.55,268.3,1094.74,242.27z    M1041.83,919.91c-81.78,0-155.84-33.14-209.65-86.9c-0.24-0.24-0.52-0.47-0.76-0.76c-24.13-23.71-55.9-39.83-91.27-44.47   c-6.92-0.95-14.03-1.42-21.24-1.42c-6.5,0-12.94,0.38-19.2,1.14c-34.61,4.12-65.85,19.2-90.03,41.67   c-0.09,0.09-0.24,0.19-0.33,0.33c-1.66,1.66-3.37,3.37-5.12,4.98c-0.09,0.05-0.19,0.14-0.28,0.24   c-53.39,50.78-125.55,81.93-205.01,81.93c-164.33,0-297.55-133.23-297.55-297.55c0-164.33,133.23-297.55,297.55-297.55h642.9   c164.33,0,297.55,133.94,297.55,299.16C1339.38,785.93,1206.15,919.91,1041.83,919.91z"></path>{" "}
          
          <g className="st0">
            {" "}
            <circle cx="924.14" cy="622.81" r="60.14"></circle>{" "}
            <circle cx="1050.26" cy="489.99" r="60.14"></circle>{" "}
            <circle cx="1176.38" cy="621.83" r="60.14"></circle>{" "}
            <circle cx="1050.26" cy="748.14" r="60.14"></circle>{" "}
          </g>{" "}
          <g>
            {" "}
            <path
              className="st2"
              d="M519.57,573.79c10.34,0,18.74,8.35,18.74,18.65v51.21c0,10.3-8.4,18.7-18.74,18.7h-99.8v99.53    c0,10.3-8.4,18.7-18.7,18.7h-51.39c-10.3,0-18.7-8.4-18.7-18.7v-99.53h-99.8c-10.34,0-18.74-8.4-18.74-18.7v-51.21    c0-10.3,8.4-18.65,18.74-18.65h99.8v-99.57c0-10.3,8.4-18.65,18.7-18.65h51.39c10.3,0,18.7,8.35,18.7,18.65v99.57"
            ></path>{" "}
          </g>
        </g>
      </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  .st0 {
    fill: ${(props) =>
      props.color ? props.stroke : props.theme.colors.negative};
  }
  .st1 {
    fill: ${(props) =>
      props.color ? props.stroke : props.theme.colors.negative};
  }
  .st2 {
    fill: ${(props) =>
      props.color ? props.color : props.theme.colors.primary};
  }
`;

export default LogoSVG;
