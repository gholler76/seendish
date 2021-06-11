import React from 'react';
import {TextField, Grid} from '@material-ui/core';

const Input = ({name, label, autoFocus, type, handleChange}) => {
  return (
    <Grid item >
      <TextField
        name={name}
        label={label}
        autoFocus={autoFocus}
        type={type}
        variant="filled"
        fullWidth
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Input;
