import SearchInput from "@/components/SearchInput";
import Drawer from "@mui/material/Drawer";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledSearch>
      <div className="search-desktop-form">
        <SearchInput />
      </div>

      <Drawer
        anchor="top"
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        className="drawer"
        >
        <div className="search-form animate__backInDown" style={{paddingTop:'3rem'}}>
          <SearchInput />
        </div>
      </Drawer>

      <FiSearch
        className="icon header"
        onClick={() => setIsOpen(!isOpen)}
      />
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  display: flex;
  width: 100%;
  .search-desktop-form {
    display: none;
  }
  .search-form {
    background-color: blue;
    width: 100%;
    z-index: 11;
  }

  @media (min-width: 900px) {
    .search-desktop-form {
      display: block;
      width: 100%;
    }
    .search-form {
      display: none;
    }
    .icon.header {
      display: none ;
    }
  }
`;


export default Search;
