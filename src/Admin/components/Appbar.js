import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    aStyleWide: {       
      color: '#ffffff',
      textDecoration: 'none',
      '&:hover': { color: '#ffffff', textDecoration: 'none'}
    },
    aStyleNarrow: {       
        color: '#212121',
        textDecoration: 'none',
        '&:hover': { color: '#212121', textDecoration: 'none'}
      }
  }))

const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const classes = useStyles()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{'backgroundColor' : '#40BEA7'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* ----- Responsive Menu - small start ----- */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Argiro Mini Market :: Admin
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Menu List When collapse - Start */}
            <Menu style={useStyles.aStyle}
              id="menu-appbar"
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
              }}
            >
                {/* Left Side Menu Items */}
                  <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a className={classes.aStyleNarrow} href="/sellers">Seller</a></Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a className={classes.aStyleNarrow} href="/reviews">Reviews</a></Typography>
                </MenuItem>
                {/* Right Side  Menu Items */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a className={classes.aStyleNarrow} href="#">Welcome, Admin</a></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a className={classes.aStyleNarrow} href="#">Log Out</a></Typography>
                </MenuItem>
              
            </Menu>
            {/* Menu List When collapse - End */}
          </Box>
          {/* ---- Wide Menu Start ------ */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Argiro Mini Market :: Admin
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* Left Side Menu Items */}
            
              <Button onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a className={classes.aStyleWide} href="/sellers">Sellers</a>
              </Button>
              <Button onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a className={classes.aStyleWide} href="/reviews">Reviews</a>
              </Button>
            
          </Box>
                {/* Right Side Menu Items */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <a className={classes.aStyleWide} href="#">Welcome, Admin</a>                    
                </Button>             
                
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <a className={classes.aStyleWide} href="#">Log Out</a>                    
                </Button>
            </Box>           
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
