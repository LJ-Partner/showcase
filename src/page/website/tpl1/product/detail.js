import React from 'react';
import PropTypes from 'prop-types';
import GoTop from '../../../../components/GoTop/GoTop';
import Carousel from '../../../../components/Carousel/Carousel';
import Support from '../../../../components/Support/Support';
import ProductsDetail from '../../../../components/ProductDetail/ProductDetail';
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
export default class proDetail extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            proDetailData: {},
            loading: true,
            emptyCnt: false
        }
    }
    getProductDetail(){
        let _this = this;
        Api.website.tpl1.productDetail(this.props.match.params.name_id,this.props.match.params.series_id,this.props.match.params.product_id)
        .then((res)=>{
            if(res.data.code && res.data.code == 200){
                _this.setState({ 
                    proDetailData: res.data.content,
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
        this.getProductDetail();
    }
    render() {
        var data = this.state.proDetailData;
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
                        <div className="wrap">
                            <div className="main">
                                <div className="main-cnt">
                                    <Carousel config={IndexHeadCarousel} bannerList={data.banners}/>    
                                    <ProductsDetail detailData={data.product[0]} />
                                </div>
                                <Support />
                            </div>
                            <Footer name={"/"+ this.props.match.params.name_id + "/website" } />
                        </div>
                    );    
                }    
            }else{
                return (
                    <div className="empty">暂无相关数据</div>
                )   
            }
        }
	}
}




