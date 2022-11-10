import SearchInput from "@/components/SearchInput";
import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useState } from 'react';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <StyledSearch>
      <form className="search-desktop-form">
        <SearchInput />
      </form>

      {
        isOpen &&
        <form className="search-form animate__backInDown">
          <SearchInput />
        </form>
      }

      <FiSearch className="icon header" onClick={()=>setIsOpen(!isOpen)}/>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  display: flex;
  .search-desktop-form{
    display: none;
  }

  .search-form {
    position: absolute;
    top: 3rem;
    right: 0;
  }

  @media (min-width: 900px) {
    .search-desktop-form{
      display: block;
    }
    .search-form{
      display: none;
    }
    .icon.header{
      display: none;
    }
  }
`;

export default Search;
