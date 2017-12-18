import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import '../../font/iconfont.css';
import Carousel from '../../components/Carousel/Carousel';
import Product from '../../components/Product/Product';
import Solve from '../../components/Solve/Solve';
import Service from '../../components/Service/Service';
import Status from '../../components/Status/Status';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import ProductList from '../../components/ProductList/ProductList';
import Support from '../../components/Support/Support';
import Custome from '../../components/Custome/Custome';
import Pop from '../../components/Pop/Pop';
import Footer from '../../components/Footer/Footer';
var api = require('../../mock/index.js');
console.log(api.getdata());
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
const flag = 'home';
export default class Home extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
		    <div className="wrap">
		    	<div className="main home">
		    		<Carousel config={IndexHeadCarousel} />
					<Product />
					<Solve />
					<Service />
					<Status />	
					<Support />
		    	</div>
		    	<Footer flag={flag} />
		    	<div className="pop-w">
		    		<Pop />				
		    	</div>
		    	<Custome />
				
				<MenuIcon  config = {IndexMenuIcon}/>
			</div>
		);
	}
}




