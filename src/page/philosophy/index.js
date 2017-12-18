import './index.less';
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import PhilosophyDetail from '../../components/PhilosophyDetail/PhilosophyDetail';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Footer from '../../components/Footer/Footer';
const IndexHeadCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
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
export default class Philosophy extends React.Component {
    render() {
		return (
		    <div className="wrap">
		    	<div className="main philosophy-w">
		    		<Carousel config={IndexHeadCarousel} />
		    		<PhilosophyDetail />	
		    	</div>
		    	<MenuIcon  config = {IndexMenuIcon}/>
		    	<Footer />		
			</div>
		);
	}
}




