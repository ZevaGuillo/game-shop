import { Slider } from "@mui/material";
import React from "react";

type RangeProps = {
    value: number[],
    setValue:React.Dispatch<React.SetStateAction<number[]>>
} 

const RangeSlider = ({value, setValue}:RangeProps) => {

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
        <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={2}
        max={300}
        size="small"
        />
  );
};

export default RangeSlider;
