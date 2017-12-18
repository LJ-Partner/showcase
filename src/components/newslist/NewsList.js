import React, { Component } from 'react';
import './NewsList.less'
export default class Intro extends React.Component{
    render(){
        return(
            <ul className="news-list">
                <li className="list-item">
                    <a href="/#/news/detail/1">
                        <img src={require('../../images/s_01.jpg')} /> 
                        <div className="info">
                            <h3>热烈庆祝瑞恩电气2017年年中营销工作会议隆重召开</h3>
                            <p>骄阳似火的七月，阻止不了瑞恩人从全国各地汇聚海安。[2017-11-08]</p>
                        </div>
                    </a>
                </li>
                <li className="list-item">
                    <a href="/#/news/detail/2">
                        <img src={require('../../images/banner1.png')} /> 
                        <div className="info">
                            <h3>江苏瑞恩电气股份有限公司变压器生产项目 环境影响评价公众意见调查第一次公示</h3>
                            <p>按照《环境影响评价公众参与暂行办法》（环发2006【号】）、《建设项目环境影响评价技术导则总纲（HJ2.1 2016）》等文件的有关规定，江苏瑞恩电气股份有限公司将变压器生产项目进行网上公示，欢迎公众提出看法和意见。[2017-11-20]</p>
                        </div>
                    </a>
                </li>
                <li className="list-item">
                    <a href="/#/news/detail/3">
                        <img src={require('../../images/banner3.png')} /> 
                        <div className="info">
                            <h3>瑞恩电气通过国家安全标准化示范企业检查验收</h3>
                            <p>近日，瑞恩电气接受国家安全标准化示范企业评审专家检查，并通过验收。江苏瑞恩电气股份有限公司坚持“安全第一，预防为主，综合治理，全员参与”的安全生产方针，全面落实安全生产责任制，加强…[2017-11-20]</p>
                        </div>
                    </a>
                </li>
            </ul>   
        );
    }
}



