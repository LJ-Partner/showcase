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
            		<p></p>
            	</div>	
            	<ul className="solve-list">
                    {this.props.product.list.map((item,index) =>{
                        return  <li key={index} className="list-item" style={{background: 'url('+item.PictureURL+') center no-repeat',backgroundSize: "100% 100%"}}>
                                    <a href={this.props.name+'/products/'+(index+1)}>
                                       <h3>{item.ProductSeries}</h3>
                                    </a>
                                </li>
                    })}
            	</ul>												
            </div>    
        );
    }
}



