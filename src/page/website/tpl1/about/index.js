import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/Carousel/Carousel';
import Intro from '../../../../components/Intro/Intro';
import Footer from '../../../../components/Footer/Footer';
import axios from 'axios';
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
            aboutData: {}
        }
    }
    getAboutData(){
        let _this = this;
        Api.website.tpl1.about(11)
        .then((res)=>{
            _this.setState({ 
                aboutData: res.data.content 
             });
        }).catch(function (res) {
        });     
    }
    componentDidMount(){
        this.getAboutData();    
    }
    render() {
        var data = this.state.aboutData;
        if(Object.keys(data).length > 0 && data.constructor === Object){
            return(
                <div className="wrap w-about">
                    <div className="main">
                        <Carousel config={IndexHeadCarousel} bannerList={data.banners}/>
                        <Intro detail={data.introduce} />
                    </div>
                    <Footer flag = {flag} name={"/"+ this.props.match.params.name_id + "/website/" + this.props.match.params.item_id} />
                </div>
            )    
        }else{
            return (
                <div className="empty">暂无相关页面</div>
            )
        }
    }
}




