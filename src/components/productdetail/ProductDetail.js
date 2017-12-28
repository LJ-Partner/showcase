import React, { Component } from 'react';
import Parser from 'html-react-parser';
import './ProductDetail.less';
export default class ProDetail extends React.Component{
    constructor(props) {
        super(props);
    }
    renderInfo(){
        return (
            <div className="pro-detail">
                <div className="pro-detail-box">
                    <h2 className="detail-box-tit">
                        <span>{this.props.detailData.title}</span>
                    </h2> 
                    <div className="detail-box-cnt">
                        <p>
                            <img src={this.props.detailData.pic} /> 
                        </p>
                        <h2 className="detail-box-tit">
                            <span>产品介绍</span>
                        </h2>
                        <p>
                            {this.props.detailData.des}
                        </p>
                    </div>   
                </div>
                <div className="pro-detail-box">
                    <h2 className="detail-box-tit">
                        <span>相应参数</span>
                    </h2> 
                    <div className="detail-box-cnt">
                        <p>
                            {this.props.detailData.params_pic.des}
                        </p>
                        <p>
                            <img src={this.props.detailData.params_pic.pic} />    
                        </p>
                    </div>   
                </div>
            </div>    
        ) 
    }
    render(){
        return(
            <div>{this.renderInfo()}</div>     
        );
    }
}



