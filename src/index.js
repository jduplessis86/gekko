import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TSChart from './TSChart'
import HistogramChart from './HistogramChart'

// start development server:
// > npm start

// execute tests:
// > npm test

// create production build:
// > npm run build


ReactDOM.render(<TSChart />, document.getElementById('root'));
ReactDOM.render(<HistogramChart />, document.getElementById('hist'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
