import React, { Component } from 'react';
import './Loading.less'
export default class Loading extends React.Component{
	constructor(props) {
		super(props)
	}
    render(){
        return(
        	<div className="loading-w">
        		<img src={require('./loading.gif')} />
        	</div>     
        );
    }
}



