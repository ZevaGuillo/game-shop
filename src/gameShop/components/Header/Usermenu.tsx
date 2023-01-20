import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import UserDropdown from "./UserDropdown";
import { useAppSelector } from "@/hooks/redux";
import { deepPurple } from "@mui/material/colors";

function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Usermenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { photoURL, displayName } = useAppSelector(state => state.auth);

  // TODO: VAlidad incio de sesion
  return (
    <StyledUserMenu>
      <IconButton
        sx={{ p: 0 }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        {!!photoURL ? (
          <Avatar
            sx={{ width: 37, height: 37 }}
            alt="username"
            src={photoURL}
          />
        ) : (
          <Avatar
            sx={{ width: 37, height: 37, bgcolor: deepPurple[500] }}
            alt="username"
            {...stringAvatar(displayName || "")}
          />
        )}
      </IconButton>

      {isOpen && <UserDropdown setIsOpen={() => setIsOpen(!isOpen)} />}
    </StyledUserMenu>
  );
};

const StyledUserMenu = styled.div`
  position: relative;
`;

export default Usermenu;
