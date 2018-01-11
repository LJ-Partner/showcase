import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Status.less';
// <i>{item.time}</i>     
export default class Status extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="status">
                <ul className="status-list">
                    {(this.props.message.list.slice(0,3)).map((item,index) =>{
                        return  <li key={index} className="list-item">
                                    <a href={this.props.name+'/news/detail/'+item.ID}>
                                        <span><img src={item.Cover} /></span>  
                                        <div className="item-info">
                                            <p>{item.Abstract}</p>    
                                            
                                        </div>
                                    </a>   
                                </li>
                    })}
                </ul>								
            </div>    
        );
    }
}



