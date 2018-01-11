import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Intro1.less';
const carouselConfig = {
    autoPlay: true,
    showArrows: true,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    onChange: function(){
    },
    onClickItem: function(){
    }
}
export default class Intro1 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="w">
                <div className="intro">
                    <h2 className="intro-tit">
                        企业简介
                    </h2>
                    <div className="intro-cnt">
                        <div className="intro-detail-w">
                            <div className="intro-groupon">
                                <div className="intro-box time">
                                    <h3>成立时间</h3>
                                    <p>
                                        <em>2011</em>
                                        <span>年</span>    
                                    </p> 
                                </div>
                                <div className="intro-box address">
                                    <h3>总部地址</h3>
                                    <p>中国.福建.宁德</p> 
                                </div>
                            </div> 
                            <div className="intro-box technology">
                                <h3>核心技术</h3>
                                <p>动力和储能电池领域，材料、电芯、电池系统、电池回收二次利用等全产业链研发及制造能力</p>
                            </div>    
                        </div>
                        <div className="intro-box business">
                            <h3>主营业务</h3>
                            <p>CATL专注于新能源汽车动力电池系统、储能系统的研发、生产和销售，致力于为全球新能源应用提供一流解决方案。</p>    
                        </div>
                    </div>
                </div>  
                <div className="history">
                    <h2>发展历程</h2>
                    <div className="history-cnt">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="journey">
                                        <h3>2017</h3>
                                        <p>相继在法国、美国、加拿大、日本成立分公司</p>
                                        <p>与上汽合资成立时代上汽动力电池有限公司</p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="journey">
                                        <h3>2016</h3>
                                        <p>成立“宁德时代新能源科技股份有限公司院士专家工作站”</p>
                                        <p>成立江苏时代新能源科技有限公司</p>
                                    </div>
                                </div>
                            </div>    
                        </div>    
                    </div>
                </div>
                <div className="global-layout">
                    <h2>全球布局</h2>
                    <div className="global-detail">
                        <p>CATL立足中国，布局全球</p>  
                        <p>致力于推动世界新能源改革进程</p>         
                    </div> 
                    <div className="tab">
                        <ul className="tab-tit">
                            <li><a href="javascript:;"><i></i><span>总部</span></a></li>
                            <li><a href="javascript:;"><i></i><span>工厂</span></a></li>
                            <li><a href="javascript:;"><i></i><span>办事处</span></a></li>
                            <li><a href="javascript:;"><i></i><span>研发中心</span></a></li>
                        </ul>
                        <div className="tab-cnt">
                            <img src={'../../src/images/ningde/global-layout-pic1.jpg'} className="on" />
                            <img src={'../../src/images/ningde/global-layout-pic1.jpg'} />
                            <img src={'../../src/images/ningde/global-layout-pic1.jpg'} />
                            <img src={'../../src/images/ningde/global-layout-pic1.jpg'} />
                        </div>
                    </div>   
                </div>
            </div>  
        );
    }
}



