import React from 'react';
import {Grid, Container, Paper, Button, ButtonGroup, Card, CardHeader, CardMedia, CardContent, CardActionArea, CardActions} from '@material-ui/core';
import useStyle from './styles';

import Bubble from './Bubble/Bubble';

const Home = () => {
  const classes = useStyle();

  return (
    <Container>
      <ButtonGroup className={classes.typeBox} variant="contained" size="large" fullWidth  >
        <Button>Movies</Button>
        <Button>Shows</Button>
        <Button>My Bubbles</Button>
      </ButtonGroup>
      <ButtonGroup className={classes.sortBox} variant="contained" size="large" fullWidth>
        <Button>Most Popular</Button>
        <Button>Most Recent</Button>
        <Button>About to Pop</Button>
      </ButtonGroup>
      <Paper elevation='2'>
        <Grid container>
          <Bubble />
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
