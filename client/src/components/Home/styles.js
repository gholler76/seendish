import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  typeBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '.5rem',
    backgroundColor: theme.palette.seenGreen.main,
  },

  sortBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '1rem',
    backgroundColor: theme.palette.seenBlue.main,
  },
}));
