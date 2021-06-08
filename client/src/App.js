import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import useStyles from './styles';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
	const user = JSON.parse(localStorage.getItem('profile'));
	const classes = useStyles();

	return (
		<BrowserRouter>
			<Container className={classes.mainContainer} maxWidth="md">
				<Switch>
					<Route path="/" exact component={() => <Redirect to="/home" />} />
					<Route path="/home" exact component={Home} />
					<Route path="/auth" exact component={Auth} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
