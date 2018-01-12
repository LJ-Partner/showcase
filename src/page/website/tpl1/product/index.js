import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/Carousel/Carousel';
import ProductList from '../../../../components/ProductList/ProductList';
import Produce from '../../../../components/Produce/Produce';
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
const flag = 'products';
var page = 1;
var isMore =true;//判断是否有更多数据 
//onScroll={this.handleScroll.bind(this)}
var isfinish=true;//isfinish判断每次数据是否加载完成，完成了才可进行下一次加载
export default class Products extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
        	productData : {},
            title: '',
            loading: true,
            emptyCnt: false,
            page: page,
            list :[],
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
                this.getProductList(this.state.page);
            }     
        }
    }
    getProductList(page){
        let _this = this;
        if(this.props.match.params.series_id === undefined ){
            Api.website.tpl1.AllProduct(this.props.match.params.name_id,page)
            .then((res)=>{
                if(res.data.code && res.data.code == 200){
                    if(res.data.content.product && res.data.content.product.length > 0){
                        if(page == 1){
                            this.setState({list: res.data.content.product})
                        }else{
                            this.setState({list: this.state.list.concat(res.data.content.product)})    
                        }
                        _this.setState({ 
                            productData: res.data.content,
                            title: '全部',
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
        }else{
            Api.website.tpl1.SeriesProduct(this.props.match.params.name_id,this.props.match.params.series_id,page)
            .then((res)=>{
                if(res.data.code && res.data.code == 200){
                    if(res.data.content.product && res.data.content.product.length > 0){
                        if(page == 1){
                            this.setState({list: res.data.content.product})
                        }else{
                            this.setState({list: this.state.list.concat(res.data.content.product)})    
                        }
                    }else{
                        isMore=false;
                        this.setState({pullUpTitle: '没有更多数据了哦'});    
                    }
                    _this.setState({ 
                        productData: res.data.content,
                        title: res.data.content.series_name,
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
    }
    renderDataList(){
        let data = this.state.productData;
        let _list =  this.state.list;
        let _title = this.state.title;
        console.log(_list)
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
                                <Carousel config={IndexHeadCarousel} bannerList={data.banners}/>
                                <ProductList list={_list} pullUpTitle={this.state.pullUpTitle} title={_title} id={this.props.match.params.name_id} name = {"/"+ this.props.match.params.name_id + "/website"}/>      
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
    componentDidMount(){
    	this.getProductList(page);	
    }
    render() {
        return(
            <div className="wrap w-product">
                <div className="main" onScroll={this.handleScroll.bind(this)} ref="bodyBox"> 
                    {this.renderDataList()}
                </div>
                <Footer flag={flag} name={'/' + this.props.match.params.name_id+'/website'} />     
            </div>
        )    
	}
}




