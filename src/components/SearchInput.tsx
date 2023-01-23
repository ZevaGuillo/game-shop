import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input
        type="text"
        className="input"
        placeholder="Search Game Here"
        autoComplete="off"
      />
      
      <button className="button--submit">
        <span>Search</span>
        <FiSearch className="icon icon-button" />
      </button>
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.form`
  display: flex;
  background-color: transparent;

  .input {
    flex: 1;
    min-height: 37px;
    width: 40vw;
    padding: 0 1rem;
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    border: none;
    background-color: ${(props) => props.theme.colors.bgColorOpacity};
  }

  .button--submit {
    z-index: 11;
    min-height: 37px;
    max-height: 37px;
    padding: 0.5em 1em;
    border: none;
    background-color: ${(props) => props.theme.colors.inputColor};
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.25s ease;
    
    .icon.icon-button{
        margin-left: .2rem;;
        font-size: 1rem;
        transform: translateY(16%);
        color: #fff;
    }

    span{
      color: #fff;
    }

  }

  .button--submit:hover {
    background-color: ${(props) => props.theme.colors.btnHover};
  }

  .input:focus,
  .input:focus-visible {
    border-color: #3898ec;
    outline: none;
  }


  @media (min-width: 900px) {
    .input{
      border-radius: 6px 0 0 6px;
    }
    .button--submit {
      border-radius: 0 6px 6px 0;
    }
  }

`;

export default SearchInput;
