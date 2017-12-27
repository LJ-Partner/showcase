import React, { Component } from 'react';
import Parser from 'html-react-parser';
import './NewsDetail.less';

export default class NewsDetail extends React.Component{
    constructor(props) {
        super(props);
    }
    renderInfo(){
        return (
            <div className="detail">
                <div className="detail-header">
                    <h3>{this.props.newsDetailData.title}</h3>
                    <span>浏览次数：{this.props.newsDetailData.watch_num} 发布时间：{this.props.newsDetailData.time}</span>
                </div>
                <div className="detail-cnt">
                    {Parser(this.props.newsDetailData.content)}    
                </div>  
            </div>
        );
    }
    render(){
        return(
            <div>{this.renderInfo()}</div>     
        );
    }
}



