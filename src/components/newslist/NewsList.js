import React, { Component } from 'react';
import './NewsList.less'
export default class Intro extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="news-list">
                {this.props.newsList.map((item,index) => {
                    return  <li key={index} className="list-item">
                                <a href={this.props.name + '/news/detail/'+ item.ID}>
                                    <img src={item.Cover} /> 
                                    <div className="info">
                                        <h3>{item.Title}</h3>
                                        <p>{item.Abstract}</p>
                                    </div>
                                </a>
                            </li>
                })}    
            </ul>   
        );
    }
}




