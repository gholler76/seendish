import React from 'react';
import clsx from 'clsx';
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core/';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import {IconButton, Typography, Grid} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';


import wv from '../../../images/WV.png';


const Bubble = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Card className={classes.root} className={classes.bubbleBox} >
          <CardMedia
            className={classes.media}
            image={wv}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Bubble;


