import React from 'react';
import logo from './logo.svg';
//import './App.css';

function Hello(props) {
  return (
    <div className="f1 tc">
      <h1> Hello Sayan </h1>
      <p>{props.welcome}</p>
    </div>
  );
}

export default Hello;
