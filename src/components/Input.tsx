import styled from "styled-components"

type InputProps = {
    label: string,
    type: string,
}

const Input = ({label, type}: InputProps) => {
    return (
        <StyleInput>
            <label htmlFor="inp" className="inp">
                <input type={type} id="inp" placeholder="&nbsp;" />
                <span className="label">{label}</span>
                <span className="focus-bg"></span>
            </label>
        </StyleInput>
    )
}

const StyleInput = styled.div`
  position: relative;
  margin: 1rem;
  width: 100%;
  min-width: 280px;
  height: 2.5rem;
  
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
            font-size: 16px;
            color: rgba(0, 0, 0, 0.5);
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
            background: rgba(0, 0, 0, 0.05);
            z-index: -1;
            border-radius: 8px 8px 0 0;
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
        border-radius: 8px 8px 0 0;
        font-family: inherit;
        padding: 16px 12px 2.5px 12px;
        height: 2.5rem;
        font-size: 16px;
        font-weight: 400;
        background: rgba(0, 0, 0, 0.02);
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
        color: #000;
        transition: all 0.15s ease;
    }
    .inp input:hover {
        background: rgba(0, 0, 0, 0.04);
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
    }
    .inp input:not(:-moz-placeholder-shown) + .label {
        color: rgba(0, 0, 0, 0.5);
        transform: translate3d(0, -15px, 0) scale(0.75);
    }
    .inp input:not(:-ms-input-placeholder) + .label {
        color: rgba(0, 0, 0, 0.5);
        transform: translate3d(0, -15px, 0) scale(0.75);
    }
    .inp input:not(:placeholder-shown) + .label {
        color: rgba(0, 0, 0, 0.5);
        transform: translate3d(0, -15px, 0) scale(0.75);
    }
    .inp input:focus {
        background: rgba(0, 0, 0, 0.05);
        outline: none;
        box-shadow: inset 0 -2px 0 #0077FF;
    }
    .inp input:focus + .label {
        color: #0077FF;
        transform: translate3d(0, -15px, 0) scale(0.75);
    }
    .inp input:focus + .label + .focus-bg {
        transform: scaleX(1);
        transition: all 0.1s ease;
    }
`

export default Input