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
            		<h2>江苏瑞恩电气 . 专业成就梦想</h2>
            		<p>专业从事各种电力变压器和箱式变电站制造</p>
            	</div>	
            	<ul className="product-cat">
            		<li className="cat-item">
            			<a href="/#/about">
            				<span className="pic">
                                <i className="iconfont icon-gongsijianjie"></i>
                            </span>
            				<p>
                                <span>介绍</span>
                                <i>Introduce</i>
                            </p>
            			</a>
            		</li>
            		<li className="cat-item">
            			<a href="/#/philosophy">
            				<span className="pic">
                                <i className="iconfont icon-linian"></i>
                            </span>
            				<p>        
                                <span>理念</span>
                                <i>Philosophy</i>
                            </p>
            			</a>
            		</li>
            		<li className="cat-item">
            			<a href="/#/products/5">
            				<span className="pic">	
                                <i className="iconfont icon-chanpin"></i>
            				</span>
                            <p>
                                <span>产品</span>
                                <i>Product</i>
                            </p>
            			</a>
            		</li>
            		<li className="cat-item">
            			<a href="/#/news/">
            				<span className="pic">
                                <i className="iconfont icon-zixun1"></i>
                            </span>
            				<p>
                                <span>资讯</span>
                                <i>Information</i>      
                            </p>
            			</a>
            		</li>
            	</ul>												
            </div>    
        );
    }
}



