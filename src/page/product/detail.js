import React from 'react';
import PropTypes from 'prop-types';
import GoTop from '../../components/GoTop/GoTop';
import Carousel from '../../components/Carousel/Carousel';
import ProductsDetail from '../../components/ProductDetail/ProductDetail';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import Footer from '../../components/Footer/Footer';
var api = require('../../mock/index.js');
var proDetailData;
const IndexHeadCarousel = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
export default class proDetail extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        proDetailData = api.productDetailData(this.props.match.params.name,(parseInt(this.props.match.params.id)-1));
    }
    render() {
		return (
		    <div className="wrap">
		    	<div className="main">
                    <Carousel config={IndexHeadCarousel} bannerList={proDetailData[0]}/>
                    <ProductsDetail id={this.props.match.params.id} detailData={proDetailData[1][(parseInt(this.props.match.params.id)-1)]} />
		    	</div>
                <Footer name={this.props.match.params.name} />
			</div>
		);
	}
}




