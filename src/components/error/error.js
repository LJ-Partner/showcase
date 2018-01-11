import React, { Component } from 'react';
import './error.less'
export default class Unright extends React.Component{
    render(){
        return(
        	<a href="/" className="error">
        		<img src={require('./error.png')} />		
        	</a>	  
        );
    }
}



