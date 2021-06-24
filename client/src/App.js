import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import useStyles from './styles';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import TopNav from './components/Navbar/TopNav';
import BubbleForm from './components/Form/Bubble/BubbleForm';

const Page404 = ({location}) => (
	<div>
		<h2>No match found for <code>{location.pathname}</code></h2>
	</div>
);

const App = () => {
	const user = JSON.parse(localStorage.getItem('profile'));
	const classes = useStyles();

	return (
		<BrowserRouter>
			<Container className={classes.mainContainer} component="main" maxWidth="md">
				{user ? <TopNav /> : null}
				<Switch>
					<Route path="/" exact component={() => <Redirect to="/home" />} />
					<Route path="/home" exact component={Home} />
					<Route path="/auth" exact component={Auth} />
					<Route path="/bubbles" exact component={BubbleForm} />
					<Route component={Page404} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
