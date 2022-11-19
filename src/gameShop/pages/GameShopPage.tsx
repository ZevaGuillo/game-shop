import styled from "styled-components";
import Slidershow from "../components/Slidershow";
import { FeaturedType } from "@/types/featuredType";
import GenderSection from "../components/gender/GenderSection";
import { GenderType } from "@/types/genderType";

type GameShopPage = {
  gender: GenderType[],
  featured: FeaturedType[]
}

const GameShopPage = ({gender, featured}:GameShopPage) => {

  if (!featured || !gender) return <h1>LOADING</h1>;

  return (
    <StyledGameShop className="container">
      <section className="slide-section">
        <Slidershow featured={featured as FeaturedType[]} />
      </section>
      <GenderSection gender={gender as GenderType[]} />
    </StyledGameShop>
  );
};

const StyledGameShop = styled.main.attrs((props) => ({
  className: props.className,
}))``;

export default GameShopPage;
