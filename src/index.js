//引入ract核心库
import React from 'react';
//引入react-dom
import ReactDOM from 'react-dom';
//引入路由器
import {BrowserRouter} from 'react-router-dom';
//引入App
import App from './App';

//渲染App组件
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));