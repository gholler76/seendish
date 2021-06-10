import React from 'react';
import {TextField, Grid} from '@material-ui/core';
import useStyles from "./styles";

const Input = ({name, label, autoFocus, type, handleChange}) => {
  const classes = useStyles();

  return (
    <Grid item >
      <TextField
        name={name}
        label={label}
        autoFocus={autoFocus}
        type={type}
        variant="filled"
        className={classes.input}
        required
        fullWidth
        onChange={handleChange}
      />

    </Grid>

  );
};

export default Input;
