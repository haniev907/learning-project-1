import React from "react";
import reactDom from 'react-dom';
import './index.css'
import { store } from './store/store';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

reactDom.render(
   <Provider store={store}>
      <BrowserRouter>
           <App/>
      </BrowserRouter>
   </Provider>,
    document.querySelector('#root')
)
