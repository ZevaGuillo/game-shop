import { Checkbox, Chip, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import styled from "styled-components";
import { useState } from "react";

const FilterNavBar = () => {
  const [view, setView] = React.useState("grid");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setView(newAlignment);
  };

  return (
    <StyledFilterNavBar>

      <ToggleButtonGroup
        size="small"
        value={view}
        onChange={handleChange}
        exclusive={true}
        aria-label="Small sizes"
      >
        <ToggleButton value="list" key="list" name="list" aria-label="list">
          <BsListUl className="icon" />
        </ToggleButton>
        ,
        <ToggleButton value="grid" key="grid">
          <BsFillGrid3X3GapFill className="icon" name="grid" aria-label="grid"/>
        </ToggleButton>
        ,
      </ToggleButtonGroup>
    </StyledFilterNavBar>
  );
};

const StyledFilterNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export default FilterNavBar;
