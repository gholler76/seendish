import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core';

import {reducers} from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff3333'
		},
		secondary: {
			main: '#ffcc33'
		},
		seenBlue: {
			main: '#3333ff'
		},
		seenGreen: {
			main: '#66ff33'
		},
		seenWhite: {
			main: '#ffebeb'
		},
	}
});

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
);
