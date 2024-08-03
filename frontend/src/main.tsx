import React from 'react';
import  { render } from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'; 
import App from './App'; 

render(
  <Auth0Provider
    domain="dev-1350zgmjlyi7iils.us.auth0.com"
    clientId="jm8pwaubt8vbSY9rO3auPWA17awiaEmQ"
    authorizationParams={{
      redirect_uri: "http://localhost:5175/home"
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
  document.getElementById('root')
);
