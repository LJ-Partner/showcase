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
                                <a href={'/'+ ''+ this.props.name + '/news/detail/'+ item.id}>
                                    <img src={item.thumb} /> 
                                    <div className="info">
                                        <h3>{item.title}</h3>
                                        <p>{item.des}{item.time}</p>
                                    </div>
                                </a>
                            </li>
                })}
            </ul>   
        );
    }
}




