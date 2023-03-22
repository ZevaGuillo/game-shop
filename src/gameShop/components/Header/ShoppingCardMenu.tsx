import { useAppSelector } from "@/hooks/redux";
import { Badge } from "@mui/material";
import { useState } from 'react';
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import ShoppingCartDropdown from "./ShoppingCardDropdown";

const ShoppingCartMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {shoppingCart} = useAppSelector(state => state.gameShop)

  return (
    <StyledShoppingCartMenu>
      <Badge
        badgeContent={shoppingCart.length}
        onClick={() => setIsOpen(!isOpen)}
        color="success">
        <FiShoppingCart className="icon" />
      </Badge>

      {isOpen && <ShoppingCartDropdown setIsOpen={() => setIsOpen(!isOpen)} />}
    </StyledShoppingCartMenu>
  );
};

const StyledShoppingCartMenu = styled.div`
  position: relative;
`;
export default ShoppingCartMenu;
