import React from 'react';
import {Container, createMuiTheme, ThemeProvider, Paper} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import useStyles from './styles';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import TopNav from './components/Navbar/TopNav';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff3333'
		},
		secondary: {
			main: '#ffcc33'
		}
	}
});

const App = () => {
	const user = JSON.parse(localStorage.getItem('profile'));
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Container className={classes.mainContainer} component="main" maxWidth="md">
					{user ? <TopNav /> : null}
					<Switch>
						<Route path="/" exact component={() => <Redirect to="/home" />} />
						<Route path="/home" exact component={Home} />
						<Route path="/auth" exact component={Auth} />
					</Switch>
				</Container>
			</BrowserRouter>
		</ThemeProvider >
	);
};

export default App;
