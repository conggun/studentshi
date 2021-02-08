import React, { Component } from 'react';
import Background1 from '../../../background-img/item.png';
var sectionStyle1 = {
    // makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background1})`
};
export default class Item extends Component {

    render() {
        const{state} = this.props.location;
        const{classes,identity} = state || {};
        const status = classes[identity]
        // const status = classes[identity];
        return (
            <div style={{ float: 'left'}}>
                {   
                    status.map((classObj)=>{
                        return <div className="item" key={classObj.id}>
                        <div className="item-img" style={sectionStyle1} >
                            <span className="item-span">{classObj.identity}</span>
                        </div>
                        <div className="item-text">
                            <h2>{classObj.name}</h2>
                        </div>
                    </div>
                    })
                }
            </div>
        )

    }
}
