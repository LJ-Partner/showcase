import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Status.less';

export default class Status extends Component {
    render() {
        return (
            <div className="status">
                <ul className="status-list">
                    <li className="list-item">
                        <a href="/#/news/detail/1">
                            <span><img src={require('../../images/s_d_1.jpg')} /></span>  
                            <div className="item-info">
                                <p>江苏瑞恩电气股份有限公司第三季度营销总结暨四季度拼搏大会隆重召开</p>    
                                <i>2017-08-01</i>     
                            </div>
                        </a>   
                    </li>
                    <li className="list-item">
                        <a href="/#/news/detail/2">
                            <span><img src={require('../../images/i-se-bg.png')} /></span> 
                            <div className="item-info">
                                <p>江苏瑞恩电气股份有限公司变压器生产建设项目环境影响报告表</p>    
                                <i>2017-11-20</i>    
                            </div>
                        </a>   
                    </li>
                    <li className="list-item">
                        <a href="/#/news/detail/3">
                            <span><img src={require('../../images/s_d_3.jpg')} /></span> 
                            <div className="item-info">
                                <p>瑞恩电气通过国家安全标准化示范企业检查验收</p>    
                                <i>2017-11-20</i>     
                            </div> 
                        </a>   
                    </li>
                </ul>								
            </div>    
        );
    }
}



