import React, { Component } from 'react';
import './ProductList.less';

export default class ProductList extends Component {
    constructor(props){
        super(props);
    }
    renderList(){
        return (
            <div className="list-box">
                <h2>
                    <span><em>—</em> {this.props.list.name} <em>—</em></span>
                </h2>
                <ul className="list">
                    {this.props.list.list.map((item,index) =>{
                        var _url;
                        if(this.props.name == 'ruien' || this.props.name == 'undefined'){
                            _url = 'javascript:;';
                        }else{
                            _url =  '/'+this.props.name+'/products/detail/'+ item.id;   
                        }
                        return  <li key={index} className="list-item">
                                    <a href={_url}>
                                        <span>
                                            <img src={item.pic_url} />    
                                        </span>
                                        <p>{item.name}</p>
                                    </a>
                                </li> 
                    })}   
                </ul> 
            </div>
        )
    }
    render() {
        return (
            <div className="list-w">
                {this.renderList()}                             
            </div>    
        );
    }
}



