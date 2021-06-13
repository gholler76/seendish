import React, {useEffect, useState} from 'react';
import {AppBar, Typography, Grid, Toolbar, Avatar, Box, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import logoNav from '../../images/logo_w_48.png';
import {Link, useHistory, useLocation} from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';

const TopNav = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({type: actionType.LOGOUT});
    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.topBar} position="static">
      <IconButton edge="start" className={classes.menuIcon}>
        <MenuIcon />
      </IconButton>
      <img src={logoNav} />
      <Typography className={classes.userName} >Username</Typography>
      <Button size="small" className={classes.logout} onClick={logout} variant="contained">Logout</Button>
    </AppBar>

  );
};

export default TopNav;
