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
            emptyCnt: false
        }
    }
    init(){
        window.addEventListener('scroll',(e)=>{
            console.log(e)
        });     
    }
    getProductList(){
        let _this = this;
        if(this.props.match.params.series_id === undefined ){
            Api.website.tpl1.AllProduct(this.props.match.params.name_id,1)
            .then((res)=>{
                if(res.data.code && res.data.code == 200){
                    _this.setState({ 
                        productData: res.data.content,
                        title: '全部',
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
        }else{
            Api.website.tpl1.SeriesProduct(this.props.match.params.name_id,this.props.match.params.series_id,1)
            .then((res)=>{
                if(res.data.cod && res.data.code == 200){
                    _this.setState({ 
                        productData: res.data.content,
                        title: res.data.content.series_name,
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
    }
    componentDidMount(){
        this.init();
    	this.getProductList();	
    }
    render() {
        let data = this.state.productData;
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
                        <div className="wrap w-product">
                            <div className="main">
                                <div className="products">
                                    <Carousel config={IndexHeadCarousel} bannerList={data.banners}/>
                                    <ProductList list={data.product} title={_title} id={this.props.match.params.name_id} name = {"/"+ this.props.match.params.name_id + "/website"}/>      
                                </div>  
                            </div>
                            <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website" } />
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
}




