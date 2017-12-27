import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Footer/Footer';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
var api = require('../../mock/index.js');
var aboutData,menuIconData;
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
    constructor(props){
    	super(props)
		aboutData = api.aboutData(this.props.match.params.name);
		menuIconData = api.menuIconData(this.props.match.params.name);
    }
    render() {
		return (
		    <div className="wrap w-about">
		    	<div className="main">
		    		<Carousel config={IndexHeadCarousel} bannerList={aboutData.banner}/>
		    		<Intro detail={aboutData.detail} />
		    	</div>
				<Footer flag = {flag} name={this.props.match.params.name} />
				<MenuIcon  config = {menuIconData.list}/>	
			</div>
		);
	}
}




