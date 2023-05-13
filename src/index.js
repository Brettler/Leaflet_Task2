import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* This section initializes the rendering of the React application by creating a root container element in the
* HTML document with the ID 'root', using the ReactDOM.createRoot() method. The root.render() method then renders the
* App component inside the root container. The React.StrictMode component is also included, which is a tool for
* highlighting potential problems in the application's code.
* Overall, this code sets up the React application to be displayed in the web page. */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);