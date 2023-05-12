import styled from "styled-components";
import Slidershow from "../components/Slidershow";
import { FeaturedType } from "@/types/featuredType";
import GenderSection from "../components/gender/GenderSection";
import { GenderType } from "@/types/genderType";
import { Skeleton } from "@mui/material";

type GameShopPage = {
  gender: GenderType[];
  featured: FeaturedType[];
};

const GameShopPage = ({ gender, featured }: GameShopPage) => {
  if (!featured || !gender)
    return (
      <div className="container-skeleton-slider">
        <Skeleton
          className="skeleton-slider"
          variant="rounded"
          height={400}
        />
      </div>
    );

  return (
    <StyledGameShop className="container padding-nav">
      <section className="slide-section">
        <Slidershow featured={featured as FeaturedType[]} />
      </section>
      <GenderSection gender={gender as GenderType[]} />
    </StyledGameShop>
  );
};

const StyledGameShop = styled.main.attrs(props => ({
  className: props.className,
}))``;

export default GameShopPage;
