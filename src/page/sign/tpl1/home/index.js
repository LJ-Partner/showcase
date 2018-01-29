import React from 'react';
import Toast from 'react-toast-mobile';
import {T} from 'react-toast-mobile';
import ReactDOM from 'react-dom';
import './index.less';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
let storage = window.localStorage;
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			show: 1,
			SignID: '',
			signText: '签到成功',
			loading: true,
			emptyCnt: false,
			data:''
		}

	}
	//签到相关信息
	signInfo(){
		let _this = this;
  		Api.sign.tpl1.signData(this.props.match.params.name_id)
  		.then((res) =>{
  			if(res.data.code && res.data.code == 200){
  				this.setState({
  					SignID: res.data.content.signs.ID,
  					loading: false,
  					data: res.data.content
  				})
  			}else{
  				_this.setState({
  					emptyCnt: true,
  					loading: false
  				})
  			}
  		})
  		.catch((res) => {
  			console.log(res)
  		})
	}
	isSign(){
		if(storage.getItem('details')){
			this.state.show = 0;	
		}else{
			this.state.show = 1;
		}
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
			T.notify('手机号不能为空');
		}else if( telReg == false){
			T.notify('请填写正确的手机号');
			return false;
		}else {
			Api.sign.tpl1.apply(id,forms)
			.then((res) =>{
				if(res.data.code && res.data.code == 200){ //200 未注册
					T.notify('请先去注册');
					setTimeout(() =>{
						window.location.href = '/' + this.props.match.params.name_id + '/sign/apply';	
					},3000)
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
	componentDidMount() {	
		this.isSign();
		this.signInfo();
	}
	result(){
		if(this.state.show == 1){
			return (

				<form>
					<h2>嘉宾签到</h2>
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
		let _data = this.state.data;
		if(this.state.loading){
            return (
                <div className="wrap">
                    <Loading /> 
                </div>
            )    
        }else{
        	if(Object.keys(_data).length > 0 && _data.constructor == Object){
        		return (
					<div className="sign">
						<div className="sign-header">
							<h1 className="logo">
								<img src={_data.signs.logo} />
							</h1>
							<div className="slogan-w">
								<p>{_data.signs.Title}</p>
							</div>	
						</div>
						<div className="sign-content">
							<div className="sign-box">
								{this.result()}
							</div>
						</div>
						<div className="sign-footer">aaa</div>
						<Toast />
					</div>
				)		
        	}
        }
	}
}




