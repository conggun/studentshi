# 1.项目结构介绍

<img src="https://www.shiconggun.cn/wz/img/image-20210208132912796.png" alt="image-20210208132912796" style="zoom:50%;" />

> json_server : 服务器
>
> src/component :一般组件
>
> src/pages:路由组件



# 2.启动服务器

> 在json_server 下打开终端 输入   npm run json:server  启动服务器



# 3.项目展示

> 输入 npm start 启动脚手架



## 3.1 我的班级列表

> 点击我的班级,通过axios发送AJAX请求, 通过PubSub订阅传递数据,展示班级列表

```jsx
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
```

<img src="https://www.shiconggun.cn/wz/img/image-20210208133736998.png" alt="image-20210208133736998" style="zoom:33%;" />

![](https://www.shiconggun.cn/wz/img/image-20210208133902632.png)



## 3.2  班级成员展示

###  1.点击对应的班级,通过pubsub订阅,把对id对应的班级发送出去

```jsx
  showPeople =(id)=>{
    return ()=>{
            // //2.发送网络请求
            axios.get(`http://localhost:3000/class/${id}`).then(
              response =>{
                  PubSub.publish('classpeople',{classes:response.data});
              },
              error =>{
                  //请求失败后
                  PubSub.publish('classpeople',{err:error.message});
              }
          )
    }
  }
```



### 2.点击路由链接,发送state参数

> 获取到对应id的班级的后 , 通过state发送参数,展示对应学生,教师家长,的信息

```jsx
 <div><Link to={{ pathname: '/showclass/teacher', state: { classes, identity: "teacher" } }} onClick={()=> this.vanish() }  >所有老师(10)</Link></div>

 <div><Link to={{ pathname: '/showclass/student', state: { classes, identity: "student" } }} onClick={()=> this.vanish() } >所有学生(10)</Link></div>

<div><Link to={{ pathname: '/showclass/patriarch', state: { classes, identity: "patriarch" } }} onClick={()=> this.vanish() } >所有家长(10)</Link></div>

```





## 3.3创建班级

```jsx
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
```



![image-20210208135221819](https://www.shiconggun.cn/wz/img/image-20210208135221819.png)



![image-20210208135306018](https://www.shiconggun.cn/wz/img/image-20210208135306018.png)



## 3.4返回上一级

```jsx
//1.withRouter可以加工一般组件,让一般组件具备路由组件所特有的api
export default withRouter(BackBtn);
//2.编程式路由导航,返回上一级
    back =()=>{
        this.props.history.goBack();
    }
```

![image-20210208140231208](https://www.shiconggun.cn/wz/img/image-20210208140231208.png)

# 4.用到的插件

```
 axios: yarn add axios;
 订阅:yarn add pubsub-js;
 路由:yarn add react-router-dom;
```

