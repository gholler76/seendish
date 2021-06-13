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
		seenRed: {
			main: '#ff3333',
			dark: '#b22323',
			light: '#ff5b5b'
		},
		seenGold: {
			main: '#ffcc33',
			dark: '#b28e23',
			light: '#ffd65b'
		},
		seenBlue: {
			main: '#3333ff',
			dark: '#2323b2',
			light: '#5b5bff'
		},
		seenGreen: {
			main: '#66ff33',
			dark: '#47b223',
			light: '#84ff5b'
		},
		seenWhite: {
			main: '#ffebeb'
		},
		seenGray: {
			main: '#333333',
			light: '#cccccc'
		}
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
