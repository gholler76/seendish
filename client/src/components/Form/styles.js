import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    formBox: {
      width: 230,
      minHeight: 50,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 20,
    }
  }
}));