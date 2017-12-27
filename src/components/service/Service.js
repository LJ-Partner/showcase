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
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="service">
            	<div className="service-header">
            		<h2>{this.props.information.title}</h2>
                    <p>{this.props.information.des}</p>
            	</div>	
                <div className="service-con">
                    <Carousel {...carouselConfig} className="service-slide-box">
                        {this.props.information.banner.map((item,index) =>{
                            return  <div key={index} className="slide-box-item">
                                        <a href={item.link}>
                                            <img src={item.pic_url} />
                                            <p>{item.title}</p>    
                                        </a>
                                    </div>    
                        })}         
                    </Carousel>
                </div>						
            </div>    
        );
    }
}



