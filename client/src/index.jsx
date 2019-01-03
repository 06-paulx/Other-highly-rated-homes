import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

const id = window.location.pathname.slice(-1);
console.log(id);

ReactDom.render(<App id={id} />, document.getElementById('OtherListings'));
