import { getFeatured } from "@/lib/queries/featured";
import styled from "styled-components";
import { useQuery, useQueries } from "@tanstack/react-query";
import Slidershow from "../components/Slidershow";
import { FeaturedType } from "@/types/featuredType";
import { getGender } from "@/lib/queries/gender";

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

  if (featured.isLoading || gender.isLoading) return <></>;

  if (featured.error || gender.error) return <h2>Error</h2>;

  console.log(gender.data);

  return (
    <StyledGameShop className="container">
      <section className="slide-section">
        <Slidershow featured={featured.data as FeaturedType[]} />
      </section>
      <section className="gender-section">
        {gender.data?.map((gen) => (
          <div
            key={gen.name}
            style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5) ), url(${gen.backgroundUrl})` }}
          >
            {/* <img src={gen.backgroundUrl} className="background-blur"/> */}
            {gen.name}
          </div>
        ))}
      </section>
    </StyledGameShop>
  );
};

const StyledGameShop = styled.main.attrs((props) => ({
  className: props.className,
}))`
  .gender-section {
    padding: 2rem 60px;
    display: grid;
    gap: 2rem;
    grid-auto-rows: 12rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));

    div {
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.white};
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    }
  }
`;

export default GameShopPage;
