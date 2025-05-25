import { StrictMode } from 'react' //Import react library as StrictMode insted of react
import { createRoot } from 'react-dom/client' //Import react-dom library as createROot insted of ReactDom
import App from './App.jsx'

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <App />
  </StrictMode>,
) //Get root id from html and render App component on them 
