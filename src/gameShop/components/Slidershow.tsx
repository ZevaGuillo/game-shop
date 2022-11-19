import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useSlider } from "../hooks/useSlider";
import { FeaturedType } from "@/types/featuredType";

type SliderShowProps = {
  featured: FeaturedType[]
}

const Slidershow = ({featured}: SliderShowProps) => {

  const { index, direction, prevStep, nextStep } = useSlider(featured);

  return (
    <StyledSlider>
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={featured[index].imageUrl}
            alt="slides"
            className="slides"
            key={featured[index].imageUrl}
            custom={direction}
          />
          {/* <img src={discounts[index].games[0].imageUrl} className="card" /> */}
        </AnimatePresence>
        <button className="prevButton" onClick={prevStep}>
          {"<"}
        </button>
        <button className="nextButton" onClick={nextStep}>
          {">"}
        </button>
      </div>
    </StyledSlider>
  );
};

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    };
  },
};

const StyledSlider = styled.div`
  display: flex;
  padding-top: 2rem;

  .slideshow {
    width: 100%;
    aspect-ratio: calc(16 / 9);
    position: relative;
  }

  button {
    padding: 16px;
    font-size: 18px;
    width: 50px;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #0f0c29;
    border: none;
    cursor: pointer;
    text-align: center;
    color: white;
    transition: all .25s ease-out;
  }

  button:hover {
    background-color: #24243e;
  }

  .prevButton {
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translateY(-50%);
  }

  .nextButton {
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translateY(-50%);
  }

  .slides {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
  }

  .card {
    position: absolute;
    width: 25%;
    top: -4rem;
    z-index: 11;
    height: 25%;
  }

  @media (min-width: 900px) {
    padding: 2rem 60px;

    .slideshow {
      aspect-ratio: calc(21 / 9);
    }

    .prevButton {
      left: -60px;
    }

    .nextButton {
      right: -60px;
    }
  }
`;

export default Slidershow;