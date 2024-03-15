import React from "react";
import Button from "@mui/material/Button";
import { LogoutOptions } from "@auth0/auth0-react";

interface LogoutButtonProps {
  onLogout: (options?: LogoutOptions) => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout({ returnTo: window.location.origin } as LogoutOptions);
  };

  return (
    <Button className="auth" variant="contained" color="primary" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;



