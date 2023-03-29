import Image from "@/components/Image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { startRemoveGame } from "@/store/gameShop/thunks";
import { GameType } from "@/types/gameType";
import { IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropdownLayout from "../DropdownLayout";
import { useState, useEffect } from 'react';
import Button from "@/components/Button";

type ShoppingCartDropdownProps = {
    setIsOpen: () => void;
  };
  
  const ShoppingCartDropdown = ({ setIsOpen }: ShoppingCartDropdownProps) => {

    const { shoppingCart } = useAppSelector(state => state.gameShop);
    const dispatch = useAppDispatch();
    const [total, setTotal] = useState(0);
    

    const removeGame = (game: GameType) => {
      dispatch(startRemoveGame(game));
    }

    useEffect(() => {
      const gamesPrice = shoppingCart.map(game => game.price)
                                      .reduce((pre, current)=> pre! + current!, total )
      setTotal(gamesPrice || 0)
    }, [shoppingCart]);
    

    return (
      <DropdownLayout setIsOpen={setIsOpen}>
       <StyledFavorites>
        <div className="game-list">
          {shoppingCart.map(game => (
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
                    <p>${game.price}</p>
                  </div>
                </div>
              </Link>
              <IconButton
                aria-label="delete"
                size="medium"
                onClick={()=>removeGame(game)}>
                <MdDelete className="delete" />
              </IconButton>
            </div>
          ))}
          <div className="payment">
              <h4>Total:</h4>
              <p>${total}</p>
              <Button><span>Pay</span></Button>
          </div>
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
    .payment{
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      p{
        text-align: end;
      }
      button{
        grid-column: 2;
      }
    }
  }
`;

export default ShoppingCartDropdown;
