import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './common/Login';
import SignUp from './common/Sign Up';
import Home from './component/Home/Home';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
   
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      
      
      
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

