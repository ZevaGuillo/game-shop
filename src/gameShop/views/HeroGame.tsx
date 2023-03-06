import { GameType } from "@/types/gameType";
import styled from "styled-components";
import CardGame from "../components/CardGame";
import { Chip, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { startAddGame } from "../../store/gameShop/thunks";
import { handleModal } from '@/store/auth/authSlice';

type HeroGameProps = {
  game: GameType;
};

const HeroGame = ({ game }: HeroGameProps) => {
  // Auth Modal

  const [platform, setPlatform] = useState(game.platforms[0].name || "");
  const { shoppingCart } = useAppSelector(state => state.gameShop);
  const { status } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };

  const onAddGameShoppingCart = () => {
    if (status !== "authenticated") {
      dispatch(handleModal('login'))
      return;
    }
    // @ts-expect-error
    const aux = shoppingCart.some(g => g._id === game._id);
    if (!aux) {
      dispatch(startAddGame(game));
    } else {
      console.log("Ya esta agg");
      //TODO: open dropdown for to shopping cart
    }
  };

  return (
    <StyledHero background={game?.backgroundUrl}>
      <section className="container content-game">
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
                  label={platform}
                  onChange={handleChange}>
                  {game.platforms.map(platform => (
                    <MenuItem
                      key={platform.name}
                      value={platform.name}>
                      {platform.name}
                    </MenuItem>
                  ))}
                </Select>
              </section>

              <Button
                type="button"
                className="buy-botton"
                onClick={onAddGameShoppingCart}>
                <span>Buy</span>
              </Button>
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
  height: fit-content;
  display: flex;
  align-items: flex-start;
  z-index: 100;

  &::after {
    z-index: -2;
    width: 100%;
    min-height: 100%;
    content: "";
    top: 0;
    left: 0;
    position: fixed;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content-game {
    padding-top: 4rem;
    padding-bottom: 2rem;
    width: 100%;
    background-color: ${props => props.theme.colors.bgColorOpacity};
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    h1 {
      font-size: 2em;
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
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
          width: 12rem;
          height: 16rem;
          .price,
          .favorite {
            display: none;
          }
        }
        .game-options {
          padding-left: 1rem;
          .buy-botton {
            margin: 0.5rem 0;
          }
        }
      }
    }
  }

  @media (min-width: 900px) {
    min-height: 100vh;
    align-items: center;

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
      padding-top: 2rem;
      padding-bottom: 0;
      display: flex;
      background-color: blue;
      height: max-content;
      align-items: center;
      width: 50%;
      background-color: transparent;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;

      h1 {
        font-size: 3.75em;
      }
      .info {
        gap: 1rem;
        .game .game-options {
          position: absolute;
          z-index: 0;
          min-height: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: -10rem;
          clip-path: polygon(0 0, 69% 0%, 65% 100%, 0% 100%);
          background: linear-gradient(
            109.6deg,
            ${props => props.theme.colors.bgColorOpacity} 11.2%,
            ${props => props.theme.colors.bgColorOpacity2} 78.9%
          );
          backdrop-filter: blur(40px);
          width: calc(100% + 20rem);
          padding-left: calc(+10rem + 14rem);
        }
      }
    }
  }
`;

export default HeroGame;
