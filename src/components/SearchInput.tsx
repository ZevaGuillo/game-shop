import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input
        type="text"
        className="input"
        placeholder="Search Product Here"
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
    color: #404040;
    font-size: 15px;
    border: 1px solid #5e4dcd;
    border-radius: 6px 0 0 6px;
    background-color: #fff;
  }

  .button--submit {
    min-height: 37px;
    max-height: 37px;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #5e4dcd;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    
    .icon-button{
        margin-left: .2rem;;
        font-size: 1rem;
        transform: translateY(16%);
    }

  }

  .button--submit:hover {
    background-color: #5e5dcd;
  }

  .input:focus,
  .input:focus-visible {
    border-color: #3898ec;
    outline: none;
  }
`;

export default SearchInput;
