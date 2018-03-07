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
			show: 1,								//是否显示
			SignID: '',								//signId
			signText: '签到成功',					//签到文本
			loading: true,							//loading动画
			emptyCnt: false,						//空内容
			data:'',								//数据
			payStatus:0 							//付款状态
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
				}else{		
					this.setState({
						show: 2,
						signText: '您已经签到过了',
						payStatus: 1
					});	
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
	sucDetail(){
		if(this.state.payStatus == 2){
			return(
				<div className="suc-txt">
					<p className="suc-num">
						<em>66</em>号
					</p>
					<p>
						<em>签到成功！</em>感谢您位临2018年硅钢供需交流会，请与工作人员联系，我们会安排会务事宜，感谢您的支持！
					</p>	
				</div>
			)
		}else{
			return(
				<div className="already">
					<p>
						<em>您已填写！</em>请尽快与会场工作人员联系，进行线下支付，完成会议流程！如已完成支付，请与现场工作人员联系取得编号。如有问题可向工作人员咨询！
					</p>	
					<p>联系电话 : 17612142416</p>
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
						<span>
							<em>2</em>
							<em>0</em>
							<em>1</em>
							<em>8</em>
						</span>
						<p>硅钢供需交流会</p>
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
						<span>
							<em>2</em>
							<em>0</em>
							<em>1</em>
							<em>8</em>
						</span>
						<p>硅钢供需交流会</p>
					</div>	
					<div className="result-suc">
						{this.sucDetail()}
						<a href={'/'+this.props.match.params.name_id + '/sign'} className="btn-home">返回首页</a>
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
								<img src={'https://p.maicai360.cn/img/get/20180228/33732636554315967666336_png'} />
							</h1>
							<div className="main-cnt">
								{this.result()}
							</div>
						</div>
						<Toast />
					</div>
				)		
        	}
        }
	}
}




