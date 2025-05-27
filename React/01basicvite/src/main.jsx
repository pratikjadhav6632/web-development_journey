import { StrictMode } from 'react' //Import react library as StrictMode insted of react
import { createRoot } from 'react-dom/client' //Import react-dom library as createROot insted of ReactDom
import App from './App.jsx' 
import React from 'react'
import Chai from './Chai.jsx'

// function customReact(reactElement,container){
  //   const domElement=document.createElement(reactElement.type);
  //   domElement.innerHTML=reactElement.children;
  //   for(const prop in reactElement.props){
  //       if(prop==="children"){
  //         domElement.setAttribute(prop,reactElement.props[prop])
  //       }
  //   }
  //   container.appendChild(domElement);
  //  <a href="www.google.com" target='_blank'>Visit google.com</a>
// }


let reactElement=React.createElement(
 'a',
  {
    href:'www.google.com',
    target:"_blank"
  },
  "viit google.com"
)


createRoot(document.getElementById('root')).render( 
<>
<Chai/>
<App/>
</>
) //Get root id from html and render App component on them 
