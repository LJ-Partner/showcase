import React, { Component } from 'react';
import PullUp from '../pullup/Pullup';
import './JoinDetail.less';

export default class JoinDetail extends Component {
    constructor(props){
        super(props);
        console.log(this.props.JoinDetailData)
    }
    renderJoinDetail(){
        return (
            <div className="job-des">
                <div className="job-des-tit">
                    <em className="arrow-left"></em>
                    <p>加入我们</p>
                    <em className="arrow-right"></em>
                </div>
                <div className="job-des-cnt">
                    <div className="tit">
                        <h2>{this.props.JoinDetailData.Position}</h2>
                        <dl className="info">
                            <dt>
                                <em>{this.props.JoinDetailData.Pay}</em>
                                <span>{this.props.JoinDetailData.Site}</span>
                                <b>{this.props.JoinDetailData.Education}</b>
                            </dt>
                            <dd>
                                {this.props.JoinDetailData.date}
                            </dd>
                        </dl>
                    </div>
                    <dl className="des-item">
                        <dt>工作内容</dt>
                        <dd>
                            <pre>{this.props.JoinDetailData.Demand}</pre>
                        </dd>
                    </dl>   
                    <dl className="des-item">
                        <dt>联系Hr</dt>
                        <dd>
                            <pre>{this.props.JoinDetailData.ContactUs}</pre>
                        </dd>
                    </dl>    
                </div> 
            </div>
        );
    }
    render() {
        return (
            <div className="join-detail">
                {this.renderJoinDetail()}                        
            </div>    
        );
    }
}



