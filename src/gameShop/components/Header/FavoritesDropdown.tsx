import DropdownLayout from "../DropdownLayout";
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { MdDelete } from "react-icons/md";

import styled from "styled-components";
import Image from "@/components/Image";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { startRemoveFavorite } from "@/store/gameShop/thunks";
import { GameType } from "@/types/gameType";
type FavoritesDropdownProps = {
  setIsOpen: () => void;
};

const FavoritesDropdown = ({ setIsOpen }: FavoritesDropdownProps) => {
  const { favorites } = useAppSelector(state => state.gameShop);
  const dispatch = useAppDispatch();

  const removeFavoriteGame = (game: GameType) => {
    dispatch(startRemoveFavorite(game));
  }

  return (
    <DropdownLayout setIsOpen={setIsOpen}>
      <StyledFavorites>
        <div className="game-list">
          {favorites.map(game => (
            <div
              className="game"
              key={game.id}>
              <Link to={`/game/${game.slug!}`}>
                <div className="content">
                  <Image
                    url={game.coverUrl}
                    className="image"
                  />
                  <div className="details">
                    <h4>{game.name}</h4>
                  </div>
                </div>
              </Link>
              <IconButton
                aria-label="delete"
                size="medium"
                onClick={()=>removeFavoriteGame(game)}>
                <MdDelete className="delete" />
              </IconButton>
            </div>
          ))}
        </div>
      </StyledFavorites>
    </DropdownLayout>
  );
};

const StyledFavorites = styled.div`
  .game-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .game {
      display: flex;
      align-items: center;
      gap: 1rem;
      .content {
        display: flex;
        gap: 1rem;
        align-items: center;
        border-radius: 8px;
        .image {
          width: 5rem;
          height: 7rem;
          border-radius: 8px;
          object-fit: cover;
        }
        .details {
          flex: 1;
        }
        &:hover {
          background-color: ${props => props.theme.colors.bgColorOpacity2};
        }
      }
      .delete {
        font-size: 1.7rem;
        fill: ${props => props.theme.colors.text};
      }
    }
  }
`;

export default FavoritesDropdown;
