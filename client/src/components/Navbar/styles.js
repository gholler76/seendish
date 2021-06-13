import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  topBar: {
    backgroundColor: theme.palette.seenRed.light,
    padding: '.5rem 1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '.5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
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
    color: theme.palette.seenWhite.main,
    fontWeight: 'bold'
  },
  logout: {
    backgroundColor: theme.palette.seenGold.main,
  },
  menuIcon: {
    color: theme.palette.seenGold.main,
  },
}));
