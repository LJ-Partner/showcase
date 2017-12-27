import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import NewsList from '../../components/NewsList/NewsList';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Footer from '../../components/Footer/Footer';
var api = require('../../mock/index.js');
var newsData,menuIconData;
const IndexMenuIcon = [
	{
		text:'资讯',
		icon: 'icon-zixun2',
		link:'/#/news'
	},
	{
		text:'产品',
		icon:'icon-chanpin1',
		link:'/#/products/1'
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
const flag = 'news';
export default class Products extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
		newsData = api.newsData(this.props.match.params.name);
		menuIconData = api.menuIconData(this.props.match.params.name);
    }
    render() {
		return (
		    <div className="wrap w-news">
		    	<div className="main">
		    		<Carousel config={IndexHeadCarousel} bannerList={newsData.banner} />
			    	<NewsList newsList={newsData.list} name={this.props.match.params.name} />	
		    	</div>
		    	<MenuIcon  config = {menuIconData.list}/>
				<Footer flag = {flag} name={this.props.match.params.name} />
			</div>
		);
	}
}




