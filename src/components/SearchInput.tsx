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

const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  

  .input {
    min-height: 37px;
    padding: 0 1rem;
    color: ${(props) => props.theme.colors.text};
    font-size: 15px;
    border: none;
    border-radius: 6px 0 0 6px;
    background-color: ${(props) => props.theme.colors.variant};
  }

  .button--submit {
    min-height: 37px;
    max-height: 37px;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
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
`;

export default SearchInput;
