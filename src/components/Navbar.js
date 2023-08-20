import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static"
        sx={{
          backgroundColor: 'rgb(17, 24, 39)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            PokeApp
          </Typography>
          {!isMobile && (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/pokemones">
                Pokemones
              </Button>
              <Button color="inherit" component={Link} to="/contacto">
                Contacto
              </Button>
            </>
          )}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgb(17, 24, 39)',
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
            Home
          </ListItem>
          <ListItem button component={Link} to="/pokemones" onClick={handleDrawerClose}>
            Pokemones
          </ListItem>
          <ListItem button component={Link} to="/contacto" onClick={handleDrawerClose}>
            Contacto
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
