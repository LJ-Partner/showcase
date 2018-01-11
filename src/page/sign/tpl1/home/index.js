import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Api from '../../../../api/index';
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getCardData : {}
		}
	}
	getCardInfo(){
		
	}
	componentDidMount() {
		this.getCardInfo();		
	}
	render() {
		return (
			<div className="sign">
				<div className="sign-header">
					<h1 className="logo">
						<img src={require('../../../../images/sign/tpl1/sign_logo.png')} />
					</h1>
					<div className="slogan-w">
						<p>2018年硅钢供需交流会议登记</p>
						<img src={require('../../../../images/sign/tpl1/sign_slogan.png')} />
					</div>	
				</div>
				<div className="sign-content">
					<div className="sign-box">
						<form>
							<input type="text" placeholder="您的手机号" />
							<button className="btn-sign-in" type="button">签到</button>
						</form>
						<div className="sign-result">
							<div className="tips">
								<em>
									<img src={require('../../../../images/sign/tpl1/ico_sign_success.png')} />
								</em>
								<span>签到成功</span>
							</div>
							<p>感谢您位临2018年硅钢供需交流会，请与工作人员联系，我们会安排会务事宜，感谢您的支持！</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}




