import React, { Component } from 'react';
import Parser from 'html-react-parser';
import './PhilosophyDetail.less';
export default class PhilosophyDetail extends React.Component{
    constructor(props){
        super(props);       
    }
    render(){
        return(
            <div className="philosophy-detail">
                {this.props.detail.map((item,index) => {
                    return  <div key={index} className="detail-box">
                                <h2><em>{item.name}</em></h2>
                                {Parser(item.content)}
                            </div>
                })}
                
            </div>   
        );
    }
}



