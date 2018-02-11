import React, { Component } from 'react';
import PullUp from '../pullup/Pullup';
import './JoinList.less';

export default class JoinList extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    renderList(){
        return (
            <div className="list-box">
                <h2>
                    <span><em>—</em> 加入我们 <em>—</em></span>
                </h2>
                <ul className="list-cnt">
                    {this.props.list.map((item,index) => {
                        return (
                            <li key={index} className="item">
                                <a href={this.props.name + '/join/detail/'+ item.ID}>
                                    <dl className="item-detail">
                                        <dt>
                                            <h3>{item.Position}</h3>
                                        </dt>
                                        <dd>{item.Pay}</dd>
                                    </dl>
                                    <p className="item-info">
                                        <em>{item.date}</em>
                                        <span>{item.Site}</span>
                                        <b>{item.Education}</b>    
                                    </p>
                                    <p className="item-des">{item.Demand}</p>
                                </a>
                            </li>      
                        )
                    })} 
                </ul> 
            </div>
        );
    }
    render() {
        return (
            <div className="join-list" ref="listW">
                {this.renderList()}                        
            </div>    
        );
    }
}



