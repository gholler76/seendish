import {makeStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '1rem',
    width: 'auto'
  },
  bubbleBox: {
    backgroundColor: theme.palette.seenWhite.main,
  }

}));
