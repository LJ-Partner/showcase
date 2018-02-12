import React, { Component } from 'react';
import ReactHtmlParser from 'html-react-parser';
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
                </div>
                <div className="detail-cnt">
                    {ReactHtmlParser(this.props.newsDetailData.content)}
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



