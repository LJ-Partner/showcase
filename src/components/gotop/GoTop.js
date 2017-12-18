import React, { Component } from 'react';
import './GoTop.less'
export default class GoTop extends React.Component{
	constructor(){
		super();
		this.state = {
			flag: true
		};  
	}
	init(){
		window.addEventListener('scroll',(e)=>{
			if(document.documentElement.scrollTop >= parseInt(window.innerHeight/2)){
				this.setState(prevState => ({
		            flag: false
		        })); 
			}else{
				this.setState(prevState => ({
		            flag: true
		        }));
			}
		});		
	}
	toTop(){
		document.documentElement.scrollTop = 0;
		this.setState(prevState => ({
            flag: true
        }));
	}
	componentWillMount(){
        this.init();        
    }
    //组件将被卸载  
    componentWillUnmount(){  
        this.setState = (state,callback)=>{
        	return;
        };  
    }
    render(){
        return(
            <div className={this.state.flag?"go-top hide":"go-top "} id="goTop" onClick={this.toTop.bind(this)}>
                <a>
                    <img src={require('../../images/blup.png')} />
                </a>
            </div>    
        );
    }
}



