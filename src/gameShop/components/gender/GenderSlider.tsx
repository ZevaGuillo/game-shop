import { GenderType } from "@/types/genderType";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

type GenderSliderProps = {
  gender: GenderType[] | undefined;
};

const GenderSlider = ({ gender }: GenderSliderProps) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!carousel.current) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, []);

  return (
    <StyledGenderSlider>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {gender?.map((gen) => (
            <StyledItem
              className="item"
              key={gen.name}
              backgroundimg={gen.backgroundUrl}
            >
              {gen.name}
            </StyledItem>
          ))}
        </motion.div>
      </motion.div>
    </StyledGenderSlider>
  );
};

const StyledGenderSlider = styled.div`
  padding: 3rem 0;

  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  .inner-carousel {
    display: flex;
    gap: 1.5rem;

  }
`;

const StyledItem = styled(motion.div)<{ backgroundimg: string }>`
  min-height: 20rem;
  min-width: 15rem;
  padding: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5) ), url(${(props) => props.backgroundimg}); 
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  background-size: cover;
`;

export default GenderSlider;
