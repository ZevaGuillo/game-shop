import { useAppSelector } from "@/hooks/redux";
import {
    Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
} from "@mui/material";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";

const BottomNav = () => {
  const { favorites, shoppingCart } = useAppSelector(state => state.gameShop);

  const { photoURL, displayName } = useAppSelector(state => state.auth);

  return (
    <Box
      sx={{
        width: "100vw",
        position: "fixed",
        left: "0",
        bottom: "0",
        display: { xs: "block", md: "none" },
      }}>
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        {/* <BottomNavigationAction
          label="Account"
          icon={<FiUser />}
        /> */}
        <BottomNavigationAction
          label={displayName}
          icon={
            <IconButton
              sx={{ p: 0 }}
              // onClick={() => {
              //   setIsOpen(!isOpen);
              // }}
            >
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
              // onClick={() => setIsOpen(!isOpen)}
              color="secondary">
              <FiHeart className="icon favorite" />
            </Badge>
          }
        />
        <BottomNavigationAction
          label="Shopping Cart"
          icon={<Badge
            badgeContent={shoppingCart.length}
            // onClick={() => setIsOpen(!isOpen)}
            color="success">
            <FiShoppingCart className="icon" />
          </Badge>}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
