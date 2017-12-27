import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Carousel.less';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import path  from 'path';
var config = {
    autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    onChange: function(){
    },
    onClickItem: function(){
    }
}
export default class DemoCarousel extends Component {
    static propTypes={
        config:PropTypes.object
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Carousel {...this.props.config} > 
                {this.props.bannerList.map((item,index) =>{
                    return  <div key={index}>
                            <img src={item} />
                            </div>    
                })}
            </Carousel>
        );
    }
}



