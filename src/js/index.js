import React from 'react';
import ReactDom from 'react-dom';

// alert(0);
// console.log(1);
// var App = React.creatClass({
   
//     //初始化后render中就可以用了
//     getDefaultProps:function(){
//         console.log('getDefaultProps');
//         return{
//             name:'ccc'
//         }
//     },
//     getInitialState:function(){
//         Console.log('getInitialState');
//         return{
//             value:'pleasr input'
//         }
//     },
//     componentWillMount:function(){
//        console.log('componentWillMount');
//     },
//     shouldComponentUpdate:function(nextProps,nextState){
//         console.log('shouldComponentUpdate',nextState,nextProps);
//         return true;
//     },
//     componentWillUpdate:function(){
//         console.log('componentWillUpdate');
//     },
//     componentDidUpdate:function () {
//         console.log(componentDidUpdate);
//     },
//     render:function () {
//        console.log( this.props,name)
//          return (
//            <div>
//                 <span>{CpName}</span>
//                 <ul>
//                     {
//                         //map是把所有的元素拿过来处理之后返回回去，返回一个数组
//                         // function中第一个参数是元素，第二个参数是索引
//                         this.props.data.map(function(ele,index){
//                             return <li key={index + 100}>{ele}</li>
//                         })
                  
//                     }
//                 </ul>
//            </div>
//         )
//     },
//     componentDidMount:function(){
//         console.log('componentDidMount');
//         var self = this;
//         setTimeout(function(){
//             self.setStat({value:'bbb'});
//         },2000);
//     }
    
// });

// var dataList=['CST','JC','LD'];
// ReactDom.render(
//     <App data={dataList}/>,
//     document.getElementById('root')
//  );

// var Search = React.createClass({
//     getInitialState:function(){
//         return{
//             value:'pleae input'
//         }
//     },
//     rebder:function(){
        
//     }
// })

// var Mask = React.ctreatClass({
//     render:function(){
//         var styles = {
//             position:'absolute',
//             left:0,
//             top:0,
//             right:0,
//             bottom:0,
//             background:'black',
//             opacity:0.5,
//             display:'black'
//         }
//         return (
//             <div style={styles} >
//             <Dialog/>
//             </div>
//         )
//     },
// })

// var Dialog = React.createClass({
//     render:function(){
//         var styles = {
//             width:'100%',
//             height:200,
//             lineHeight:'200px',
//             textAlign:
//         }
//         return(
//             <div></div>
//         )
//     }
// })
// ReactDom.render(
//     <Mask/>,
//     document.getElementById('root')
// )






// var App = React.createClass({
//      getDefaultProps:function(){
//         console.log('getDefaultProps');
//         return{
//             name:'ccc'
//         }
//     },
//     getInitialState:function(){
//         console.log('getInitialState');
//         return{
//             value:'pleasr input'
//         }
//     },
//     componentWillMount:function(){
//        console.log('componentWillMount');
//     },
//     shouldComponentUpdate:function(nextProps,nextState){
//         console.log('shouldComponentUpdate',nextState,nextProps);
//         if(nextState !=='dd'){
//             return false;
//         }
//     },
//     componentWillUpdate:function(){
//         console.log('componentWillUpdate');
//     },
//     componentDidUpdate:function () {
//         console.log('componentDidUpdate');
//     },
//     render:function(){
//        //render什么，页面中就显示什么 但是返回的只能有一个根标签
       
//         console.log( this.props,name)
//        var CpName = 'Duyi';
       
//        //可扩展的，不可写的，可读的
//        console.log( this.props.data);
//        return (
//            <div>
//                 <span>{CpName}</span>
//                 <ul>
//                     {
//                         //map是把所有的元素拿过来处理之后返回回去，返回一个数组
//                         // function中第一个参数是元素，第二个参数是索引
//                         this.props.data.map(function(ele,index){
//                             return <li key={index + 100}>{ele}</li>
//                         })
                  
//                     }
//                 </ul>
//            </div>
//         )
//     },
    
//     componentDidMount:function(){
//         console.log('componentDidMount');
//         var self = this;
//         setTimeout(function(){
//             self.setState({value:'bbb'});
//         },2000);
//     }
// });
// // 动态添加数据
// var dataList=['CST','JC','LD'];

// // 渲染 第一个参数是组件，第二个参数是放入的地点
// ReactDom.render(
//     <App data={dataList}/>,
//     document.getElementById('root')
//  );



var Search = React.createClass({
    getInitialState:function(){
        return {
            value:'please input'
        }
    },
    onHandleChange:function () {
        this.setState({value: this.refs.inp.value});
    },
    render:function(){
        console.log(this.state.value);
        return(
            <div>
                <input type='text' ref='inp' value={this.state.value} onChange={this.onHandleChange()}> </input>
                <span>{this.state.value}</span>
             </div>
        )
    }
})

ReactDom.render(
    <Search/>,
     document.getElementById('root')
    
)