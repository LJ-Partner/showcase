import React from 'react';
import Toast from 'react-toast-mobile';
import {T} from 'react-toast-mobile';
import ReactDOM from 'react-dom';
import './index.less';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
import axios from 'axios';
let forms,storage = window.localStorage,details={};
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getCardData : {},
			maleChecked : true,
			femaleChecked : false,
			SignerGender: '1',				//签到人性别 1.男，2.女
			SignID: '',						//签到ID
			loading: true,
			emptyCnt: false
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			SignerGender: event.target.value	
		})
	}
	isSign(){
		if(storage.getItem('details')){
			if(JSON.parse(storage.getItem('details')).sign){ //已报名
				window.location.href = '/' + this.props.match.params.name_id + '/sign'		
			}	
		}
	}
	//签到相关信息
	signInfo(){
  		Api.sign.tpl1.signData(this.props.match.params.name_id)
  		.then((res) =>{
  			if(res.data.code && res.data.code == 200){  
  				this.setState({
  					SignID: res.data.content.signs.ID,
  					loading: false,
  					getCardData: res.data.content.signs
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
	componentDidMount() {
		this.isSign();
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
			T.notify('请把相关信息填写完整')
			return false;
		}else if(telReg == false){
			T.notify('请输入正确的手机号');
			return false;	
		}else{
			Api.sign.tpl1.pushdata(id,forms)
			.then((res) =>{
				if(res.data.code && res.data.code == 200){
					T.notify('报名成功');
					details = {'sign':'1','mobile':SignerMobile};
					storage.setItem('details',JSON.stringify(details));
					setTimeout(()=> {
						window.location.href = '/' + this.props.match.params.name_id + '/sign'	
					})
				}else{
					T.notify('您已经报过名了')
					this.refs.Signer.value = '';
					this.refs.SignerMobile.value = '';
					this.refs.SignerCompany.value = '';
					this.refs.SignerNumber.value = '';
					this.setState({
						femaleChecked: false,
						maleChecked: true	
					});	
					setTimeout(() =>{
						window.location.reload();
					},3000)
				}
			})
			.catch((res) =>{
				console.log(res)
			});
		}
	}
	render() {
		let data = this.state.getCardData;
		if(this.state.loading){
            return (
                <div className="wrap">
                    <Loading /> 
                </div>
            )    
        }else{
        	if(Object.keys(data).length > 0 && data.constructor == Object){
        		return (
					<div className="apply">
						<div className="apply-header">
							<h1 className="logo">
								<img src={data.logo} />
							</h1>
							<div className="slogan-w">
								<p>{data.Title}</p>
							</div>	
						</div>
						<div className="apply-content">
							<p className="tips">
								请填写参会信息，我们将尽快与您取得联系并安排相关服务。	
							</p>
							<form className="form-box">
								<div className="item-box">
									<label>姓名</label>
									<input type="text" className="inp" name="Signer" ref="Signer" />
								</div>
								<div className="item-box">
									<label>手机号</label>
									<input type="text" className="inp" name="SignerMobile" ref="SignerMobile" maxLength="11" />
								</div>
								<div className="item-box">
									<label>性别</label>
									<div className="radio-box">
										<label className={this.state.SignerGender == 1?"item-radio item-radio-yes":"item-radio"}>
											男
											<input type="radio" id="sex_1"  value="1" name="sex" onChange={this.handleChange}  defaultChecked={this.state.maleChecked} /> 	
										</label>
										<label className={this.state.SignerGender == 2?"item-radio item-radio-yes":"item-radio"}>
											女
											<input type="radio" id="sex_2"   value="2" name="sex"  onChange={this.handleChange} defaultChecked={this.state.femaleChecked} /> 
										</label>
									</div>
								</div>
								<div className="item-box">
									<label>公司名</label>
									<input type="text" className="inp" name="SignerCompany" ref="SignerCompany" />
								</div>
								<div className="item-box">
									<label>参会人数</label>
									<input type="text" className="inp" name="SignerNumber"  ref="SignerNumber" />
								</div>
								<button type="button" className="btn-enter" onClick={this.toApply.bind(this)}>确定</button>
							</form>
						</div>
						<div className="apply-footer">底部</div>
						<Toast />	
					</div>
				)	
        	}	
        }
	}
}




