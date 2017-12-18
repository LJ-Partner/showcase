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
                <div>
                    <img src={require('../../images/banner1.png')} />
                </div>
                <div>
                    <img src={require('../../images/banner2.png')} />
                </div>
                <div>
                    <img src={require('../../images/banner3.png')} />
                </div>
                <div>
                    <img src={require('../../images/banner4.png')} />
                </div>
            </Carousel>
        );
    }
}



