import React, { Component } from 'react';
import axios from 'axios';
import BackBtn from '../BackBtn';
import './index.css';
export default class AddClass extends Component {

    adddata = () => {
        axios.post(`http://localhost:3000/class/`, {
            "name": this.classname.value,
            "grade": this.grade.value,
            "category": "教学班"
        }).then(
            response => {
                console.log(response.data);
            },
            error => {
                console.log(error.message);
            }
        )
    }
    show =()=>{
        console.log(this.classname.value);
        console.log(this.grade.value);
        console.log(this.classify.checked );
    }
    render() {
        return (
            <div className="content">
                <div className="content-top">
                    <a href=" ">我的班级</a>
                    <BackBtn />
                </div>
                <div className="addclass">
                    <div className="addclass-text">
                        尊敬的 <span>老师 (刘老师)</span> , 请填写班级信息:
                </div>

                    <form action='' className="class-input" >
                        <div><span>学校</span>
                            <input type="text" placeholder="请选择学校" className="input1" id='school' />
                            <label></label>
                        </div>
                        <div><span> <i>*</i>学段</span>
                            <select  ref={(c) => { this.grade = c }}>
                                <option value="volvo">请选择学段</option>
                                <option value="小学">小学</option>
                                <option value="初中">初中</option>
                                <option value="高中">高中</option>
                                <option value="大学">大学</option>
                            </select>
                        </div>
                        <div><span> <i>*</i>年纪</span>
                            <select>
                                <option value="volvo">请选择年级</option>
                                <option value="first grade">一年级</option>
                                <option value="second grade">二年级</option>
                                <option value="grade three">三年级</option>
                            </select>
                        </div>
                        <div><span> <i>*</i>班级名</span><input className="input1" type="text" placeholder="请输入班级名称,限20个字符,不支持输入_和%" id='classname' ref={(c)=>{this.classname=c}} /><label></label></div>
                        <div><span>类型</span> <input name="checkbox" value="行政班" type="checkbox" className="tui-checkbox " ref={(c) => { this.classify = c }} />行政班 <input type="checkbox" value="教学班" className="tui-checkbox"  ref={(c) => { this.classify = c }}/>教学班</div>
                        <div><span>退出权限设置</span>
                            <input name="checkbox" value="允许退出" type="checkbox" className="tui-checkbox tui-checkbox2 " />允许退出
                    <input name="checkbox" value="允许退出" type="checkbox" className="tui-checkbox tui-checkbox2" />通过班级管理员审核后退出
                    <input name="checkbox" value="允许退出" type="checkbox" className="tui-checkbox" />禁止退出
                    </div>
                        <button className="submit" onClick={this.adddata} > 保存</button>
                    </form>
                </div>
                <script src='./form.js'></script>
            </div>
        )
    }
}
