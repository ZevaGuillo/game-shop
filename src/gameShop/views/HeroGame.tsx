import { GameType } from "@/types/gameType";
import styled from "styled-components";
import CardGame from "../components/CardGame";
import { Chip } from "@mui/material";

type HeroGameProps = {
  game: GameType;
};

const HeroGame = ({ game }: HeroGameProps) => {
  return (
    <StyledHero
      background={game?.backgroundUrl}
      className="container bg-blur">
      <section className="content">
        <div className="info">
          <h1>{game?.name}</h1>
          <p>{game?.description}</p>
          <ul className="genders">
            {game?.genders?.map((gen, index) => (
              <li key={gen.name + index}>
                <Chip label={gen.name} />
              </li>
            ))}
          </ul>

          <div className="game">
            {game && (
              <CardGame
                game={game!}
                className="card-cover"
              />
            )}
          </div>
        </div>
      </section>
    </StyledHero>
  );
};

type StyledType = {
  background?: string;
};

const StyledHero = styled.article<StyledType>`
  min-height: 100vh;
  padding-top: 5rem;
  z-index: 100;

  &::after {
    z-index: -2;
    width: 100%;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    position: fixed;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::before {
    z-index: -1;
    width: 100vw;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    position: fixed;

    background: linear-gradient(
      to left,
      transparent,
      ${props => props.theme.colors.bgColorOpacity}
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .content {
    width: 60%;
    h1 {
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      .genders {
        display: flex;
        gap: 0.5rem;
      }
      .game {
        display: flex;
        justify-content: flex-start;
        .card-cover {
          margin: 0;
          box-shadow: none;
          max-width: 12rem;
          max-height: 18rem;
        }
      }
    }
  }
`;

export default HeroGame;
