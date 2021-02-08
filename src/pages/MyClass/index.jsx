import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import PubSub from 'pubsub-js';
export default class MyClass extends Component {
  state = {//初始化状态
    classes: [],
    isFirst: true,  //是否为第一次打开页面
    isLoading: false, //标识是否加载中
    err: '', //存储请求相关的错误信息
  }
  addbtn = () => {
    this.props.history.push('/addclass');
  }
  //挂载完毕订阅消息
  componentDidMount() {
    this.token = PubSub.subscribe('getclass', (_, stateObj) => {
      this.setState(stateObj);
    })
  }

  //组件即将卸载取消订阅
  componentWillUnmount() {
    PubSub.unsubscribe(this.token); //取消订阅
  }

  showPeople =(id)=>{
    return ()=>{
            // //2.发送网络请求
            axios.get(`http://localhost:3000/class/${id}`).then(
              response =>{
                  
                  //请求成功后,取消加载,并返回数据
                  // updateAppState({isLoading:false,users:response.data.items});
                  PubSub.publish('classpeople',{classes:response.data});
              },
              error =>{
                  //请求失败后
                  // updateAppState({isLoading:false,err:error.message});
                  PubSub.publish('classpeople',{err:error.message});
              }
          )
    }
  }

  render() {
    const { classes,isFirst,isLoading,err } = this.state;
    return (
      <div className="content">
        <div className="content-top">
          <a href=" " >我的班级</a>
          <div className="btn1">
            <button className="btn">加入班级</button>
            <button className="btn" onClick={this.addbtn}>创建班级</button>
          </div>
        </div>

        <div className="myclass">
          <div className="administrative-class">
            <div className="class-text">
              <span>行政班是为学生管理和教学管理而设置的班级</span>
            </div>
            <div className="class-wrapper">
            {
                    isFirst ? <h2>点击左侧导航栏,"我的班级",展示班级列表</h2> :
                    isLoading? <h2>正在加载中.....</h2>:
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    classes.map((classObj) => {
                        if(classObj.category === '行政班'){
                          return   <Link to='/showclass' className="aclass" key={classObj.id} onClick={this.showPeople(classObj.id)}>
                          <div className="aclass-img"><img src="./img/class.png" alt="class" /></div>
                          <div className="aclass-text">
                            <span className="class-span2">{classObj.name}</span>
                            <span ><span className="class-span1">班级 : </span><span className="class-span2">{classObj.grade}二班</span></span>
                            <span ><span className="class-span1">班主任 : </span><span className="class-span2">田小雨</span></span>
                            <span><span className="class-span1">学生 : </span><span className="class-span2">33人</span></span>
                            <span className='class1'>{classObj.category}</span>
                          </div>
                        </Link>
                        }else{
                          return ""
                        }
                    })
                }
            </div>
          </div>

          <div className="administrative-class class2">
            <div className="class-text">
              <span>教学班是根据课程教学要求而设置的班级</span>
            </div>
            <div className="class-wrapper">
            {
                    isFirst ? <h2>点击左侧导航栏,"我的班级",展示班级列表</h2> :
                    isLoading? <h2>正在加载中.....</h2>:
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    classes.map((classObj) => {
                        if(classObj.category === '教学班'){
                          return   <Link to='/showclass' className="aclass" key={classObj.id} onClick={this.showPeople(classObj.id)}>
                          <div className="aclass-img"><img src="./img/class.png" alt="class" /></div>
                          <div className="aclass-text">
                            <span className="class-span2">{classObj.name}</span>
                            <span ><span className="class-span1">班级 : </span><span className="class-span2">{classObj.grade}二班</span></span>
                            <span ><span className="class-span1">班主任 : </span><span className="class-span2">田小雨</span></span>
                            <span><span className="class-span1">学生 : </span><span className="class-span2">33人</span></span>
                            <span className='class1'>{classObj.category}</span>
                          </div>
                        </Link>
                        }else{
                          return ""
                        }
                    })
                }
            </div>
          </div>
        </div>
      </div>

    )
  }
}
