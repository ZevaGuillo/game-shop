import React from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const GameList = () => {

    const location = useLocation();

    let { g:filter = "" } = queryString.parse(location.search);
    filter = (filter as string).split(',')
    console.log(filter);
    


  return (
    <div>GameList
        {filter.map(g => (
            <p key={g}>{g}</p>
        ))}
    </div>
  )
}

export default GameList