import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import CatalogPage from "../pages/CatalogPage";
import GamePage from "../pages/GamePage";
import GameShopPage from "../pages/GameShopPage";

const GameShopRoutes = () => {
  return (
    <StyledGameShop>
      <Header/>
      <Routes>
        <Route path="/" element={<GameShopPage />} />
        <Route path="/catalog/:gender" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/game" element={<Navigate to="/catalog" />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </StyledGameShop>

  );
};

const StyledGameShop = styled.main`
  min-height: 100vh;
`

export default GameShopRoutes;
