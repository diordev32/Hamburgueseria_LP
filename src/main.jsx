import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/root.css"

const rootDOMElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDOMElement);

root.render(<App />);