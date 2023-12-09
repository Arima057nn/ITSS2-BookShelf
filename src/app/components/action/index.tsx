"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Action = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="p-1 bg-white rounded-full border-2 border-gray-200 flex items-center hover:border-gray-400">
      <Box sx={{ flexGrow: 0 }}>
        <Box>
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{
              p: 0,
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            <Avatar alt="Remy Sharp" src="assets/images/avatar.png" />
            <p className="text-base mx-4 text-gray-700">Kenson</p>
            <ArrowDropDownIcon />
          </IconButton>
        </Box>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
};

export default Action;
