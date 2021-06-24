import React, {useState, useEffect} from 'react';
import {Grid, Container, Button, ButtonGroup, CircularProgress, } from '@material-ui/core';
import useStyle from './styles';
import {useSelector} from 'react-redux';

import Bubble from './Bubble/Bubble';

const Home = () => {
  const {bubbles, isLoading} = useSelector((state) => state.bubbles);
  const classes = useStyle();
  const [type, setType] = useState('Movie');

  useEffect(() => {
    console.log(bubbles);

  }, []);

  if (!bubbles.length && !isLoading) return 'No bubbles here!';

  const movie = () => {
    setType('Movie');
    console.log(type);
  };
  const show = () => {
    setType('Show');
    console.log(type);
  };
  const my = () => {
  };

  return (
    <Container>
      <ButtonGroup size="large" fullWidth variant="contained">
        <Button onClick={movie}>Movies</Button>
        <Button onClick={show}>Shows</Button>s
        <Button onClick={my}> My Bubbles</Button>
      </ButtonGroup>
      <ButtonGroup className={classes.sortBox} variant="contained" size="large" fullWidth>
        <Button>Most Popular</Button>
        <Button>Most Recent</Button>
        <Button>About to Pop</Button>
      </ButtonGroup>
      isLoading ? <CircularProgress /> : (
      <Grid container>
        {bubbles.filter(bubble => bubble.type = type).map((bubble) => (
          <Grid key={bubble._id} item>
            <Bubble bubble={bubble} />
          </Grid>
        ))}
      </Grid>
      )
    </Container>
  );
};

export default Home;
