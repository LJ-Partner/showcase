import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/Carousel/Carousel';
import NewsList from '../../../../components/NewsList/NewsList';
import MenuIcon from '../../../../components/MenuIcon/MenuIcon';
import Footer from '../../../../components/Footer/Footer';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import PullUp from '../../../../components/pullup/Pullup';
import Api from '../../../../api/index';
const IndexHeadCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
const flag = 'news';
var page = 1;
var isMore =true;//判断是否有更多数据 
var isfinish=true;//isfinish判断每次数据是否加载完成，完成了才可进行下一次加载
export default class Products extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
        	newsData: {},
            loading: true,
            emptyCnt: false,
            page: page,
            list: [],
            pullUpTitle: '没有更多数据了哦'
        }
    }
    handleScroll(e){
        if(isMore && isfinish){
            let clientHeight = this.refs.bodyBox.clientHeight; //可视区域高度
            let scrollTop  = this.refs.bodyBox.scrollTop;  //滚动条滚动高度
            let scrollHeight = this.refs.bodyBox.scrollHeight; //滚动内容高度
            if((clientHeight+scrollTop)>=(scrollHeight) - 10){ 
                isfinish = false;
                this.state.page++;
                this.setState({pullUpTitle: '玩命加载中...'});
                this.getNewsList(this.state.page);
            }     
        }
    }
    getNewsList(page){
        let _this = this;
        Api.website.tpl1.news(this.props.match.params.name_id,page)
        .then((res)=>{
            if(res.data.code && res.data.code == 200){
                if(res.data.content.news && res.data.content.news.length > 0){
                    if(page == 1){
                        this.setState({list: res.data.content.news})
                    }else{
                        this.setState({list: this.state.list.concat(res.data.content.news)})    
                    }
                    _this.setState({ 
                        newsData: res.data.content,
                        loading: false 
                    });
                    isfinish = true; 
                }else{
                    isMore=false;
                    this.setState({pullUpTitle: '没有更多数据了哦'});
                }
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
    	this.getNewsList(page);
    }
    renderDataList(){
        var data = this.state.newsData;
        var _list = this.state.list;
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
                        <div>
                            <Carousel config={IndexHeadCarousel} bannerList={_data.banner} />
                            <NewsList  newsList={_list} name={"/"+ this.props.match.params.name_id + "/website"} /> 
                            <PullUp content={this.state.pullUpTitle} />   
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
    render() {
        return (
            <div className="wrap w-news">
                <div className="main" onScroll={this.handleScroll.bind(this)} ref="bodyBox" >
                    {this.renderDataList()}
                </div>
                <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website" } />
            </div>
        )    	
	}
}




