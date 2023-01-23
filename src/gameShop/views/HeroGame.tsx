import { GameType } from "@/types/gameType";
import styled from "styled-components";
import CardGame from "../components/CardGame";
import { Chip, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type HeroGameProps = {
  game: GameType;
};

const HeroGame = ({ game }: HeroGameProps) => {
  const [platform, setPlatform] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };

  return (
    <StyledHero
      background={game?.backgroundUrl}
      className="container bg-blur">
      <section className="content-game">
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
            <section className="game-options">
              <section className="price">
                <h3>${game.price}</h3>
              </section>
              <section className="platforms">
                {/* <h1>{game.platforms[0].name}</h1> */}
                <Select
                  sx={{
                    color: "white",
                    "mix-blend-mode": "difference",
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",

                      "mix-blend-mode": "difference",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",

                      "mix-blend-mode": "difference",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(228, 219, 233, 0.25)",

                      "mix-blend-mode": "difference",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "white !important",

                      "mix-blend-mode": "difference",
                    },
                  }}
                  value={platform}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}>
                  {/* TODO: validar plataforma */}
                  {/* <MenuItem value="">
                    <em>Platform</em>
                  </MenuItem> */}
                  {game.platforms.map(platform => (
                    <MenuItem
                      key={platform.name}
                      value={platform.name}>
                      {platform.name}
                    </MenuItem>
                  ))}
                </Select>
              </section>
            </section>
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
  display: flex;
  align-items: center;
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
    height: 100vh;
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    clip-path: polygon(0 0, 60% 0%, 45% 100%, 0% 100%);
    background-color: ${props => props.theme.colors.bgColorOpacity};
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }

  .content-game {
    width: 50%;
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
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .card-cover {
          margin: 0;
          z-index: 1;
          box-shadow: none;
          max-width: 12rem;
          max-height: 18rem;
        }
        .game-options {
          position: absolute;
          z-index: 0;
          width: calc(100% + 20rem);
          min-height: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: -10rem;
          padding-left: calc(+10rem + 14rem);
          clip-path: polygon(0 0, 69% 0%, 65% 100%, 0% 100%);
          /* background-color: ${props =>
            props.theme.colors.bgColorOpacity2}; */
          background: linear-gradient(
            109.6deg,
            ${props => props.theme.colors.bgColorOpacity} 11.2%,
            ${props => props.theme.colors.bgColorOpacity2} 78.9%
          );
          backdrop-filter: blur(40px);
        }
      }
    }
  }
`;

export default HeroGame;
