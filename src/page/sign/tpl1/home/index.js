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
			show: true,								//是否显示
			SignID: '',								//signId
			signText: '签到成功',					//签到文本
			loading: true,							//loading动画
			emptyCnt: false,						//空内容
			data:'',								//数据
			numStatus:false, 						//编号状态
			signNum: 0								//签到编号
		}

	}
	//签到相关信息
	signInfo(){
		let _this = this;
  		Api.sign.tpl1.signData(this.props.match.params.name_id,this.props.match.params.sign_id)
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
			console.log(forms)
		if(mobile == ""){
			T.notify('手机号不能为空');
		}else if( telReg == false){
			T.notify('请填写正确的手机号');
			return false;
		}else {
			Api.sign.tpl1.apply(id,forms)
			.then((res) =>{
				if(res.data.code && res.data.code == 200){ 				//200 未注册
					T.notify('请先去注册');
					setTimeout(() =>{
						window.location.href = '/' + this.props.match.params.name_id + '/sign/'+this.props.match.params.sign_id+'/apply';	
					},3000)
				}else if(res.data.code && res.data.code == 301){		//301  有编号
					this.setState({
						show: false,
						signText: '签到成功！',
						numStatus: true,
						signNum: res.data.content.sign_code
					});	
				}else if(res.data.code && res.data.code == 302){		//302  无编号
					this.setState({
						show: false,
						signText: '您已填写！',
						numStatus: false
					});	
				}else{													//500  出错
					T.notify(res.data.msg);			
				}
			})
			.catch((res) =>{
				console.log(res)
			});
		}
	}
	componentDidMount() {	
		//this.isSign();
		this.signInfo();
	}
	sucDetail(tel,title){
		if(this.state.numStatus){
			return(
				<div className="suc-txt">
					<p className="suc-num">
						<em>{this.state.signNum}</em>号
					</p>
					<p>
						<em>{this.state.signText}</em>感谢您位临{title}，请与工作人员联系，我们会安排会务事宜，感谢您的支持！
					</p>
					{tel?(<p>联系电话 : {tel}</p>):('')}		
				</div>
			)
		}else{
			return(
				<div className="already">
					<p>
						<em>{this.state.signText}</em>请尽快与会场工作人员联系，进行线下支付，完成会议流程！如已完成支付，请与现场工作人员联系取得编号。如有问题可向工作人员咨询！
					</p>
					{tel?(<p>联系电话 : {tel}</p>):('')}	
				</div>
			)	
		}
	}
	result(){
		if(this.state.show == 1){
			return (
				<div className="cnt-info">
					<p className="slogan-w">
						<span>
							<img src={'https://p.maicai360.cn/img/get/20180228/01078636554316701178258_png'} />	
						</span>
					</p>
					<div className="tips">
						<p></p>
					</div>
					<form className="form-box">
						<input type="text" placeholder="您的手机号" ref='mobile' maxLength="11" />
						<button className="btn-sign-in" onClick={this.toSign.bind(this)} type="button">签到</button>
					</form>
				</div>	
			)
		}else{
			return (
				<div className="cnt-result">
					<div className="tips">
						<p>硅钢供需交流会</p>
					</div>	
					<div className="result-suc">
						{this.sucDetail()}
						<a href={'/'+this.props.match.params.name_id + '/sign/'+this.props.match.params.sign_id} className="btn-home">返回首页</a>
					</div>
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
						<div className="sign-main">
							<h1 className="logo">
								<img src={_data.signs.logo} />
							</h1>
							<div className="main-cnt">
								{this.state.show?(
													<div className="cnt-info">
														<p className="slogan-w">
															<span>
																<img src={'https://p.maicai360.cn/img/get/20180228/01078636554316701178258_png'} />	
															</span>
														</p>
														<div className="tips">
															<p>{_data.signs.Title}</p>
														</div>
														<form className="form-box">
															<input type="text" placeholder="您的手机号" ref='mobile' maxLength="11" />
															<button className="btn-sign-in" onClick={this.toSign.bind(this)} type="button">签到</button>
														</form>
													</div>):
													(<div className="cnt-result">
													<div className="tips">
														<p>{_data.signs.Title}</p>
													</div>	
													<div className="result-suc">
														{this.sucDetail(_data.signs.Phone,_data.signs.Title)}
														<a href={'/'+this.props.match.params.name_id + '/sign/'+this.props.match.params.sign_id} className="btn-home">返回首页</a>
													</div>
													</div>)
								}
							</div>
						</div>
						<Toast />
					</div>
				)		
        	}
        }
	}
}




