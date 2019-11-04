import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import FirstComponent from './first-component';
import SecondComponent from './second-component';

// let element = <p>Hello React!</p>
// // alert(element.props.children);

// ReactDOM.render(element, document.getElementById('react-container'));

// let element = <FirstComponent />;
// ReactDOM.render(element, document.getElementById('react-container'));

let element2 = <SecondComponent title="My nice title" />;
ReactDOM.render(element2, document.getElementById('react-container'));
