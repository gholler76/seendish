import React, {useState} from 'react';
import {TextField, Select, Button, Typography, Paper, MenuItem} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createBubble} from '../../../actions/bubble';
import useStyles from '../Bubble/styles';

const Form = () => {
  const [bubbleData, setBubbleData] = useState({title: '', popdate: '', type: '', picUrl: ''});
  const classes = useStyles();
  const dispatch = useDispatch();

  const clear = () => {
    setBubbleData({title: '', popdate: '', type: '', picUrl: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createBubble(bubbleData));
    console.log(bubbleData);

    clear();
  };
  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Create a Bubble</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={bubbleData.title} onChange={(e) => setBubbleData({...bubbleData, title: e.target.value})} />
        <TextField name="popdate" variant="outlined" label="Pop Date" fullWidth type="date" value={bubbleData.popdate} onChange={(e) => setBubbleData({...bubbleData, popdate: e.target.value})} />
        <Select name="type" variant="outlined" label="Type" fullWidth value={bubbleData.type} onChange={(e) => setBubbleData({...bubbleData, type: e.target.value})}>
          <MenuItem value="Movie">Movie</MenuItem>
          <MenuItem value="Show">Show</MenuItem>
        </Select>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setBubbleData({...bubbleData, picUrl: base64})} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
