import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/Carousel/Carousel';
import NewsList from '../../../../components/NewsList/NewsList';
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
export default class Products extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
        	newsData: {},
            loading: true,
            emptyCnt: false
        }
    }
    getNewsList(){
        let _this = this;
        Api.website.tpl1.news(this.props.match.params.name_id)
        .then((res)=>{
            if(res.data.code && res.data.code == 200){
                _this.setState({ 
                    newsData: res.data.content,
                    loading: false 
                });    
            }else{
                _this.setState({ 
                    emptyCnt: true,
                    loading: false 
                });
            }
        }).catch((res) =>{
            console.log(res)
        });
    }
    componentDidMount(){
    	this.getNewsList();
    }
    render() {
    	var data = this.state.newsData;
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
                        banner: data.banners,
                        list: data.news     
                    }
                    return (
                        <div className="wrap w-news">
                            <div className="main">
                                <Carousel config={IndexHeadCarousel} bannerList={_data.banner} />
                                <NewsList newsList={_data.list} name={"/"+ this.props.match.params.name_id + "/website"} /> 
                            </div>
                            <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website" } />
                        </div>
                    );  
                }    
            }else{
                return (
                    <Empty content="暂无相关数据" />
                )    
            }
        }
	}
}




