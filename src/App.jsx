import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from './component/Header';
import LeftNav from './component/LeftNav';
import MyClass from './pages/MyClass';
import AddClass from './pages/AddClass';
import ShowClass from './pages/ShowClass';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className="main">
          <LeftNav />
          {/* 注册路由 */}
          <Switch>
          <Route path='/myclass' component={MyClass}/>
          <Route path='/addclass' component={AddClass}/>
          <Route path='/showclass' component={ShowClass}/>
          <Redirect to='/myclass'/>
          </Switch>
         
        </div>

      </div>
    )
  }
}
