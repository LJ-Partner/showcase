import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Status.less';

export default class Status extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="status">
                <ul className="status-list">
                    {this.props.message.map((item,index) =>{
                        return  <li key={index} className="list-item">
                                    <a href={'/'+this.props.name+'/news/detail/'+item.id}>
                                        <span><img src={item.thumb} /></span>  
                                        <div className="item-info">
                                            <p>{item.title}</p>    
                                            <i>{item.time}</i>     
                                        </div>
                                    </a>   
                                </li>
                    })}
                </ul>								
            </div>    
        );
    }
}



