import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    typeBox: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: '.5rem',
    },

    sortBox: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: '1rem',
    },
  },
}));