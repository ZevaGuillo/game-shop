import Image from "@/components/Image";
import { GameType } from "@/types/gameType";
import styled from "styled-components";

type CardProps = {
  game: GameType;
  className?: string
};

const CardGame = ({ game, className='' }: CardProps) => {
  console.log(game);
  
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
        <Image url={game.coverUrl} className="cover" alt={game.name} />
      </div>
      <section className="content">
        <p className="title-game">{game.name}</p>
      </section>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  .image {
    position: relative;
    width: 100%;
    height: 13rem;

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
    padding: 1rem;
    width: 100%;
    display: grid;
    place-content: center;
  }
  .title-game{
    display: inline-block;
    width: 100%;
  }
`;

export default CardGame;
