import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
      backgroundColor: 'palette.primary.main',
      padding: 0
    },
  },

}));
