import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';

function MainContent() {
    return (
      <App/>
    ) 
  }
  
ReactDOM.render(<MainContent />, document.getElementById('app'))
