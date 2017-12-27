import React, { Component } from 'react';
import './Product.less';
export default class Product extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="product">
            	<div className="product-header">
            		<h2>{this.props.info.title}</h2>
            		<p>{this.props.info.des}</p>
            	</div>	
            	<ul className="product-cat">
                    {this.props.info.menu.map((item,index) =>{
                        return  <li key={index} className="cat-item">
                                    <a href={item.link}>
                                        <span className="pic">
                                            <i className={item.icon + " " + "iconfont"}></i>
                                        </span>
                                        <p>
                                            <span>{item.name}</span>
                                            <i>{item.english_name}</i>
                                        </p>
                                    </a>
                                </li>
                    })}
            	</ul>												
            </div>    
        );
    }
}



