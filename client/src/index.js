import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gravity from './components/Gravity';
import Flipped from './components/Flipped';
import Rules from './components/Rules';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
const rootElement = document.getElementById('root');
ReactDOM.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="gravity" element={<Gravity />} />
        <Route path="flipped" element={<Flipped />} />
        <Route path="rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
