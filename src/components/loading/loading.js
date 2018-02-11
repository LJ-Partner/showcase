import React, { Component } from 'react';
import './Loading.less'
export default class Loading extends React.Component{
	constructor(props) {
		super(props)
	}
    render(){
        return(
        	<div className="loading-w">
        		<img src={'https://p.maicai360.cn/img/get/20180211/18420636539452318555258_gif'} />
        	</div>     
        );
    }
}



