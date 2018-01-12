import React, { Component } from 'react';
import './PullUp.less'
export default class PullUp extends React.Component{
	constructor(props){
		super(props)
	}
    render(){
        return(
        	<div className="pull-up"><span>{this.props.content}</span></div>        
        );
    }
}



