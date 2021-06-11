import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  topBar: {
    backgroundColor: theme.palette.primary.light,
    padding: '.5rem 1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  userName: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
  }


}));
