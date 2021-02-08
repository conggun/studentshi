import React, { Component } from 'react';
import './index.css';

export default class index extends Component {
    render() {
        return (
            <div className="top-bar-wrapper">
            <div className="top-bar">
  
              <div className="login">
                <div className="login-left"><a href=" " ><img src="/img/login-left.png" alt="login" /></a></div>
                <div className="login-text"><a href=" " ><img src="/img/login-text.png" alt="login" /></a></div>
                <div className="login-right"><img src="/img/login-right.png" alt="new"/></div>
  
              </div>
  
              <ul className="top-nav">
                <li><a href=" " >首页</a></li>
                <li><a href=" " >教学管理</a></li>
                <li><a href=" " >学习</a></li>
                <li><a href=" " >资源超市</a></li>
                <li><a href=" " >教育应用</a></li>
                <li><a href=" " >新闻</a></li>
                <li><a href=" " >名校名师</a></li>
              </ul>
  
  
              <div className="new" >
                <a href=" " ><img src="/img/new1.png" alt="new"/></a>
              </div>
  
  
              <div className="search">
                <a href=" " ><img src="/img/search.png" alt="搜索" /></a>
              </div>
  
  
              <div className="user">
                <div className="tx"><a href=" " ><img src="/img/head portrait.png" alt="头像" /></a></div>
                <span>Cooo</span>
              </div>
            </div>
          </div>
  
        )
    }
}
