import React from 'react';
import {TextField, Button, Grid, Typography} from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.formBox}>
      <form>
        <Typography variant="h6" align="center" color="secondary">Login</Typography>

      </form >
    </Grid >
  );
};

export default Form;
