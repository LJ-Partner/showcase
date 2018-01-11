import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import '../../../../font/iconfont.css';
import Carousel from '../../../../components/Carousel/Carousel';
import Product from '../../../../components/Product/Product';
import Solve from '../../../../components/Solve/Solve';
import Service from '../../../../components/Service/Service';
import Status from '../../../../components/Status/Status';
import Support from '../../../../components/Support/Support';
import Footer from '../../../../components/Footer/Footer';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
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
			indexData: {},
			newsData:{},
			seriesData:{},
			loading: true
		}
	}
	getData(){ 
		let _this = this;
  		Api.website.tpl1.home(this.props.match.params.item_id)
  		.then((res) =>{
  			_this.setState({ 
                indexData: res.data.content.index,
                newsData: res.data.content.news,
                seriesData: res.data.content.series,
                loading: false
            });
  		})
  		.catch((error) => {
  			console.log(error)
  		})
	}
	componentDidMount() {
		this.getData();	
	}
	render() {
		var data = this.state.indexData;
		console.log(data)
		var _data = {};
		if(Object.keys(data).length > 0 && data.constructor === Object){
			_data = {
				banner: [data.Banner1,data.Banner2,data.Banner2],
				info: {
					title:data.Subtitle1,
					des: data.Subtitle2,
					menu: [{
							"icon":"icon-gongsijianjie",
							"name":"介绍",
							"english_name":"Introduce",
							"link":'/'+this.props.match.params.name_id + '/website/' + this.props.match.params.item_id + '/about'
						},
						{
							"icon":"icon-linian",
							"name":"寄语",
							"english_name":"Hostlanguage",
							"link":"/yikst/philosophy"
						},
						{
							"icon":"icon-chanpin",
							"name":"产品",
							"english_name":"Product",
							"link":'/'+this.props.match.params.name_id + '/website/' + this.props.match.params.item_id + '/products'
						},
						{
							"icon":"icon-zixun1",
							"name":"新闻",
							"english_name":"News",
							"link":'/'+this.props.match.params.name_id + '/website/' + this.props.match.params.item_id + '/news'
						}]
				},
				product: {
					title: '产品',
					des:'亿铖达一直致力于安全环保型产品的研发，涵盖胶黏剂、锡膏、金属合金焊料、环保型助焊剂等',
					list: this.state.seriesData
				},
				information: {
					title:'资讯',
					des:'株洲科能最新动态新闻，实时了解公司发展',
					list: this.state.newsData
				}
			}
			return (
				<div className="wrap">
					{this.state.loading?'<Loading />':'<div>bbbbb</div>'}
					<div className="main home" >
						<Carousel config={IndexHeadCarousel} bannerList={_data.banner}/>
						<Product info={_data.info} name={this.props.match.params.name_id} />
						<Solve product = {_data.product} name={"/" + this.props.match.params.name_id + "/website/" + this.props.match.params.item_id } />
						<Service information = {_data.information} name={"/" + this.props.match.params.name_id + "/website"} />
						<Status message={_data.information} name={"/" + this.props.match.params.name_id + "/website"} />		
					</div>
					<Footer flag={flag} name={this.props.match.params.name_id} />	
				</div>
			)
		}else{
			return (
				<Empty content = "内容为空" />
			)
		}
	}
}




