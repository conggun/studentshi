import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import BackBtn from '../BackBtn';
import Item from './Item'
import { Route, Switch, Link, } from 'react-router-dom';
import './index.css';
import Background2 from '../../background-img/search-box.png';
var sectionStyle2 = {
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background2})`
};
export default class index extends Component {
    state = {
        classes: [],
        err: '',
        exhibition:true
    }
    //挂载完毕订阅消息
    componentDidMount() {
        //通过订阅获取相应id的班级
        this.token2 = PubSub.subscribe('classpeople', (_, stateObj) => {
            console.log(stateObj);
            this.setState(stateObj);
        });

    }

    //组件即将卸载取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token2); //取消订阅
    }
    vanish = () => {
        this.setState({exhibition:false});
    }

    render() {
        const { classes ,exhibition} = this.state;
        return (
            <div className="content">
                <div className="content-top">
                    <a href=" ">我的班级</a>
                    <BackBtn />
                </div>

                <div className="student">
                    <div className="student-top">
                        <h3>折纸兴趣班</h3>
                        <div className="search-box">
                            <input type="text" placeholder="快速查找" />
                            <button style={sectionStyle2}></button>
                        </div>
                    </div>
                    <div className="showdata">
                        <div className="classify">

                            <div><Link to={{ pathname: '/showclass/teacher', state: { classes, identity: "teacher" } }} onClick={()=> this.vanish() }  >所有老师(10)</Link></div>
                            <div><Link to={{ pathname: '/showclass/student', state: { classes, identity: "student" } }} onClick={()=> this.vanish() } >所有学生(10)</Link></div>
                            <div><Link to={{ pathname: '/showclass/patriarch', state: { classes, identity: "patriarch" } }} onClick={()=> this.vanish() } >所有家长(10)</Link></div>
                        </div>

                        <div className="item-wrapper">
                        {exhibition ? <h2 ref={c => this.showh2 = c}>点击上面导航展示不同数据</h2> :
                            <Switch>
                                <Route path='/showclass/teacher' component={Item} />
                                <Route path='/showclass/student' component={Item} />
                                <Route path='/showclass/patriarch' component={Item} />
                            </Switch>}
                        </div>


                    </div>
                </div>



            </div>
        )
    }
}
