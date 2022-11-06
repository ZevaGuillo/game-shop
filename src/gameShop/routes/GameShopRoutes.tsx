import { Routes, Route, Navigate } from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage';
import GamePage from '../pages/GamePage';
import GameShopPage from '../pages/GameShopPage';


const GameShopRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<GameShopPage/>}/>
        <Route path='/catalog/:gender' element={<CatalogPage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/game/:id' element={<GamePage/>}/>
        <Route path='/game' element={<Navigate to='/catalog'/>}/>

        <Route path="/*" element={<Navigate to="/"/>}/>

    </Routes>
  )
}

export default GameShopRoutes