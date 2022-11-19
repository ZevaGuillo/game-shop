import { GenderType } from "@/types/genderType";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GenderSlider from "./GenderSlider";

type GenderSectionProps = {
  gender: GenderType[] | undefined;
};

const GenderSection = ({ gender }: GenderSectionProps) => {
  console.log(gender);
  
  return (
    <>
      <StyledGenderSection className="gender-section">
        <section className="section-desktop">
          {gender?.slice(0, 6).map((gen) => (
            <Link to={`/catalog/${gen.slug}`} key={gen.name}>
              <StyledItem
                className="item"
                backgroundimg={gen.backgroundUrl}
              >
                {gen.name}
              </StyledItem>
            </Link>
          ))}
        </section>

        <section className="section-mobile">
          <GenderSlider gender={gender} />
        </section>
      </StyledGenderSection>
    </>
  );
};

const StyledGenderSection = styled.article`
  .section-desktop {
    display: none;
    padding: 2rem 60px;
    gap: 2rem;
    grid-auto-rows: 12rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
  }
  .section-mobile {
  }

  @media (min-width: 900px) {
    .section-desktop {
      display: grid;
    }
    .section-mobile {
      display: none;
    }
  }
`;

const StyledItem = styled.div<{ backgroundimg: string }>`
  position: relative;
  min-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.backgroundimg});
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

export default GenderSection;
