import styled from "styled-components";
import {  useAppDispatch } from '../hooks/redux';
import { setDarkMode } from "@/store/slices/gameShop/gameShopSlice";

const ToggleSwitch = () => {

  const dispatch = useAppDispatch()

  return (
    <StyledToggleSwitch >
      <input type="checkbox" onChange={()=> dispatch(setDarkMode())}/>
      <span className="slider"></span>
    </StyledToggleSwitch>
  );
};

const StyledToggleSwitch = styled.label`
  font-size: 14px;
  position: relative;
  display: inline-block;
  width: 2.9em;
  height: 1.7em;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.variant2};
    transition: 0.4s;
    border-radius: 30px;
    border: none;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.1em;
    width: 1.1em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.varian2};
  }


  input:checked + .slider:before {
    transform: translateX(1.1em);
  }
`;

export default ToggleSwitch;
