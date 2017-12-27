import './index.less';
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import PhilosophyDetail from '../../components/PhilosophyDetail/PhilosophyDetail';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Footer from '../../components/Footer/Footer';
var api = require('../../mock/index.js');
var philosophyData,menuIconData;
const IndexHeadCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
export default class Philosophy extends React.Component {
	constructor(props){
		super(props);
		philosophyData = api.philosophyData(this.props.match.params.name);
		menuIconData = api.menuIconData(this.props.match.params.name);
	}
    render() {
		return (
		    <div className="wrap">
		    	<div className="main philosophy-w">
		    		<Carousel config={IndexHeadCarousel} bannerList={philosophyData.banner} />
		    		<PhilosophyDetail detail={philosophyData.detail} />	
		    	</div>
		    	<MenuIcon  config = {menuIconData.list}/>
		    	<Footer name={this.props.match.params.name}  />		
			</div>
		);
	}
}




