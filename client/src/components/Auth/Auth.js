import React, {useState} from 'react';
import useStyles from './styles';
import {Grid, Container, Typography, Button} from '@material-ui/core';
import lw300 from '../../images/lw300.png';
import {useDispatch} from 'react-redux';
import {login, register} from '../../actions/auth';
import {useHistory} from 'react-router-dom';

import Input from './Input';

const initialState = {firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: ''};

const Register = () => {
  const classes = useStyles();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      dispatch(register(form, history));
    } else {
      dispatch(login(form, history));
    }
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setForm(initialState);
    setIsRegister((prevIsRegister) => !prevIsRegister);
  };

  return (
    <Container fluid maxWidth="xs" spacing={3}>
      <Grid container className={classes.logoContainer}>
        <img src={lw300} alt="seendish logo + wordmark" className={classes.image} />
      </Grid>
      <Grid container className={classes.formContainer}>
        <Typography component="h1" variant="h5">{isRegister ? 'Register' : 'Log In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            {isRegister && (
              <React.Fragment>
                <Input name="username" label="Username" handleChange={handleChange} autoFocus />
                <Input name="firstName" label="First Name" handleChange={handleChange} />
              </React.Fragment>
            )}
            <Input name="email" label="Email" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type="password" />
            {isRegister && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.submit}>
            {isRegister ? 'Register' : 'Log In'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isRegister ? 'Already have an account? Log in' : "Don't have an account? Register!"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container >
  );
};

export default Register;
