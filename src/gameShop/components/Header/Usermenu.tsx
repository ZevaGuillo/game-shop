import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ToggleSwitch from "@/components/ToggleSwitch";

const Usermenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: VAlidad incio de sesion
  return (
    <StyledUserMenu>
      <IconButton sx={{ p: 0 }} onClick={() => setIsOpen(!isOpen)}>
        <Avatar
            sx={{width:37, height:37}}
          alt="username"
          src="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg"
        />
      </IconButton>

      
    </StyledUserMenu>
  );
};

const StyledUserMenu = styled.div`
    
        .option{
            display: flex;
        }
    
`;

export default Usermenu;
