import Image from "@/components/Image";
import { GameType } from "@/types/gameType";
import styled from "styled-components";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useAppDispatch } from '../../hooks/redux';
import { startAddFavorite } from "@/store/gameShop/thunks";


type CardProps = {
  game: GameType;
  className?: string;
};

const CardGame = ({ game, className = "" }: CardProps) => {
  
  const dispatch = useAppDispatch();

  const onAddFavorite= (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    e.preventDefault();
    dispatch(startAddFavorite(game));
  }

  return (
    <StyledCard className={`glass ${className}`}>
      <div className="image">
        <img
          className="blur"
          src={game.coverUrl}
          alt={game.name}
          width={100}
          height={200}
        />
        <Image
          url={game.coverUrl}
          className="cover"
          alt={game.name}
        />
      </div>
      <section className="content">
        <p className="title-game">{game.name}</p>
      </section>
      <div className="price">${game.price}</div>
      <div className="favorite" onClick={onAddFavorite}><MdFavorite/></div>
      
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction:column;

  .image {
    position: relative;
    width: 100%;
    height: 75%;

    .blur {
      position: absolute;
      width: 100%;
      height: 110%;
      border-radius: 10%;
      top: 0;
      left: 50%;
      transform: translate(-50%);
      filter: blur(20px);
      z-index: -1;
    }
    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }

  .content {
    flex: 1;
    padding: 0.2rem 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .title-game {
    font-size: 1em;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    position: absolute;
    top: 0;
    padding: 0.2rem;
    min-width: 15%;
    aspect-ratio: 1/1;
    background-color: #1e1e1ecc;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-radius: 0 0 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.white};
  }

  .favorite{
    position: absolute;
    top: .2rem;
    right: .2rem;
    font-size: 1.5rem;
  }

  @media (min-width: 900px) {
    .content {
      padding: 1rem;
    }
  }
`;

export default CardGame;
