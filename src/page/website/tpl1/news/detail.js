import React from 'react';
import PropTypes from 'prop-types';
import GoTop from '../../../../components/GoTop/GoTop';
import Carousel from '../../../../components/Carousel/Carousel';
import NewsDetail from '../../../../components/NewsDetail/NewsDetail';
import Support from '../../../../components/Support/Support';
import MenuIcon from '../../../../components/MenuIcon/MenuIcon';
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
const flag = 'news';
export default class Detail extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
        	newsDetailData: {},
            loading: true,
            emptyCnt: false
        }
    }
    getNewsDetail(){
        let _this = this;
        Api.website.tpl1.newsDetail(this.props.match.params.name_id,this.props.match.params.news_id)
        .then((res)=>{
            if(res.data.code && res.data.code == 200){
                _this.setState({ 
                    newsDetailData: res.data.content,
                    loading: false
                });
            }else{
                _this.setState({ 
                    loading: false,
                    emptyCnt: true
                });    
            }
        }).catch((res) =>{
            console.log(res)
        });
    }
    componentDidMount(){
        this.getNewsDetail();
    }
    render() {
        var data = this.state.newsDetailData;
        var _data = {};
        if(this.state.loading){
            return (
                <div className="wrap">
                    <Loading /> 
                </div>
            )  
        }else{
            if(!this.state.emptyCnt){
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
                                <div className="main-cnt">
                                    <Carousel config={IndexHeadCarousel} bannerList = {_data.banners} />  
                                    <NewsDetail newsDetailData={_data.detail} />   
                                </div>
                                <Support /> 
                            </div>
                            <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website" } />
                        </div>
                    )
                }    
            }else{
                return (
                    <Empty content="暂无相关数据" />
                )    
            }
        }
	}
}




