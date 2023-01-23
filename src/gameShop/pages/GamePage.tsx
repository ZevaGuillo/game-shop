import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { GameType } from "@/types/gameType";
import { getGamesBySlug } from "@/lib/queries/game";

const GamePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState<GameType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await getGamesBySlug(params.id);
        setGame(data);
        setLoading(false);
        console.log(data);
        
      } catch (error) {
        console.log(error);
        navigate('/catalog')
      }
    })();
    
  }, []);

  if(loading) return <h1>Loading...</h1>

  return (
    <div>{game?.name}</div>
  )
}

export default GamePage