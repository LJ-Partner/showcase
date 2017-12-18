import React, { Component } from 'react';
import './Solve.less';
export default class Product extends Component {
    render() {
        return (
            <div className="solve">
            	<div className="solve-header">
            		<h2>产品</h2>
            		<p>瑞恩重视研发，从细节入手为客户提供贴心、周到的服务</p>
            		<p></p>
            	</div>	
            	<ul className="solve-list">
            		<li className="list-item">
            			<a href="/#/products/1">
            			   <h3>干式变压器系列</h3>
            			</a>
            		</li>
                        <li className="list-item">
                           <a href="/#/products/2">
                              <h3>油浸式变压器系列</h3>
                           </a>
                        </li>
                        <li className="list-item">
                           <a href="/#/products/3">
                              <h3>变电站系列</h3>
                           </a>
                        </li>
                        <li className="list-item">
                           <a href="/#/products/4">
                              <h3>其他产品</h3>
                           </a>
                        </li>
            	</ul>												
            </div>    
        );
    }
}



