import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/Carousel/Carousel';
import Support from '../../../../components/Support/Support';
import JoinList from '../../../../components/JoinList/JoinList';
import MenuIcon from '../../../../components/MenuIcon/MenuIcon';
import PullUp from '../../../../components/pullup/Pullup';
import Footer from '../../../../components/Footer/Footer';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
const JoinConfigCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
const flag = 'join';
var page = 1;
var isMore =true;//判断是否有更多数据 
var isfinish=true;//isfinish判断每次数据是否加载完成，完成了才可进行下一次加载
export default class Join extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
        	jobData : {},
            loading: true,
            emptyCnt: false,
            page: page,
            list :[],
            pullUpTitle: '没有更多数据了哦',
            data:{
                banners:['https://p.maicai360.cn/img/get/20180129/36502636528314931782964_png','https://p.maicai360.cn/img/get/20180129/36502636528314931782964_png']
            }
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
                this.getJobList(this.state.page);
            }     
        }
    }
    getJobList(page){
        let _this = this;
        Api.website.tpl1.jobs(this.props.match.params.name_id,page)
        .then((res)=>{
            if(res.data.code && res.data.code == 200){
                if(res.data.content.jobs && res.data.content.jobs.length > 0){
                    if(page == 1){
                        this.setState({list: res.data.content.jobs})
                    }else{
                        this.setState({list: this.state.list.concat(res.data.content.jobs)})    
                    }
                }else{
                    isMore=false;
                    this.setState({pullUpTitle: '没有更多数据了哦'});    
                }
                _this.setState({ 
                    jobData: res.data.content,
                    loading: false 
                });
                isfinish = true;
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
        this.getJobList(page);
    }
    renderDataList(){
        let data = this.state.jobData;
        let _list =  this.state.list;
        let _title = this.state.title;
        if(this.state.loading){
            return (
                <div className="wrap">
                    <Loading /> 
                </div>    
            )
        }else{
            if(!this.state.emptyCnt){
                if(Object.keys(data).length > 0 && data.constructor === Object){
                    return (
                            <div className="products">
                                <Carousel config={JoinConfigCarousel} bannerList={data.banners}/>
                                <JoinList list={_list} pullUpTitle={this.state.pullUpTitle} id={this.props.match.params.name_id} name = {"/"+ this.props.match.params.name_id + "/website"} />  
                            </div> 
                    )  
                }
            }else{
                return (
                    <Empty content = "暂无相关数据" />
                )
            }
        }    
    }
    render() {
        return(
            <div className="wrap w-join">
                <div className="main" onScroll={this.handleScroll.bind(this)} ref="bodyBox">
                    {this.renderDataList()}
                    <PullUp content={this.state.pullUpTitle}   /> 
                    <Support />   
                </div>
                <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website" } />
            </div>
        )    
	}
}




