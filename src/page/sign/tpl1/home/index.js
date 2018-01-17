import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Dialog from '../../../../components/Dialog/Dialog';
import Api from '../../../../api/index';
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: 1,
			SignID: '',
			signText: '',
			dialogConfig: {
			    dialogShow: false,
			    dialogCont: "",
			    dialogIsauto: true,
			    dialogLife: 3000,
			    dialogIsclosebtn: false
			}
		}

	}
	//签到相关信息
	signInfo(){
		let _this = this;
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
	toSign(e){
		e.preventDefault();
		let id = this.props.match.params.name_id;
		let mobile = this.refs.mobile.value.trim();
		let telReg = !!mobile.match(/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
		let forms= {
				SignID: this.state.SignID, 									//签到活动的id
				SignerMobile: mobile										//签到人电话
			};
		if(mobile == ""){
			//this.showDialog('手机号不能为空',true,2000,false); 
			// this.setState({
			// 	dialogConfig:{
			// 		dialogShow: true,
			// 		dialogCont: '手机号不能为空',
			// 		dialogIsauto: true,
			// 		dialogLife: 2000,
			// 		dialogIsclosebtn: false
			// 	}
			// })
			// console.log(this.state.dialogConfig)
			//console.log('手机号不能为空');
			alert('手机号不能为空');
			
		}else if( telReg == false){
			alert('请填写正确的手机号');
			return false;
		}else {
			Api.sign.tpl1.apply(id,forms)
			.then((res) =>{
				if(res.data.code && res.data.code == 200){ //200 未注册
					alert('请先去注册')
					window.location.href = '/' + this.props.match.params.name_id + '/sign/apply';
				}else{										//400 已经签到过了
					this.setState({
						show: 2,
						signText: '您已经签到过了'
					})	
				}
			})
			.catch((res) =>{
				console.log(res)
			});
		}
	}
	showDialog (cont,isauto,life,isclosebtn) {
		this.setState({
			dialog:{
				dialogShow: true,
				dialogCont: cont,
				dialogIsauto: isauto,
				dialogLife: life,
				dialogIsclosebtn: isclosebtn
			}
		})
    }
    closeDialog () {
    	this.setState({
    		dialogShow: false,
			dialogCont: '',
			dialogLife: 3000,	
    	})
    }
	componentDidMount() {	
		this.signInfo();
	}
	result(){
		if(this.state.show == 1){
			return (
				<form>
					<input type="text" placeholder="您的手机号" ref='mobile' maxLength="11" />
					<button className="btn-sign-in" type="button" onClick={this.toSign.bind(this)}>签到</button>
				</form>	
			)
		}else{
			return (
				<div className="sign-result">
					<div className="tips">
						<em>
							<img src={require('../../../../images/sign/tpl1/ico_sign_success.png')} />
						</em>
						<span>{this.state.signText}</span>
					</div>
					<p>感谢您位临2018年硅钢供需交流会，请与工作人员联系，我们会安排会务事宜，感谢您的支持！</p>
				</div>
			)	
		}
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
						{this.result()}
					</div>
				</div>
				<Dialog  dialog={this.state.dialogConfig} aa={this.state.dialogConfig.dialogShow}/>
			</div>
		)
	}
}




