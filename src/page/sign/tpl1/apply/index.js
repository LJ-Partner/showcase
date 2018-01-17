import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Api from '../../../../api/index';
import axios from 'axios';
let forms;
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getCardData : {},
			value:'',
			checked : true,
			SignerGender: '1',				//签到人性别 1.男，2.女
			SignID: ''						//签到ID
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			SignerGender: event.target.value	
		})
	}
	//签到相关信息
	signInfo(){
  		Api.sign.tpl1.signData(this.props.match.params.name_id)
  		.then((res) =>{
  			if(res.data.code && res.data.code == 200){  
  				this.setState({
  					SignID: res.data.content.signs.ID
  				})
  			}else{
  				console.log(res.data.msg)
  			}
  		})
  		.catch((res) => {
  			console.log(res)
  		})
	}
	componentDidMount() {	
		this.signInfo();
	}
	toApply(e){
		e.preventDefault();
		let id = this.props.match.params.name_id;
		let Signer = this.refs.Signer.value.trim();
		let SignerMobile = this.refs.SignerMobile.value.trim();
		let SignerCompany = this.refs.SignerCompany.value.trim();
		let SignerNumber = this.refs.SignerNumber.value.trim();
		let telReg = !!SignerMobile.match(/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
		forms= {
				SignID: this.state.SignID, 									//签到活动的id
				Signer: Signer,												//签到人姓名
				SignerMobile: SignerMobile,									//签到人电话
				SignerGender: this.state.SignerGender,						//签到人性别 1.男，2.女
				SignerCompany: SignerCompany,								//签到人公司名称
				SignerNumber:SignerNumber									//与会人数
			};
		if(Signer == "" || SignerMobile == "" || SignerCompany == "" || SignerNumber == ""){
			alert('请把相关信息填写完整')
			return false;
		}else if(telReg == false){
			alert('请输入正确的手机号');
			return false;	
		}else{
			Api.sign.tpl1.pushdata(id,forms)
			.then((res) =>{
				if(res.data.code && res.data.code == 200){
					alert('报名成功');
					//window.location.href = '/' + this.props.match.params.name_id + '/sign'
				}else{
					alert('您已经报过名了')
					this.refs.Signer.value = '';
					this.refs.SignerMobile.value = '';
					this.refs.SignerCompany.value = '';
					this.refs.SignerNumber.value = '';							
					this.state.SignerGender = '1';	
					//window.location.href = '/' + this.props.match.params.name_id + '/sign'
				}
			})
			.catch((res) =>{
				console.log(res)
			});
		}
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
							<input type="text" className="inp" name="SignerMobile" ref="SignerMobile" maxLength="11" />
						</div>
						<div className="item-box">
							<label>您的性别</label>
							<div className="radio-box">
								<input type="radio" id="sex_1"  value="1" name="sex" onChange={this.handleChange}  defaultChecked/> 男
								<input type="radio" id="sex_2"   value="2" name="sex"  onChange={this.handleChange} /> 女
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




