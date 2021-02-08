import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import PubSub from 'pubsub-js';
import {Link} from 'react-router-dom';

export default class LeftNav extends Component {
    getclass =()=>{
      PubSub.publish('getclass',{isFirst:false,isLoading:true});
      // //2.发送网络请求
      axios.get(`http://localhost:3000/class`).then(
          response =>{
              console.log(response.data);
              //请求成功后,取消加载,并返回数据
              // updateAppState({isLoading:false,users:response.data.items});
              PubSub.publish('getclass',{isLoading:false,classes:response.data});
          },
          error =>{
              //请求失败后
              // updateAppState({isLoading:false,err:error.message});
              PubSub.publish('getclass',{isLoading:false,err:error.message});
          }
      )
    }
    render() {
        return (
            <div className="left-navigation">
            <div className="left-top">
              <div className="icon1"><img src="/img/icon-1.png" alt="icon1" /></div>
              <span className="left-top-span">个人中心</span>
              <div className="icon2"><img src="/img/icon-2.png" alt="icon2" /></div>
            </div>
            <ul className="left-nav">
              <li><img src="/img/icon-3.png" alt="s" /><a href=" " >其他内容</a></li>
              <li><img src="/img/icon-4.png" alt="s" /><a href=" " >其他内容</a></li>
              {/* <li className="myclassico"><img src="./img/icon-5.png" alt="s" /><a href=" " >我的班级</a></li> */}
              <li className="myclassico"><img src="/img/icon-5.png" alt="s" /><Link to='/myclass'  onClick={this.getclass}>我的班级</Link></li>
              <li><img src="/img/icon-6.png" alt="s" /><a href=" " >其他内容</a></li>
            </ul>
          </div>

        )
    }
}
