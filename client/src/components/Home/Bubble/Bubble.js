import React from 'react';
import {Card, CardContent, CardMedia} from '@material-ui/core/';
import {Grid, Typography} from '@material-ui/core/';
import useStyles from './styles';

const Bubble = (bubble) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Card className={classes.bubbleBox} >
          <CardMedia
            className={classes.media}
            image={bubble.picUrl}
            title={bubble.title}
          />
          <Typography variant="subtitle2">{bubble.popdate}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Bubble;


