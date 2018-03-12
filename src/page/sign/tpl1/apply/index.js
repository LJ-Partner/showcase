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
			show:false ,						//是否显示
			getCardData : {},
			maleChecked : true,
			applyText:'报名成功！',				//文本
			femaleChecked : false,
			SignerGender: '1',					//签到人性别 1.男，2.女
			SignID: '',							//签到ID
			loading: true,
			emptyCnt: false,
			codeNum: 0,							//编号
			numStatus: false,					//是否有编号
			Abstract: ''						//文本描述	
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
	result(data){
		if(this.state.show){
			return(
				<div className="cnt-info">
					<p className="txt">
						{data.Abstract}
					</p>
					<form className="form-box">
						<div className="item-box">
							<label>您的姓名</label>
							<input type="text" className="inp" name="Signer" ref="Signer" />
						</div>
						<div className="item-box">
							<label>您的职位</label>
							<input type="text" className="inp" name="Position" ref="Position" />
						</div>
						<div className="item-box">
							<label>手机号</label>
							<input type="text" className="inp" name="SignerMobile" ref="SignerMobile" maxLength="11" />
						</div>
						<div className="item-box">
							<label>您的公司</label>
							<input type="text" className="inp" name="SignerCompany" ref="SignerCompany" />
						</div>
						<div className="item-box">
							<label>主营产品</label>
							<input type="text" className="inp" name="Product"  ref="Product" />
						</div>
						<button type="button" className="btn-enter" onClick={this.toApply.bind(this)}>确定</button>
					</form>	
				</div>
			)
		}else{
			return(
				<div className="cnt-result">
					<div className="result-suc">
						<div className="suc-txt">
							<div className="already">
								{
									this.state.codeNum?(<p className="suc-num"><em>{this.state.codeNum}</em>号</p>):('')
								}
								<p>
									<em>{this.state.applyText}</em>{data.Attach_text}
								</p>	
								{
									this.state.numStatus?(''):((<p>联系电话 : {data.Phone}</p>:('')))
								}
							</div>
						</div>
						<a href={'/'+this.props.match.params.name_id + '/sign/'+this.props.match.params.sign_id} className="btn-home">返回首页</a>
					</div>
				</div>
			)
		}
	}
	//签到相关信息
	signInfo(){
  		Api.sign.tpl1.signData(this.props.match.params.name_id,this.props.match.params.sign_id)
  		.then((res) =>{
  			if(res.data.code && res.data.code == 200){  
  				this.setState({
  					SignID: res.data.content.signs.ID,
  					loading: false,
  					getCardData: res.data.content.signs,
  					show: true,
  					Abstract: res.data.content.signs.Abstract
  				})
  			}else{
  				_this.setState({
  					emptyCnt: true,
  					loading: false
  				})
  			}
  		})
  		.catch((res) => {
  			T.notify(res.data.msg);
  		})
	}
	componentDidMount() {
		//this.isSign();
		this.signInfo();
	}
	toApply(e){
		e.preventDefault();
		let id = this.props.match.params.name_id;
		let Signer = this.refs.Signer.value.trim();
		let Position = this.refs.Position.value.trim();
		let SignerMobile = this.refs.SignerMobile.value.trim();
		let SignerCompany = this.refs.SignerCompany.value.trim();
		let Product = this.refs.Product.value.trim();
		let telReg = !!SignerMobile.match(/^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/);
		forms= {
				SignID: this.state.SignID, 									//签到活动的id
				Signer: Signer,												//签到人姓名
				Position: Position,											//签到人职位
				SignerMobile: SignerMobile,									//签到人电话
				SignerCompany: SignerCompany,								//签到人公司名称
				Product: Product											//主营产品
			};
		if(Signer == "" || Position == "" || SignerMobile == "" || SignerCompany == "" || Product == ""){
			T.notify('请把相关信息填写完整')
			return false;
		}else if(telReg == false){
			T.notify('请输入正确的手机号');
			return false;	
		}else{
			Api.sign.tpl1.pushdata(id,forms)
			.then((res) =>{
				if(res.data.code){
	  				if(res.data.code == 200){								//200报名成功,没编号	
	  					this.setState({
		  					numStatus: false,
		  					applyText: '报名成功！'
		  				})
	  				}else if(res.data.code == 301){							//已经签到过了,有编号
	  					this.setState({
		  					numStatus: true,
		  					applyText: '您已经签到过了！',
		  					codeNum: res.data.content.sign_code
		  				})
	  				}else if(res.data.code == 302){							//联系现场工作人员
	  					this.setState({
		  					numStatus: false,
		  					applyText: '您已经填写过了！'
		  				})
	  				}
	  				this.setState({
	  					show: false
	  				})	
				}
			})
			.catch((res) =>{
				T.notify(res.data.msg);
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
						<div className="apply-main">
							<h1 className="logo">
								<img src={data.logo} />
							</h1>
							<div className="main-cnt">
								<div className="title">
									<p>{data.Title}</p>
								</div>
								{this.result(data)}
							</div>
						</div>	
						<Toast />
					</div>
				)	
        	}	
        }
	}
}




