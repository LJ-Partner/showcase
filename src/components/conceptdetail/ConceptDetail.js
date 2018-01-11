import React, { Component } from 'react';
import Parser from 'html-react-parser';
import './ConceptDetail.less';
export default class ConceptDetail extends React.Component{
    constructor(props){
        super(props);      
    }
    render(){
        return(
            <div className="philosophy-detail">
                <div className="detail-box">
                    <h2><em>管理和经营理念</em></h2>
                    <div>{this.props.detail}</div>
                </div>
                
            </div>   
        );
    }
}



