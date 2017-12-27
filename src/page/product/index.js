import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import ProductList from '../../components/ProductList/ProductList';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Footer from '../../components/Footer/Footer';
import './index.less';
var api = require('../../mock/index.js');
var productData,menuIconData;
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
		productData = api.productData(this.props.match.params.name,(parseInt(this.props.match.params.id)-1));
		menuIconData = api.menuIconData(this.props.match.params.name);
    }
    render() {
		return (
		    <div className="wrap">
		    	<div className="main">
		    		<div className="products">
			    		<Carousel config={IndexHeadCarousel} bannerList={productData[0]}/>
			    		<ProductList list={productData[1][(parseInt(this.props.match.params.id)-1)]} name={this.props.match.params.name} id={this.props.match.params.id} />	
			    	</div>	
		    	</div>
		    	<MenuIcon  config = {menuIconData.list}/>
				<Footer flag = {flag} name={this.props.match.params.name} />
			</div>
		);
	}
}




