import { AppBar, Avatar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { ExitToApp as LogOutIcon, Menu as MenuIcon, Person } from "@material-ui/icons";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WAA, { API_URL } from "../../api/api";
import logo from "../../assets/img/logo.png";
// context
import { toggleSidebar, useLayoutDispatch } from "../../context/LayoutContext";
import { useUserDispatch } from "../../context/UserContext";
import { AppUtils } from "../../utils/appUtils";
import { LOGOUT_SUCCESS } from "../../utils/constants";
import styles from "./style";
import AddAlertMessage from "../alert/Alert";
import { SOMETHING_WENT_WRONG, USER_ID } from "../../utils/constants/index";
import { LocalStorage } from "../../utils/storage/localStorage";
import Button from '@mui/material/Button';

const linkStyle = {'color': '#0d6efd', 'textDecoration': 'underline'}

export default function Header(props) {
  const [userFullName, setUserFullName] = useState([]);
  const classes = styles();

  // global
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [profileMenu, setProfileMenu] = useState(null);

  //sulai: added app bar link
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const logout = () => {
    WAA.get(API_URL.logout)
      .then(response => {
        let data = response.data;
        if (data.type === "success") {
          AppUtils.removeUserRef();
          userDispatch({ type: LOGOUT_SUCCESS });
        }
      })
      .catch(error => {
      });
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {/* ------ sulai: Menu List When Collapse Responsive - Start ----*/}
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <Avatar src={logo} alt="Mini Online Market" onClick={handleOpenNavMenu} />

          <Menu id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography><a href="/admin/dashboard/sellers">Seller</a></Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography ><a href="/admin/dashboard/reviews">Review</a></Typography>
            </MenuItem>
            <MenuItem>
              <Link style={linkStyle} href="profile" variant="body1" className={classes.profileMenuLink}>
                <Person className={classes.profileMenuIcon} />
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={linkStyle} onClick={logout} variant="body1" className={classes.profileMenuLink}>
                <LogOutIcon className={classes.profileMenuIcon} />
                Logout
              </Link>
            </MenuItem>


            {/* Right Side  Menu Items */}
          </Menu>
        </Box>
        {/* ------ sulai: Menu List When Collapse Responsive - End ----*/}

        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Avatar src={logo} alt="Mini Online Market" />
        </Box>
        <Typography variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          &nbsp;&nbsp;Mini Online Market: Role : {AppUtils.getUserRole()} :: &nbsp;&nbsp;
        </Typography>

        {/* ------ sulai: Wide Menu - Start ----*/}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {/* Left Side Menu Items */}
          <Button onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <a className={classes.aStyleWide} href="/admin/dashboard/sellers">Sellers</a>
          </Button>
          <Button onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <a className={classes.aStyleWide} href="/admin/dashboard/reviews">Reviews</a>
          </Button>

        </Box>
        {/* ------ sulai: Wide Menu - End ----*/}
        <Box display="flex" className={classes.userProfileMenu} justifyContent="center" alignItems="center" onClick={e => setProfileMenu(e.currentTarget)}>
          <Typography variant="body1" className={classes.username}>
            {userFullName}
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Avatar alt="Avatar" src={logo} />
          </Box>
        </Box>

        <Menu anchorEl={profileMenu} open={Boolean(profileMenu)} onClose={() => setProfileMenu(null)} classes={{ paper: classes.profileMenu }} disableAutoFocusItem>
          <MenuItem className={classes.profileMenuItem}>
            <Link onClick={logout} variant="body1" className={classes.profileMenuLink}>
              <LogOutIcon className={classes.profileMenuIcon} />
              Logout
            </Link>
            <Link href="profile" variant="body1" className={classes.profileMenuLink}>
              <Person className={classes.profileMenuIcon} />
              Profile
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
