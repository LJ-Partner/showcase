import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/Carousel/Carousel';
import NewsList from '../../../../components/NewsList/NewsList';
import MenuIcon from '../../../../components/MenuIcon/MenuIcon';
import Footer from '../../../../components/Footer/Footer';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
// import axios from 'axios';
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
        this.state = {
        	newsData: {}
        }
    }
    getNewsList(){
        let _this = this;
        Api.website.tpl1.news(this.props.match.params.name_id)
        .then((res)=>{
            _this.setState({ 
                newsData: res.data.content 
            });
        }).catch(function (res) {
        });
    }
    componentDidMount(){
    	this.getNewsList();
    }
    render() {
    	var data = this.state.newsData;
        var _data = {};
    	if(Object.keys(data).length > 0 && data.constructor === Object){
            _data = {
                banner: data.banners,
                list: data.news     
            }
    		return (
			    <div className="wrap w-news">
                    <div className="main">
                        <Carousel config={IndexHeadCarousel} bannerList={_data.banner} />
                        <NewsList newsList={_data.list} name={"/"+ this.props.match.params.name_id + "/website/" + this.props.match.params.item_id} /> 
                    </div>
                    <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website/" + this.props.match.params.item_id} />
                </div>
			);	
    	}else{
    		return (
    			<Empty content="暂无相关数据" />
    		)
    	}
	}
}




