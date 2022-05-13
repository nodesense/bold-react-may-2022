// the first file looked up by webpack to start react app bundling
// bootstrap file, run on browser
// react-scrits shall bundle app and include as part of index.html src
import ReactDOM from 'react-dom';
import React from 'react';

import App from './app/App';
// v.dom
// const h1 = React.createElement("h1", {id : 'appheader', className:"active"}, 'Welcome to React');

// JSX - JavaScript + XML
// JSX code converted into javascript by babel plug in at build time
// mandate to conlude React imports when jsx used
//const h1 = <h1 id="appHeader" className="active">Welcome to React </h1>

// mount v.dom into real dom using render
ReactDOM.render(<App />, document.getElementById('root'));