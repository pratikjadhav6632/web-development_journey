import React from 'react'; //import react library
import ReactDOM from 'react-dom/client'; //impor react-dom library
import App from './App'; //imort App component


const root = ReactDOM.createRoot(document.getElementById('root')); //get root id from index.html
root.render( 
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
); //render App component on HTML

