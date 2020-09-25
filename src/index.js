import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import BoxComponent from './BoxComponent';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <BoxComponent greeting={'Inner property' + ' concat'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
