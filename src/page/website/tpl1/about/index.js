import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/Carousel/Carousel';
import Intro from '../../../../components/Intro/Intro';
import Support from '../../../../components/Support/Support';
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
const flag = 'about';
export default class About extends React.Component {
    static propTypes={
        flag:PropTypes.string
    }
    constructor(props){
        super(props)
        this.state = {
            aboutData: {},
            loading: true,
            emptyCnt: false
        }
    }
    getAboutData(){
        let _this = this;
        Api.website.tpl1.about(this.props.match.params.name_id)
        .then((res)=>{
            if(res.data.code && res.data.code == 200){
                _this.setState({ 
                    aboutData: res.data.content,
                    loading: false 
                });    
            }else{
                _this.setState({
                    loading: false,
                    emptyCnt: true
                })
            }
        }).catch(function (res) {
        });     
    }
    componentDidMount(){
        this.getAboutData();    
    }
    render() {
        var data = this.state.aboutData;
        if(this.state.loading){
            return (
                <div className="wrap">
                    <Loading /> 
                </div>
            )    
        }else{
            if(!this.state.emptyCnt){
                if(Object.keys(data).length > 0 && data.constructor === Object){
                    return(
                        <div className="wrap w-about">
                            <div className="main">
                                <div className="main-cnt-w">
                                    <div className="main-cnt">
                                        <Carousel config={IndexHeadCarousel} bannerList={data.banners}/>
                                        <Intro detail={data.introduce} />   
                                    </div>
                                    <Support /> 
                                </div>    
                            </div>
                            <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website" } />
                        </div>
                    )    
                }    
            }else{
                return (
                    <div className="wrap">
                        <Empty content = "内容为空" />} 
                    </div>
                )
            }    
        }
    }
}




