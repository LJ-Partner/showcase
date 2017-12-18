import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Service.less';
import path  from 'path';
const carouselConfig = {
    autoPlay: true,
    showArrows: true,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    onChange: function(){
    },
    onClickItem: function(){
    }
}
export default class Service extends Component {
    render() {
        return (
            <div className="service">
            	<div className="service-header">
            		<h2>资讯</h2>
                    <p>最新瑞恩动态新闻，实时了解公司发展</p>
            	</div>	
                <div className="service-con">
                    <Carousel {...carouselConfig} className="service-slide-box">
                        <div className="slide-box-item">
                            <a href="/#/news/detail/1">
                                <img src={require('../../images/s_01.jpg')} />
                                <p>拼搏大会隆重召开</p>    
                            </a>
                        </div>
                        <div className="slide-box-item">
                            <a href="/#/news/detail/2">
                                <img src={require('../../images/detail_1.jpg')} />
                                <p>环境影响报告表公示</p>   
                            </a>
                        </div>  
                        <div className="slide-box-item">
                            <a href="/#/news/detail/2">
                                <img src={require('../../images/detail_2.jpg')} />
                                <p>国家安全标准化示范企业评审专家检查</p>   
                            </a>
                        </div>                       
                    </Carousel>
                </div>						
            </div>    
        );
    }
}



