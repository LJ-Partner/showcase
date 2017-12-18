import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import ProductList from '../../components/ProductList/ProductList';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Footer from '../../components/Footer/Footer';
import './index.less';
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
const flag = 'products';
export default class Products extends React.Component {
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
		    		<div className="products">
			    		<Carousel config={IndexHeadCarousel} />
			    		<ProductList id={this.props.match.params.id} />	
			    	</div>	
		    	</div>
		    	<MenuIcon  config = {IndexMenuIcon}/>
				<Footer flag = {flag} />
			</div>
		);
	}
}




