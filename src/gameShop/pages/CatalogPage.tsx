import { useAppSelector } from "@/hooks/redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import FilterSideBar from "../components/catalog/FilterSideBar";
import GameList from "../views/GameList";
import FilterNavBar from '../components/catalog/FilterNavBar';

const CatalogPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { genders } = useAppSelector((state) => state.gameShop);
  let catalog = params.gender ? params.gender : "All";

  useEffect(() => {});

  return (
    <StyledCatalogPage>
      <aside className="categories-sidebar">
        <FilterSideBar/>
      </aside>
      <section className="main-section">
        <nav className="navbar">
          <FilterNavBar/>
        </nav>
        <section className="games-list">
          <GameList/>
          
        </section>
      </section>
    </StyledCatalogPage>
  );
};

const StyledCatalogPage = styled.main`
  padding: 2rem 7%;
  display: flex;
  gap: 2rem;

  .categories-sidebar {
    width: 20%;
    min-height: 300px;
  }

  .main-section {
    flex: 1;
    .navbar {
      width: 100%;
      height: 3rem;
    }

    .games-list {
      width: 100%;
      min-height: 100%;
    }
  }
`;

export default CatalogPage;
