import React, { Component } from 'react';
import './Solve.less';
export default class Product extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="solve">
            	<div className="solve-header">
            		<h2>{this.props.product.title}</h2>
            		<p>{this.props.product.des}</p>
            		<p></p>
            	</div>	
            	<ul className="solve-list">
                    {this.props.product.list.map((item,index) =>{
                        return  <li key={index} className="list-item" style={{background: 'url('+item.bg+') center no-repeat',backgroundSize: "100% 100%"}}>
                                    <a href={item.link}>
                                       <h3>{item.name}</h3>
                                    </a>
                                </li>
                    })}
            	</ul>												
            </div>    
        );
    }
}



