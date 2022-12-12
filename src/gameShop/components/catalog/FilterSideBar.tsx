import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Checkbox, FormControlLabel, Button, Collapse } from "@mui/material";
import RangeSlider from "@/components/RangeSlider";
import useFilter from "@/gameShop/hooks/useFilter";
import { useState } from 'react';
import  { CheckboxProps } from '@mui/material/Checkbox';
import { styled as muiStyled } from '@mui/material/styles';


const FilterSideBar = () => {
  const { genders, platforms } = useAppSelector((state) => state.gameShop);
  const [openGenders, setOpenGenders] = useState(true);
  const [openPlatforms, setOpenPlatforms] = useState(true);

  const handleGendersClick = () => {
    setOpenGenders(!openGenders);
  };
  const handlePlatformsClick = () => {
    setOpenPlatforms(!openPlatforms);
  };

  const {
    price,
    setPrice,
    filterGenders,
    gendersChange,
    filterPlatforms,
    platformsChange,
    onClickFilter,
  } = useFilter();

  return (
    <StyledFilterSideBar>
      <h2>FILTERS</h2>
      <h3>Price</h3>
      <RangeSlider value={price} setValue={setPrice} />

      <div className="list-header" onClick={handleGendersClick}>
        <h3>Genders</h3>
        {openGenders ? (
          <MdExpandLess className="icon" />
        ) : (
          <MdExpandMore className="icon" />
        )}
      </div>
      <Collapse in={openGenders} timeout="auto" unmountOnExit>
        {genders.map((gender) => (
          <div key={gender}>
            <FormControlLabel
              control={
                <StyledCheckbox
                  onChange={gendersChange}
                  checked={!!filterGenders?.includes(gender)}
                  inputProps={{
                    "aria-labelledby": gender,
                  }}
                  size="small"
                  name={gender}
                  color={"default"}
                />
              }
              label={gender}
            />
          </div>
        ))}
      </Collapse>

      <div className="list-header" onClick={handlePlatformsClick}>
        <h3>Platforms</h3>
        {openPlatforms ? (
          <MdExpandLess className="icon" />
        ) : (
          <MdExpandMore className="icon" />
        )}
      </div>
      <Collapse in={openPlatforms} timeout="auto" unmountOnExit>
        {platforms.map((platform) => (
          <div key={platform.name}>
            <FormControlLabel
              control={
                <StyledCheckbox
                  onChange={platformsChange}
                  checked={!!filterPlatforms?.includes(platform.name)}
                  inputProps={{
                    "aria-labelledby": platform.name,
                  }}
                  size="small"
                  name={platform.name}
                />
              }
              label={platform.name}
            />
          </div>
        ))}
      </Collapse>
      <Button onClick={onClickFilter}>Add filter</Button>
    </StyledFilterSideBar>
  );
};

const StyledFilterSideBar = styled.div`
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
`;


const StyledCheckbox = muiStyled(Checkbox)<CheckboxProps>(({ theme }) => ({
  color: '#7a7979',
 
    '&.Mui-checked': {
      color: '#5550F2'
    },
}));

export default FilterSideBar;
