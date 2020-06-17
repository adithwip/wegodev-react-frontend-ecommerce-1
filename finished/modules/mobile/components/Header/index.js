import React, { useState } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideBar from '@mobile/components/SideBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <ToolBar>
          <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <SideBar open={open} onClose={toggleDrawer} />
          <Link href="/">
            <Typography variant="h6">
              Ecommerce Frontend
              </Typography>
          </Link>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default Header;