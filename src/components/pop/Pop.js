import React, { Component } from 'react';
import './Pop.less';
export default class Pop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			popShow: false
		}
	}
    init(){
        setTimeout(() =>{
            this.setState(prevState => ({
                popShow: true
            }));
        },3000);  
    }
	closePop(){
		this.setState(prevState => ({
            popShow: false
        }));	
	}
    componentWillMount(){
        this.init();
    } 
    componentWillUnmount(){  
        this.setState = (state,callback)=>{
            return;
        };  
    }  
    render(){
        return(
            <div className="pop-w">
            	<div className={this.state.popShow?"pop":"pop hide"}>
            		<img className="pop-server-img" src={require('../../images/server.png')} />
            		<div className="pop-cnt">
            			<p>{this.props.popData.title}</p>	
            			<div className="btn-group">
            				<a onClick={this.closePop.bind(this)}>现在咨询</a>
            				<a onClick={this.closePop.bind(this)}>稍候再说</a>
            			</div>
            		</div>
            	</div>  
            </div>   
        );
    }
}



