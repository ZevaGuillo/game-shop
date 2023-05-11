import { useAppSelector } from "@/hooks/redux";
import { darkTheme, theme } from "@/theme/Theme";
import {
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  Skeleton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import UserDropdown from "./UserDropdown";
import styled from "styled-components";
import FavoritesDropdown from "./FavoritesDropdown";
import ShoppingCartDropdown from "./ShoppingCardDropdown";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { favorites, shoppingCart } = useAppSelector(state => state.gameShop);
  const { photoURL, displayName } = useAppSelector(state => state.auth);
  const gameShop = useAppSelector(state => state.gameShop);

  // This is used only for the example
  const container: (() => HTMLElement) | undefined =
    typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          position: "fixed",
          left: "0",
          bottom: "0",
          display: { xs: "block", md: "none" },
        }}>
        <BottomNavigation
          sx={{
            background: gameShop.darkMode
              ? darkTheme.colors.bgColor
              : theme.colors.bgColor,
            borderTop: "1px solid",
            paddingTop: "2px",
            borderColor: gameShop.darkMode
              ? darkTheme.colors.authPattern2
              : theme.colors.authPattern2,
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            setOpen(true);
          }}>
          <BottomNavigationAction
            label={displayName}
            icon={
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{ width: 25, height: 25, bgcolor: "#7D52D9" }}
                  alt={displayName || ""}
                  src={photoURL || ""}
                  imgProps={{ referrerPolicy: "no-referrer" }}
                />
              </IconButton>
            }
          />
          <BottomNavigationAction
            label="Favorites"
            icon={
              <Badge
                badgeContent={favorites.length}
                color="secondary">
                <FiHeart className="icon favorite" />
              </Badge>
            }
          />
          <BottomNavigationAction
            label="Shopping Cart"
            icon={
              <Badge
                badgeContent={shoppingCart.length}
                color="success">
                <FiShoppingCart className="icon" />
              </Badge>
            }
          />
        </BottomNavigation>
      </Box>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={0}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}>
        <StyledDropdown>
          {value === 0 ? (
            <UserDropdown
              setIsOpen={() => {}}
              className="bottomnav"
            />
          ) : value === 1 ? (
            <FavoritesDropdown
              setIsOpen={() => {}}
              className="bottomnav"
            />
          ) : (
            <ShoppingCartDropdown
              setIsOpen={() => {}}
              className="bottomnav"
            />
          )}
        </StyledDropdown>
      </SwipeableDrawer>
    </>
  );
};

const StyledDropdown = styled.div`
  width: 100vw;
  padding-bottom: 5rem;
  height: auto;
  background-color: ${props => props.theme.colors.menubg};
  .bottomnav {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(0%);
    background-color: transparent;
    box-shadow: none;
  }
`;

export default BottomNav;
