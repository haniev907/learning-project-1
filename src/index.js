import React from "react";
import reactDom from 'react-dom';
import './index.css'
import MyTableInfo from "./components/table";
import { store } from './store/store';
import { Provider } from "react-redux";

reactDom.render(
   <Provider store={store}>
      <MyTableInfo/>
   </Provider>,
    document.querySelector('#root')
    )