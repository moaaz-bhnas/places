import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.scss';
import './es5+6-support';
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
