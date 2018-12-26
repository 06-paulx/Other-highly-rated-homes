import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

const id = window.location.pathname.split('/')[2];

ReactDom.render(<App id={id} />, document.getElementById('app'));
