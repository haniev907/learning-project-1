import React from "react";
import reactDom from 'react-dom';
import './index.css'
import MyTableInfo from "./components/table";

const App = () => {
   return <MyTableInfo/>;
};

reactDom.render(<App/>, document.querySelector('#root'))