import styled from "styled-components";

type InputProps = {
  label: string;
  type: string;
  name?: string;
  value?: string;
  onChange?:  ({ target }: any) => void;
};

const Input = ({ label, type, name, value, onChange }: InputProps) => {
  return (
    <StyleInput>
      <label
        htmlFor="inp"
        className="inp">
        <input
          type={type}
          id={`inp-${label}`}
          placeholder="&nbsp;"
          name={name}
          value={value}
          onChange={onChange}
        />
        <span className="label">{label}</span>
        <span className="focus-bg"></span>
      </label>
    </StyleInput>
  );
};

const StyleInput = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;

  .inp {
    margin: auto;
    overflow: hidden;

    .label {
      position: absolute;
      top: 50%;
      left: 12px;
      transform-origin: 0 0;
      transform: translate3d(0, 0, 0);
      transform: translateY(-50%);
      font-size: 18px;
      color: ${props => props.theme.colors.variant2};
      font-weight: 500;
      transition: all 0.2s ease;
      pointer-events: none;
    }
    .focus-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors.variant};
      z-index: -1;
      border-radius: 8px;
      transform: scaleX(0);
      transform-origin: left;
    }
  }

  .inp input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    border-radius: 8px;
    font-family: inherit;
    padding: 16px 12px 2.5px 12px;
    height: 3rem;
    font-size: 16px;
    font-weight: 400;
    background: ${props => props.theme.colors.variant};
    box-shadow: inset 0 -1px 0 ${props => props.theme.colors.variant};
    color: ${props => props.theme.colors.negative};
    transition: all 0.15s ease;
  }
  .inp input:hover {
    background: ${props => props.theme.colors.variant};
    box-shadow: inset 0 -1px 0 ${props => props.theme.colors.variant};
  }
  .inp input:not(:-moz-placeholder-shown) + .label {
    color: ${props => props.theme.colors.negative};
    transform: translate3d(0, -20px, 0) scale(0.75);
  }
  .inp input:not(:-ms-input-placeholder) + .label {
    color: ${props => props.theme.colors.negative};
    transform: translate3d(0, -20px, 0) scale(0.75);
  }
  .inp input:not(:placeholder-shown) + .label {
    color: ${props => props.theme.colors.variant3};
    transform: translate3d(0, -20px, 0) scale(0.75);
  }
  .inp input:focus {
    background: ${props => props.theme.colors.variant1};
    outline: none;
<<<<<<< HEAD
=======
    box-shadow: inset 0 -2px 0 ${props => props.theme.colors.primary};
>>>>>>> 89205ab (Added states to form from login)
  }
  .inp input:focus + .label {
    color: ${props => props.theme.colors.primary};
    transform: translate3d(0, -20px, 0) scale(0.75);
  }
  .inp input:focus + .label + .focus-bg {
    transform: scaleX(1);
    transition: all 0.1s ease;
  }
`;

export default Input;
