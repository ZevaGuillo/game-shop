import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import FavoritesDropdown from "./FavoritesDropdown";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { useAppSelector } from "@/hooks/redux";

const FavoriteMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites } = useAppSelector(state => state.gameShop);

  return (
    <StyledFavoriteMenu>
      <Badge
        badgeContent={favorites.length}
        onClick={() => setIsOpen(!isOpen)}
        color="secondary">
        <FiHeart className="icon favorite" />
      </Badge>

      {isOpen && <FavoritesDropdown setIsOpen={() => setIsOpen(!isOpen)} />}
    </StyledFavoriteMenu>
  );
};

const StyledFavoriteMenu = styled.div`
  position: relative;
`;

export default FavoriteMenu;
