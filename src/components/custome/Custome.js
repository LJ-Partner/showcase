import React, { Component } from 'react';
import Contact from '../../components/Contact/Contact';
import './Custome.less'
export default class Custome extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
	}
	handleChange(){
		this.setState(prevState => ({
            show: true
        })) 
	}
	contactClose(){
		this.setState(prevState => ({
			show: false
		}))
	}
    componentWillUnmount(){  
        this.setState = (state,callback)=>{
        	return;
        };  
    }
    render(){
        return(
        	<div>
        		<div className={this.state.show?"contact-w fade-show":"contact-w fade-hide"}>
        			<div className="contact-box">
	                    <div className="contact-box-tit">
	                        <h2>
	                            <em>联系我们</em>
	                            <p>
	                                <span>CONTACT US</span>
	                                <img src={require('../../images/contact_service_img.png')} />
	                            </p>
	                        </h2>            
	                    </div>
	                    <div className="contact-box-cnt">
	                        <dl>
	                            <dt>
	                                <img src={require('../../images/qrcode.png')} />
	                            </dt>
	                            <dd>打开微信扫一扫</dd>
	                        </dl>
	                        <ul className="info">
	                            <li>联系人：王经理</li>
	                            <li>电话: <a href="tel:0513-88783291">0513-88783291</a></li>
	                            <li>邮箱: <a href="mailto:ryanjs@126.com">ryanjs@126.com</a></li>
	                            <li>QQ: 2913601790</li>
	                            <li>地址：江苏海安黄海大道西229号</li>
	                        </ul>
	                        <span onClick={this.contactClose.bind(this)} className="btn-cancel">取消</span>
	                    </div>    
		            </div>	
        		</div>
        		
	        	<div className="custome-w">
	        		<p className="ico-contact" onClick={this.handleChange.bind(this)}>
	        			<i className="iconfont icon-lianxiwomen"></i>			
	        		</p>
	        		<a href="tel:0513-88783291">
	        			<i className="iconfont icon-hdianhua"></i>			
	        		</a>
	        	</div>
	        </div>     
        );
    }
}



