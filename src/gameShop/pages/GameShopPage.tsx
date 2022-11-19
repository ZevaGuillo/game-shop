import { getFeatured } from "@/lib/queries/featured";
import styled from "styled-components";
import { useQuery, useQueries } from "@tanstack/react-query";
import Slidershow from "../components/Slidershow";
import { FeaturedType } from "@/types/featuredType";
import { getGender } from "@/lib/queries/gender";
import GenderSection from '../components/gender/GenderSection';

const GameShopPage = () => {
  const [featured, gender] = useQueries({
    queries: [
      {
        queryKey: ["featured"],
        queryFn: getFeatured,
      },
      {
        queryKey: ["gender"],
        queryFn: getGender,
      },
    ],
  });

  if (featured.isLoading || gender.isLoading) return <h1>LOADING</h1>;

  if (featured.error || gender.error) return <h2>Error</h2>;

  console.log(gender.data);

  return (
    <StyledGameShop className="container">
      <section className="slide-section">
        <Slidershow featured={featured.data as FeaturedType[]} />
      </section>
      <GenderSection gender={gender.data}/>
    </StyledGameShop>
  );
};

const StyledGameShop = styled.main.attrs((props) => ({
  className: props.className,
}))`

`;

export default GameShopPage;
