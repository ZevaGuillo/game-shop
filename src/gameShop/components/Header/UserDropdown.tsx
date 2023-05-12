import Button from "@/components/Button";
import ToggleSwitch from "@/components/ToggleSwitch";
import { useAppDispatch } from "@/hooks/redux";
import { startLogout } from "@/store/auth/thunks";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import Avatar from "@mui/material/Avatar";
import DropdownLayout from "../DropdownLayout";

type UserDropdownProps = {
  setIsOpen: () => void;
  className?: string
};

const UserDropdown = ({ setIsOpen, className }: UserDropdownProps) => {
  const { displayName, photoURL } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    
    <DropdownLayout setIsOpen={setIsOpen} className="bottomnav">
        <div className="option">
          <div className="name">
            <Avatar
              sx={{ width: 37, height: 37, bgcolor: "#7D52D9" }}
              alt={displayName || ""}
              src={photoURL || ""}
            />
            <h2>{displayName}</h2>
          </div>
          <div className="darkmode">
            <h3>Dark Mode</h3>
            <ToggleSwitch />
          </div>
        </div>
        <Button
          className="btn-logout"
          onClick={() => onLogout()}>
          <span>Logout</span>
        </Button>
    </DropdownLayout>
  );
};

const StyledDropdown = styled.div`
  .dropdown{

  }

`

export default UserDropdown;
