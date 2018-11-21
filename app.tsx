import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './src/App';
import './app.css';
import { Provider } from 'react-redux';
import { store } from './src/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
