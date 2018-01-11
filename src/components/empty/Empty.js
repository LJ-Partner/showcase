import React, { Component } from 'react';
import './Empty.less'
export default class Empty extends React.Component{
	constructor(props) {
		super(props)
	}
    render(){
        return(
        	<div className="empty-w">
        		<img src={require('./empty.png')} />
        		<p>{this.props.content}</p>
        	</div>     
        );
    }
}



