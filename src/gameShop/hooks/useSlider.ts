import { FeaturedType } from '@/types/featuredType';
import { useState } from 'react'

export const useSlider = (images:FeaturedType[]) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
  
    const prevStep = () => {
      setDirection(1);
      if (index === 0) {
        setIndex(images.length - 1);
        return;
      }
      setIndex(index - 1);
    };
  
    const nextStep = () => {
      setDirection(-1);
      if (index === images.length - 1) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
    };

    return {
        index,
        direction,
        prevStep,
        nextStep
    }
}
