import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'semantic-ui-css/semantic.min.css';

import App from './App';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
