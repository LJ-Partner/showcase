import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Status.less'; 
export default class Status extends Component {
    constructor(props){
        super(props)
    }
    list(){
        if(this.props.message.list.length > 0){
            if(this.props.message.list.length > 3){
                return (
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
                )     
            }else{
                return (
                    <ul className="status-list">
                        {(this.props.message.list).map((item,index) =>{
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
                )       
            }
        }
    }
    render() {
        return (
            <div className="status">
                {this.list()}  								
            </div>    
        );
    }
}



