import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameType } from "@/types/gameType";
import { getGamesBySlug } from "@/lib/queries/game";
import HeroGame from "../views/HeroGame";
import { CircularProgress } from "@mui/material";

const GamePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState<GameType>();
  const [loading, setLoading] = useState(false);

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
        navigate("/catalog");
      }
    })();
  }, [params]);

  if (loading) return <div className="container-loading"><CircularProgress /></div>;

  return (
    <div>
      {game && (
        <>
          <HeroGame game={game} />
          
        </>
      )}
    </div>
  );
};

export default GamePage;
