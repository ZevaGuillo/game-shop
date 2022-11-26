import { useAppSelector } from "@/hooks/redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import FilterSideBar from "../components/catalog/FilterSideBar";
import GameList from "../views/GameList";

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
        <nav className="platforms"></nav>
        <section className="games-list">
          <Button variant="contained">Hello World</Button>
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
    width: 25%;
    min-height: 300px;
  }

  .main-section {
    flex: 1;
    .platforms {
      width: 100%;
      height: 4rem;
      background-color: antiquewhite;
    }

    .games-list {
      width: 100%;
      height: 300px;
      background-color: bisque;
    }
  }
`;

export default CatalogPage;
