import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PersistGate } from 'redux-persist/integration/react'
import { loadUser } from './redux/userRedux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

store.dispatch(loadUser(null));
ReactDOM.render(
 

  <Provider store={store} >
 <ToastContainer/>
  
    <App/>
   
  </Provider>,
  

  document.getElementById('root')
);