import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { getGames } from "@/lib/queries/game";
import { GameType } from "@/types/gameType";
import styled from "styled-components";
import CardGame from "../components/CardGame";
import { CircularProgress } from "@mui/material";

const GameList = () => {
  const [games, setGames] = useState<GameType[]>();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  let { g: filter = "" } = queryString.parse(location.search);
  filter = (filter as string).split(",");

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await getGames();
        setGames(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading) return <div className="container-loading"><CircularProgress /></div>;

  return (
    <StyledGameList>
      {games?.map(game => (
        <Link
          key={game.name}
          to={`/game/${game.slug}`}>
          <CardGame game={game} />
        </Link>
      ))}
    </StyledGameList>
  );
};

const StyledGameList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 14rem;
  place-content: center;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    grid-auto-rows: 17rem;
  }
`;

export default GameList;
