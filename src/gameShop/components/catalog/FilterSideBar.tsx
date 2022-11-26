import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import RangeSlider from "@/components/RangeSlider";
import useFilter from "@/gameShop/hooks/useFilter";

const FilterSideBar = () => {
  const { genders } = useAppSelector((state) => state.gameShop);

  const { price, setPrice, filterGenders, filterOnChange, onClickFilter } = useFilter();

  return (
    <StyledFilterSideBar>
      <h2>FILTERS</h2>
      {genders.map((gender) => (
        <div key={gender}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={filterOnChange}
                checked={!!filterGenders?.includes(gender)}
                inputProps={{
                  "aria-labelledby": gender,
                }}
                size="small"
                name={gender}
              />
            }
            label={gender}
          />
        </div>
      ))}
      <h3>Price</h3>
      <RangeSlider value={price} setValue={setPrice} />
      <Button onClick={onClickFilter}>Add filter</Button>
    </StyledFilterSideBar>
  );
};

const StyledFilterSideBar = styled.div``;

export default FilterSideBar;
