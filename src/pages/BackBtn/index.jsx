import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
 class BackBtn extends Component {
    back =()=>{
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="btn1">
                    <button className="btn" onClick={this.back}>返回上一级</button>
            </div>
        )
    }
}
//withRouter可以加工一般组件,让一般组件具备路由组件所特有的api
export default withRouter(BackBtn);
