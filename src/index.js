import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import SAMPLE_GROUPS from './data/groups.json'; //a sample list of GROUPS

ReactDOM.render(
  <React.StrictMode>
    <App groups={SAMPLE_GROUPS} />
  </React.StrictMode>,
  document.getElementById('root')
);
