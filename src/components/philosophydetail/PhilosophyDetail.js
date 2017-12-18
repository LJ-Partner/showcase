import React, { Component } from 'react';
import './PhilosophyDetail.less';
export default class PhilosophyDetail extends React.Component{
    render(){
        return(
            <div className="philosophy-detail">
                <div className="detail-box">
                    <h2><span>管理方针</span></h2>
                    <p>瑞恩股份深谙企业生存与发展的经济规律，在把握规律的基础上，以开拓创新、务实进取的精神、准确的市场定位、超越的创新突破、健全的现代化管理制度为拓展灵魂，积极引入现代企业的管理理念和技术人才，逐渐形成了特殊的经营模式。</p>
                </div>
                <div className="detail-box">
                    <h2><span>经营理念</span></h2>
                    <p>科技领先、质量至上、品牌经营、创新发展</p>
                </div>
                <div className="detail-box">
                    <h2><span>服务理念</span></h2>
                    <p>诚信、责任、追求瑞恩股份从创业至今，每一步无不体现着企业的坚定信念。我们深知，企业的真正社会价值在于通过制造产品，专业服务社会而获得。为此，我们寄望于每一件瑞恩产品都能代表我们的愿望，用精湛的技术、优异的品质、完善的服务来体现企业理念，为营造和谐、健康、环保的地球家园而贡献自己的力量。让世界看好中国、让世界相信瑞恩，瑞恩将遵循“诚信敬业、精品制胜”的品牌理念，向新一轮目标奋进！</p>
                </div>
            </div>   
        );
    }
}



