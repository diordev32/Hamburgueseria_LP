import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/root.css"
import { BrowserRouter } from 'react-router';

const rootDOMElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDOMElement);

root.render(
    <App />
);