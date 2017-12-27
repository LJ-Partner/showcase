import React, { Component } from 'react';
import Parser from 'html-react-parser';
import './Intro.less'
export default class Intro extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="about">
                <h2 className="about-tit">
                    <span>{this.props.detail.title}</span>
                </h2>
                <div className="about-cnt">
                    {Parser(this.props.detail.content)}
                </div>
            </div>    
        );
    }
}



