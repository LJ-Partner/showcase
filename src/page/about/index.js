import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Footer/Footer';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
const IndexMenuIcon = [
	{
		text:'资讯',
		icon: 'icon-zixun2',
		link:'/#/news'
	},
	{
		text:'产品',
		icon:'icon-chanpin1',
		link:'/#/products/5'
	},
	{
		text:'简介',
		icon:'icon-jianjie',
		link:'/#/about'
	},
	{
		text:'首页',
		icon: 'icon-shouye',
		link: '/'
	}
]
const IndexHeadCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
const flag = 'about';
export default class About extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props); 
    }
    render() {
		return (
		    <div className="wrap">
		    	<div className="main">
		    		<Carousel config={IndexHeadCarousel} />
		    		<Intro />
		    	</div>
				<Footer flag = {flag} />
				<MenuIcon  config = {IndexMenuIcon}/>	
			</div>
		);
	}
}




