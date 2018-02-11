import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.less';
export default class DemoCarousel extends Component {
    static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className="footer">
            	<ul>
            		<li>
            			<a href={this.props.name} className={this.props.flag == 'home'?'active':''}>
            				<i className="iconfont icon-shouye"></i>
            				<p>首页</p>
            			</a>
            		</li>
            		<li>
            			<a href={this.props.name+'/about'} className={this.props.flag == 'about'?'active':''}>
            				<i className="iconfont icon-jianjie"></i>
            				<p>简介</p>
            			</a>
            		</li>
            		<li>
            			<a href={this.props.name+'/products'} className={this.props.flag == 'products'?'active':''}>
            				<i className="iconfont icon-chanpin1"></i>
            				<p>产品</p>
            			</a>
            		</li>
            		<li>
            			<a href={this.props.name+'/news'} className={this.props.flag == 'news'?'active':''}>
            				<i className="iconfont icon-zixun2"></i>
            				<p>资讯</p>
            			</a>
            		</li>
                    <li>
                        <a href={this.props.name+'/join'} className={this.props.flag == 'join'?'active':''}>
                            <i className="iconfont icon-zhaopin"></i>
                            <p>招聘</p>
                        </a>
                    </li>
            	</ul>	
            </footer>
        );
    }
}



