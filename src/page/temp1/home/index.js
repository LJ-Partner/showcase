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
import axios from 'axios';
var api = require('../../mock/index.js');
var indexData,menuIconData,customeData,popData;
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
		super(props);
		this.state = {
			componentShow: true,
			type: '',
			posts:[]	
		}
		indexData = api.IndexData(this.props.match.params.name);
		menuIconData = api.menuIconData(this.props.match.params.name);
		customeData = api.customeData(this.props.match.params.name);
		popData = api.popData(this.props.match.params.name);
		if(this.props.match.params.name == 'ningde'){
			this.setState({componentShow: false});
		}
	}
	componentDidMount() {
		axios.get('../../src/data/index.json')
		.then(res => {
			//console.log(res.data.yikst)
		});
	}
	render() {
		return (
		    <div className="wrap">
		    	<div className="main home">
		    		<Carousel config={IndexHeadCarousel} bannerList={indexData.banner}/>
					<Product info={indexData.info} name={this.props.match.params.name} />
					<Solve product = {indexData.product} />
					<Service information = {indexData.information} />
					<Status message={indexData.message} name={this.props.match.params.name} />	
					<Support />
		    	</div>
		    	<Footer flag={flag} name={this.props.match.params.name} />
		    	{ this.state.componentShow ? <Custome customeData={customeData} /> : '' }
		    	{ this.state.componentShow ? <Pop popData={popData} /> : '' }
		    	{ this.state.componentShow ? <MenuIcon  config = {menuIconData.list}/> : '' }
			</div>
		);
	}
}




