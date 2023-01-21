import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import UserDropdown from "./UserDropdown";
import { useAppSelector } from "@/hooks/redux";


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
        <Avatar
          sx={{ width: 37, height: 37, bgcolor: '#7D52D9'}}
          alt={displayName || ""}
          src={photoURL || ""}
        />
      </IconButton>

      {isOpen && <UserDropdown setIsOpen={() => setIsOpen(!isOpen)} />}
    </StyledUserMenu>
  );
};

const StyledUserMenu = styled.div`
  position: relative;
`;

export default Usermenu;
