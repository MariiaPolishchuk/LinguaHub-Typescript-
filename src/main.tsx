// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux"; 
// import { BrowserRouter as Router } from "react-router-dom";
// import store from "./store"; 
// import App from "./App"; 


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <div className="main-container">
//           <div className="overall">
//             <App />
 
//           </div>
//         </div>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'; 
import App from './App'; 

const root = render(
<Auth0Provider
  domain="dev-1350zgmjlyi7iils.us.auth0.com"
  clientId="dvUlNmIyZu1sMljnrIRvbJR1kxYhOBGS"
  authorizationParams={{
    redirect_uri: "http://localhost:5178/home"
  }}
>

    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <div className="main-container">
            <div className="overall">
              <App />
            </div>
          </div>
        </Router>
      </Provider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')!
);

ReactDOM.render(
  <Auth0Provider
    domain="dev-1350zgmjlyi7iils.us.auth0.com"
    clientId="dvUlNmIyZu1sMljnrIRvbJR1kxYhOBGS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <div className="main-container">
            <div className="overall">
              <App />
            </div>
          </div>
        </Router>
      </Provider>
    </React.StrictMode>
  </Auth0Provider>,
   document.getElementById('root')!
);
