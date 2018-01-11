import React from 'react';
import PropTypes from 'prop-types';
import GoTop from '../../../../components/GoTop/GoTop';
import Carousel from '../../../../components/Carousel/Carousel';
import NewsDetail from '../../../../components/NewsDetail/NewsDetail';
import MenuIcon from '../../../../components/MenuIcon/MenuIcon';
import Footer from '../../../../components/Footer/Footer';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
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
        this.state = {
        	newsDetailData: {}
        }
    }
    getNewsDetail(){
        let _this = this;
        Api.website.tpl1.newsDetail(this.props.match.params.name_id,this.props.match.params.news_id)
        .then((res)=>{
            _this.setState({ 
                newsDetailData: res.data.content 
             });
        }).catch(function (res) {
        });
    }
    componentDidMount(){
        this.getNewsDetail();
    }
    render() {
        var data = this.state.newsDetailData;
        var _data = {};
        if(Object.keys(data).length > 0 && data.constructor === Object){
            _data = {
                banners: data.banners,
                detail: {
                    title: this.state.newsDetailData.news.Title,
                    content: this.state.newsDetailData.new_content.NewContent
                }
            }
            return (
                <div className="wrap">
                    <div className="main">
                        <Carousel config={IndexHeadCarousel} bannerList = {_data.banners} />  
                        <NewsDetail newsDetailData={_data.detail} />   
                    </div>
                    <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website/" + this.props.match.params.item_id} />
                </div>
            )
        }else{
            return (
                <Empty content="暂无相关数据" />
            )
        }
	}
}




