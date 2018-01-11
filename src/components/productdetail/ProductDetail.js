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
                        <span>{this.props.detailData.ProductName}</span>
                    </h2> 
                    <div className="detail-box-cnt">
                        <p>
                            <img src={this.props.detailData.PictureURL} /> 
                        </p>
                        <h2 className="detail-box-tit">
                            <span>产品介绍</span>
                        </h2>
                        <p>
                            {this.props.detailData.Details}
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



