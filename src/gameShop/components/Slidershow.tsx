import styled from "styled-components";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useSlider } from "../hooks/useSlider";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Image from "@/components/Image";
import { startSanityFeatured } from "@/store/slices/gameShop/thunks";

const Slidershow = () => {
  const dispatch = useAppDispatch();
  const {featured} = useAppSelector((state) => state.gameShop)

  const { index, direction, prevStep, nextStep } = useSlider(featured);


  useEffect(() => {
    dispatch(startSanityFeatured())
  }, [])

  if(featured.length === 0) return<></>;


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

const images = [
  "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658184145200-3358c3338585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1658186309018-1e3b880acd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
  "https://images.unsplash.com/photo-1658901097742-98954bfd9b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
  "https://images.unsplash.com/photo-1658901097917-f3e4f3cb5f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  "https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  "https://images.unsplash.com/photo-1658901097893-cfe9605ca208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  "https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];
