import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import CatalogPage from "../pages/CatalogPage";
import GamePage from "../pages/GamePage";
import GameShopPage from "../pages/GameShopPage";
import { GenderType } from "@/types/genderType";
import { FeaturedType } from "@/types/featuredType";
import useGender from '../../hooks/useGender';
import AuthModal from "../components/Header/AuthModal";
const GameShopRoutes = () => {
  
  const { gender, featured } = useGender();

  return (
    <StyledGameShop>
      <Header />
      <main className="router-main">
        <Routes>
          <Route
            path="/"
            element={
              <GameShopPage
              gender={gender as GenderType[]}
              featured={featured as FeaturedType[]}
              />
            }
            />
          <Route path="/catalog/:gender" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/game" element={<Navigate to="/catalog" />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <AuthModal/>
    </StyledGameShop>
  );
};

const StyledGameShop = styled.main`
  min-height: 100vh;

`;

export default GameShopRoutes;
