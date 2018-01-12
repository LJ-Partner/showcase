import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Api from '../../../../api/index';
import axios from 'axios';
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getCardData : {},
			value:'',
			checked : true,
			params: {
				Signer: '',					//签到人姓名
				SignerMobile: '',			//签到人电话	
				SignerGender: '1',			//签到人性别 1.男，2.女
				SignerCompany: '',			//签到人公司名称
				SignerNumber: ''			//与会人数
			}
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			params:{
				SignerGender: event.target.value	
			}
		})
	}
	getCardInfo(){
		
	}
	componentDidMount() {
		this.getCardInfo();		
	}
	toApply(e){
		e.preventDefault();
		var id = this.props.match.params.name_id;
		var Signer = this.refs.Signer.value.trim();
		var SignerMobile = this.refs.SignerMobile.value.trim();
		var SignerCompany = this.refs.SignerCompany.value.trim();
		var SignerNumber = this.refs.SignerNumber.value.trim();
		var params = {};
		if(!Signer || !SignerMobile || SignerCompany || !SignerNumber){
			return;
		}
		
		axios.post('http://192.168.0.103:1024/Api/V1/'+id+'/signs/signin',{
			SignID: this.props.match.params.sign_id, 					//签到活动的id
			Signer: Signer,												//签到人姓名
			SignerMobile: SignerMobile,									//签到人电话
			SignerGender: this.state.params.SignerGender,				//签到人性别 1.男，2.女
			SignerCompany: SignerCompany,											//签到人公司名称
			SignerNumber:SignerNumber												//与会人数
		});
	}
	render() {
		return (
			<div className="apply">
				<div className="apply-header">
					<h1 className="logo">
						<img src={require('../../../../images/sign/tpl1/sign_logo.png')} />
					</h1>
					<div className="slogan-w">
						<p>2018年硅钢供需交流会议登记</p>
						<img src={require('../../../../images/sign/tpl1/sign_slogan.png')} />
					</div>	
				</div>
				<div className="apply-content">
					<p className="tips">
						您好,欢迎您位临2018年硅钢供需交流会，请填写您的相关信息，我们将尽快安排会务人员与您取得联系，并未您安排会议的相关服务。	
					</p>
					<form className="form-box">
						<div className="item-box">
							<label>您的姓名</label>
							<input type="text" className="inp" name="Signer" ref="Signer" />
						</div>
						<div className="item-box">
							<label>您的手机号</label>
							<input type="text" className="inp" name="SignerMobile" ref="SignerMobile" />
						</div>
						<div className="item-box">
							<label>您的性别</label>
							<div className="radio-box">
								<input type="radio" id="sex_0"  value="1" name="sex" onChange={this.handleChange.bind(this)}  defaultChecked/> 男
								<input type="radio" id="sex_1"  value="2" name="sex"  onChange={this.handleChange.bind(this)} /> 女
							</div>
						</div>
						<div className="item-box">
							<label>您的公司</label>
							<input type="text" className="inp" name="SignerCompany" ref="SignerCompany" />
						</div>
						<div className="item-box">
							<label>与会人数</label>
							<input type="text" className="inp" name="SignerNumber"  ref="SignerNumber" />
						</div>
						<button type="button" className="btn-enter" onClick={this.toApply.bind(this)}>确定</button>
					</form>
				</div>	
			</div>
		)
	}
}




