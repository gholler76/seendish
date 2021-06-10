import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
      backgroundColor: 'palette.primary.main'
    },
  },
  logoContainer: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    margin: 'auto',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));
