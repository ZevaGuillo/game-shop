import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from 'react';
import { getGames } from "@/lib/queries/game";
import { GameType } from "@/types/gameType";
import styled from "styled-components";
import CardGame from "../components/CardGame";

const GameList = () => {
  const [games, setGames] = useState<GameType[]>()
  const [loading, setLoading] = useState(false)
  const location = useLocation();

  let { g: filter = "" } = queryString.parse(location.search);
  filter = (filter as string).split(",");
  console.log(filter);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getGames();
      setGames(data);
      setLoading(false);
    })();
  }, []);

  return (
    <StyledGameList>
      {games?.map((game) => (
        <CardGame key={game.name} game={game}/>
      ))}
    </StyledGameList>
  );
};

const StyledGameList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem,1fr));
  place-content: center;
  gap: 2rem;
`

export default GameList;
