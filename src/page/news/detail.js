import React from 'react';
import PropTypes from 'prop-types';
import GoTop from '../../components/GoTop/GoTop';
import Carousel from '../../components/Carousel/Carousel';
import NewsDetail from '../../components/NewsDetail/NewsDetail';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Footer from '../../components/Footer/Footer';
var api = require('../../mock/index.js');
var newsDetailData,menuIconData;
const IndexHeadCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
const flag = 'news';
export default class Detail extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        newsDetailData = api.newsDetailData(this.props.match.params.name,(parseInt(this.props.match.params.id)-1));
        menuIconData = api.menuIconData(this.props.match.params.name);
    }
    render() {
		return (
		    <div className="wrap">
		    	<div className="main">
		    		<Carousel config={IndexHeadCarousel} bannerList = {newsDetailData[0]} />
		    		<NewsDetail id={this.props.match.params.id} newsDetailData={newsDetailData[1][(parseInt(this.props.match.params.id)-1)]} />	
		    	</div>
		    	<GoTop />
		    	<MenuIcon  config = {menuIconData.list}/>
		    	<Footer name={this.props.match.params.name} />
			</div>
		);
	}
}




