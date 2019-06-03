import React from 'react';
import ReactDOM from 'react-dom';
import './public/css/common.css';
import * as serviceWorker from './serviceWorker';
import Main from './public/js/main';


ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
