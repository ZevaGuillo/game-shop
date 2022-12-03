import Image from "@/components/Image"
import { GameType } from "@/types/gameType"
import styled from "styled-components"

type CardProps = {
    game: GameType
}

const CardGame = ({game}:CardProps) => {
  return (
    <StyledCard className="glass">
        <div className="image">
            <img className="blur" src={game.backgroundUrl}/>
            <Image url={game.backgroundUrl} className="cover"/>
        </div>
        <section className="content">
            <p>{game.name}</p>
        </section>
    </StyledCard>
  )
}

const StyledCard = styled.div`

    width: 13rem;
    height: 20rem;
    padding: 1rem;
    border-radius: 8px;
    overflow: hidden;
    .image{
        position: relative;
        width: 100%;
        height: 13rem;
        .blur{
            position: absolute;
            width: 110%;
            height: 95%;
            border-radius: 10%;
            top: 0;
            left: 50%;
            transform: translate(-50%);
            filter: blur(20px);
            z-index: -1;
        }
        .cover{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
    }

    .content{
        display: flex;
        justify-content: center;
        
    }

`

export default CardGame