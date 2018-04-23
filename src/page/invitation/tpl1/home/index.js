import { Carousel } from 'react-responsive-carousel';
import Swiper  from 'react-id-swiper';
import React from 'react';
import ReactDOM from 'react-dom';
import Parser from 'html-react-parser';
import './index.less';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
let _data,palying=true;
const carouselConfig = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getInvatationData: {},
			loading: true,
			emptyCnt: false,
			stoped: false
		}
	}
	//点击音乐播放
	audioPlay(){
		if(palying==true){
			document.getElementById('audio').pause();
			document.addEventListener('WeixinJSBridgeReady',function(){
				WeixinJSBridge.invoke('getNetworkType',{},function(e){
					document.getElementById('audio').pause();
				});
			});
			palying=false;
			this.setState({
				stoped: true
			});
		}else if(palying==false){
			document.getElementById('audio').play();
			document.addEventListener('WeixinJSBridgeReady',function(){
				WeixinJSBridge.invoke('getNetworkType',{},function(e){
					document.getElementById('audio').play();
				});
			});
			palying=true;
			this.setState({
				stoped: false
			})
		}
	}
	//获取信息
	getInfo(){
		let _this = this;
  		Api.invitation.tpl1.home(this.props.match.params.name_id)
  		.then((res) =>{
  			if(res.data.code && res.data.code == 200){
	  			_this.setState({ 
	                getInvatationData: res.data.content,
	                loading: false
	            });	
  			}else{
  				_this.setState({
  					emptyCnt: true,
  					loading: false
  				})
  			}
  		})
  		.catch((error) => {
  			console.log(error)
  		})
	}
	//图片轮播
	carouselShow(){	
		let len = this.state.getInvatationData.invitation.img;
		if(len && len.length > 1){
			return (
				<Carousel {...carouselConfig} className="zoomIn">
                    {(this.state.getInvatationData.invitation.img).map((item,index) =>{
                        return  <a className="pic-box" key={index}>
									<span>
										<img src={item} />	
									</span>
								</a> 
                    })}         
                </Carousel>	
			)
		}else{
			return (
				<a className="pic-box  zoomIn">
					<span>
						<img src={this.state.getInvatationData.invitation.img} />	
					</span>
				</a> 	
			)
		}
	}
	renderInfo(){
		_data = this.state.getInvatationData;
		const params = {
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			paginationClickable: true,
			direction: 'vertical',
			loop: true 
		}
		if(this.state.loading){
            return (
                <div className="wrap">
                    <Loading /> 
                </div>
            )    
        }else{
        	if(!this.state.emptyCnt){
        		if(Object.keys(_data).length > 0 && _data.constructor == Object){
        			let imgShow = _data.invitation.ending_qr_code;
					return (
					    <Swiper {...params}>
					    	<div className="page page1">
					    		<div className="door-left fadeOutRight"></div>
					    		<div className="door-right fadeOutLeft"></div>
					    		<h1 className="logo">
					    			<span >
					    				<img src={_data.invitation.logo}  />
					    			</span>
					    		</h1>
					    		<p className="slogan">
					    			<img src={'https://p.maicai360.cn/img/get/20180211/11711636539459132983986_png'} className="zoomIn"/>	
					    		</p>
					    		<div className="info">
					    			<p>{_data.invitation.year}</p>	
					    			<em>{_data.invitation.theme}</em>
					    			<span>{_data.invitation.place}</span>
					    			<b>{_data.invitation.time}</b>
					    		</div>
					    		<div className="arrow">
									<span className="bounce"><img src={'https://p.maicai360.cn/img/get/20180211/46421636539459293438176_png'}  className="arrow_pic" /></span>	
								</div>
					    	</div>
					    	<div className="page page2">
					    		<div className="door-left fadeOutRight"></div>
					    		<div className="door-right fadeOutLeft"></div>
					    		<h2 className="page-title">
					    			{_data.invitation.inviting_title}	
					    		</h2>
					    		<div className="page-cnt">
					    			<span className="name">尊敬的先生/女士们:</span>
					    			<div className="intro">{Parser(_data.invitation.inviting)}</div>
					    		</div>
					    		<div className="arrow">
									<span className="bounce"><img src={'https://p.maicai360.cn/img/get/20180211/46421636539459293438176_png'}  className="arrow_pic" /></span>	
								</div>			
					    	</div>
					    	<div className="page page3">
					    		<div className="door-left fadeOutRight"></div>
					    		<div className="door-right fadeOutLeft"></div>
					    		<h2 className="page-title">
					    			{_data.invitation.introduce_title}	
					    		</h2>
					    		<div className="page-cnt">
					    			<div className="intro">{Parser(_data.invitation.introduce)}</div>	
									<div className="pic-box-w">
										{this.carouselShow()}
									</div>
					    		</div>
					    		<div className="arrow">
									<span className="bounce"><img src={'https://p.maicai360.cn/img/get/20180211/46421636539459293438176_png'}  className="arrow_pic" /></span>	
								</div>	
					    	</div>
					    	<div className="page page4">
					    		<div className="door-left fadeOutRight"></div>
					    		<div className="door-right fadeOutLeft"></div>
					    		<h2 className="page-title">
					    			{_data.invitation.process_title}	
					    		</h2>
					    		<div className="page-cnt">
					    			<div className="schedule-w">
					    				<ul className="schedule">
					    					{_data.process.map((item,index) => {
					    						return  <li key={index}>
									    					<span>{item.pointof_time}</span>
									    					<em>{item.pointof_content}</em>
									    				</li>
					    					})}
						    			</ul>
						    			<div className="space-line bounceInUp"></div>	
					    			</div>
					    		</div>
					    		<div className="arrow">
									<span className="bounce"><img src={'https://p.maicai360.cn/img/get/20180211/46421636539459293438176_png'}  className="arrow_pic" /></span>	
								</div>	
					    	</div>
					    	<div className="page page5">
					    		<div className="door-left fadeOutRight"></div>
					    		<div className="door-right fadeOutLeft"></div>
					    		<h2 className="page-title">
					    			{_data.invitation.guest_title}	
					    		</h2>
					    		<div className="page-cnt">
					    			{_data.guest.map((item,index) =>{
					    				return  <dl key={index} className="guest-box">
								    				<dt>
								    					<span><img src={item.picture_url} /></span>	
								    				</dt>
								    				<dd>
								    					<p>{item.guest_name}</p>
								    					<p>{item.guest_des}</p>
								    					{
											    			item.sub_title?(
												    			<p>{item.sub_title}</p>
													    		):('')
												    	}
								    				</dd>
								    			</dl>
					    			})}	
					    		</div>
					    		<div className="arrow">
									<span className="bounce"><img src={'https://p.maicai360.cn/img/get/20180211/46421636539459293438176_png'}  className="arrow_pic" /></span>	
								</div>	
					    	</div>
					    	<div className="page page6">
					    		<div className="door-left fadeOutRight"></div>
					    		<div className="door-right fadeOutLeft"></div>
					    		<h2 className="page-title">
					    			{_data.invitation.follow_us_title}	
					    		</h2>
					    		<div className="page-cnt">
					    			<div className="tips">{Parser(_data.invitation.follow_us)}</div>	
					    			<dl className="ewm-box">
					    				<dt className="rotateIn">
					    					<span ><img src={_data.invitation.qr_code} /></span>
					    				</dt>
					    				<dd className="fadeInUp">{_data.invitation.qr_code_des}</dd>
					    				<dd className="fadeInDown">更多精彩行业动态，敬请关注！</dd>
					    			</dl>
					    			<div className="attention-detail bounceInUp">
					    				<p><span>电话咨询：</span><a href={'tel:'+_data.invitation.phone}>{_data.invitation.phone}</a></p>
					    				<p><span>会议地址：</span><em>{_data.invitation.address}</em></p>
					    				<p><span>会议交通：</span><em>{_data.invitation.traffic}</em></p>
					    			</div>
					    		</div>
					    		<div className="arrow">
									<span className="bounce"><img src={'https://p.maicai360.cn/img/get/20180211/46421636539459293438176_png'}  className="arrow_pic" /></span>	
								</div>	
					    	</div>
					    	<div className="page page7">
					    		<div className="door-left fadeOutRight"></div>
					    		<div className="door-right fadeOutLeft"></div>
					    		<div className="page-ad">
						    		<a href="https://m.maicai360.cn" className="zoomIn">
						    			<h2>
							    			<span>
							    				<img src={'https://p.maicai360.cn/img/get/20180212/86422636540429781017378_png'} />		
							    			</span>
						    			</h2>
						    		</a>

						    		<div className="img-w zoomIn">
						    		{
						    			imgShow?(
							    			<span>
								    			<img src={_data.invitation.ending_qr_code} />
								    		</span>
								    		):('')
							    	}
							    		
						    		</div>
						    	</div>
					    		<div className="arrow">
									<span className="bounce"><img src={'https://p.maicai360.cn/img/get/20180211/46421636539459293438176_png'}  className="arrow_pic" /></span>	
								</div>	
					    	</div>
					    </Swiper>
					);
				}
        	}else{
        		return (
        			<div className="wrap">
	        			<Empty content = "内容为空" />
	        		</div>
        		)
        	}
        }
	}
	componentDidMount() {
		this.getInfo();
		document.getElementById('audio').play();
		//必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
		wx.config({
			debug: false,
			appId: '',
			timestamp: 1,
			nonceStr: '',
			signature: '',
			jsApiList: []
		});
		wx.ready(function() {
			document.getElementById('audio').play()
		});
		document.addEventListener('YixinJSBridgeReady', function() {
			play()
		}, false);
	}
	render() {
		return(
			<div className="invitation">
				{this.renderInfo()}	
				<div className={this.state.stoped?'music stoped':'music'}>
					<audio  className="audio" src="../../../../src/audio/audio.mp3" preload="auto" autoPlay="autoplay" id="audio" loop></audio>
					<div className="control">
						<div className="control-after" onClick={this.audioPlay.bind(this)}>
						</div>
					</div>
				</div>
			</div>
		)	
	}
}




