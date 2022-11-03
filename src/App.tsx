import { useQuery} from '@tanstack/react-query'
import {getGames} from './lib/queries/game';

function App() {

  const {data: games} = useQuery({queryKey: ['games'], queryFn: getGames})
  if(!games) return <></>

  return (
    <div className="App">

      {games[0].name}
    </div>
  )
}

export default App
