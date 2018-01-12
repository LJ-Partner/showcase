import React, { Component } from 'react';
import PullUp from '../pullup/Pullup';
import './ProductList.less';

export default class ProductList extends Component {
    constructor(props){
        super(props);
    }
    renderList(){
        if(this.props.list && this.props.list.length > 0){
            return (
                <div className="list-box">
                    <h2>
                        <span><em>—</em> {this.props.title} <em>—</em></span>
                    </h2>
                    <ul className="list">
                        {this.props.list.map((item,index) =>{
                            var _url;
                            if(this.props.name == 'ruien' || this.props.name == 'undefined'){
                                _url = 'javascript:;';
                            }else{
                                _url =  this.props.name+'/products/' + item.ProductMasterID + '/detail/'+ item.ID;   
                            }
                            return  <li key={index} className="list-item">
                                        <a href={_url}>
                                            <span>
                                                <img src={item.PictureURL} />    
                                            </span>
                                            <p>{item.ProductName}</p>
                                        </a>
                                    </li> 
                        })}   
                    </ul> 
                </div>
            )    
        }else{
            return (
                <div className="empty">暂无相关数据</div>
            )
        }
    }
    render() {
        return (
            <div className="list-w" ref="listW">
                {this.renderList()}  
                <PullUp content={this.props.pullUpTitle} />                       
            </div>    
        );
    }
}



