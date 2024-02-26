// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App'; // Использование импорта по умолчанию
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <div className="main-container">
//         <div className='overall'></div>
//         <App />
//       </div>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux"; // Импорт Provider из React Redux
// import { BrowserRouter as Router } from "react-router-dom";
// import store from "./store"; // Импорт объекта store

// import App from "./App"; // Путь к вашему корневому компоненту

// ReactDOM.render(
//   <React.StrictMode>
//     {/* Обертка корневого компонента в Provider и передача store */}
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


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Импорт Provider из React Redux
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store"; // Импорт объекта store

import App from "./App"; // Путь к вашему корневому компоненту

ReactDOM.render(
  <React.StrictMode>
    {/* Обертка корневого компонента в Provider и передача store */}
    <Provider store={store}>
      <Router>
        <div className="main-container">
          <div className="overall">
            <App />
          </div>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

