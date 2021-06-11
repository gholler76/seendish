import React from 'react';
import {Grid, Container, Paper, Button, ButtonGroup, Card, CardHeader, CardMedia, CardContent, CardActionArea, CardActions} from '@material-ui/core';
import useStyle from './styles';

const Home = () => {
  const classes = useStyle();

  return (
    <Container>
      <ButtonGroup className={classes.typeBox} variant="contained" color="secondary" size="large" fullWidth  >
        <Button>Movies</Button>
        <Button>Shows</Button>
        <Button>My Bubbles</Button>
      </ButtonGroup>
      <ButtonGroup className={classes.sortBox} variant="contained" color="secondary" size="large" fullWidth>
        <Button>Most Popular</Button>
        <Button>Most Recent</Button>
        <Button>About to Pop</Button>
      </ButtonGroup>
      <Paper elevation='2'>
        <Grid container>
          <Card ></Card>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
