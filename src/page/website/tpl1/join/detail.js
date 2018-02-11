import React from 'react';
import PropTypes from 'prop-types';
import GoTop from '../../../../components/GoTop/GoTop';
import Carousel from '../../../../components/Carousel/Carousel';
import JoinDetail from '../../../../components/JoinDetail/JoinDetail';
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
            jobDetailData: {},
            loading: true,
            emptyCnt: false,
            data:{
                banners:['https://p.maicai360.cn/img/get/20180129/36502636528314931782964_png','https://p.maicai360.cn/img/get/20180129/36502636528314931782964_png']
            }
        }
    }
    getJobsDetail(){
        let _this = this;
        Api.website.tpl1.jobsDetail(this.props.match.params.name_id,this.props.match.params.job_id)
        .then((res)=>{
            if(res.data.code && res.data.code == 200){
                _this.setState({ 
                    jobDetailData: res.data.content,
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
        this.getJobsDetail();
    }
    render() {
        var data = this.state.jobDetailData;
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
                                <Carousel config={IndexHeadCarousel} bannerList={data.banners}/>
                                <div className="detail-line"></div>
                                <JoinDetail JoinDetailData={data.job} />  
                            </div>
                            <Footer name={"/"+ this.props.match.params.name_id + "/website" } />
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




