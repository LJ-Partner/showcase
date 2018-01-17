import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Api from '../../../../api/index';
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getInvatationData: {}
		}
	}
	getInfo(){
		let _this = this;
  		Api.invitation.tpl1.home(this.props.match.params.name_id)
  		.then((res) =>{
  			_this.setState({ 
                getInvatationData: res.data.content
            });
  		})
  		.catch((error) => {
  			console.log(error)
  		})
	}
	componentDidMount() {
		this.getInfo();
	}
	render() {
		let _data = this.state.getInvatationData;
		console.log(_data.guest)
		if(Object.keys(_data).length > 0 && _data.constructor == Object){
			return (
			    <div className="invitation">
			    	<div className="page page1">
			    		<h1 className="logo">
			    			<span>
			    				<img src={_data.invitation.logo} />
			    			</span>
			    		</h1>
			    		<p className="slogan">
			    			<img src={require('../../../../images/invitation/tpl1/tpl1_invatation_slogan.png')} />	
			    		</p>
			    		<div className="info">
			    			<p>{_data.invitation.year}</p>	
			    			<em>{_data.invitation.theme}</em>
			    			<span>{_data.invitation.place}</span>
			    			<b>{_data.invitation.time}</b>
			    		</div>
			    		<div className="arrow">
							<span className="bounce"><img src={require('../../../../images/invitation/tpl1/tpl1_invatation_ico_up.png')}  className="arrow_pic" /></span>	
						</div>
			    	</div>
			    	<div className="page page2">
			    		<h2 className="page-title">
			    			【诚意邀请】	
			    		</h2>
			    		<div className="page-cnt">
			    			<span className="name">尊敬的先生/女士们:</span>
			    			<p className="intro">{_data.invitation.inviting}</p>	
			    			<p className="inscribe">
			    				<em>
			    					旺材新媒体	
			    				</em>
			    				<span>
			    					2017年1月12日	
			    				</span>	
			    			</p>	
			    		</div>
			    		<div className="arrow">
							<span className="bounce"><img src={require('../../../../images/invitation/tpl1/tpl1_invatation_ico_up.png')}  className="arrow_pic" /></span>	
						</div>			
			    	</div>
			    	<div className="page page3">
			    		<h2 className="page-title">
			    			【会议介绍】	
			    		</h2>
			    		<div className="page-cnt">
			    			<p className="intro">{_data.invitation.introduce}</p>	
	
			    		</div>
			    		<div className="arrow">
							<span className="bounce"><img src={require('../../../../images/invitation/tpl1/tpl1_invatation_ico_up.png')}  className="arrow_pic" /></span>	
						</div>	
			    	</div>
			    	<div className="page page4">
			    		<h2 className="page-title">
			    			【会议流程】	
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
				    			<div className="space-line"></div>	
			    			</div>
			    		</div>
			    		<div className="arrow">
							<span className="bounce"><img src={require('../../../../images/invitation/tpl1/tpl1_invatation_ico_up.png')}  className="arrow_pic" /></span>	
						</div>	
			    	</div>
			    	<div className="page page5">
			    		<h2 className="page-title">
			    			【特邀嘉宾】	
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
						    				</dd>
						    			</dl>
			    			})}	
			    		</div>
			    		<div className="arrow">
							<span className="bounce"><img src={require('../../../../images/invitation/tpl1/tpl1_invatation_ico_up.png')}  className="arrow_pic" /></span>	
						</div>	
			    	</div>
			    	<div className="page page6">
			    		<h2 className="page-title">
			    			【关注我们】	
			    		</h2>
			    		<div className="page-cnt">
			    			<p className="tips">{_data.invitation.follow_us}</p>	
			    			<dl className="ewm-box">
			    				<dt>
			    					<img src={_data.invitation.qr_code} />
			    				</dt>
			    				<dd>{_data.invitation.qr_code_des}</dd>
			    				<dd>更多精彩行业动态，敬请关注！</dd>
			    			</dl>
			    			<div className="attention-detail">
			    				<p>电话咨询：{_data.invitation.phone}</p>
			    				<p>会议地址：{_data.invitation.address}</p>
			    				<p>会议交通：{_data.invitation.traffic}</p>
			    			</div>
			    		</div>
			    		<div className="arrow">
							<span className="bounce"><img src={require('../../../../images/invitation/tpl1/tpl1_invatation_ico_up.png')}  className="arrow_pic" /></span>	
						</div>	
			    	</div>
				</div>
			);
		}else{
			return (
				<div className="aa">暂无相关数据</div>
			)
		}
		
	}
}




