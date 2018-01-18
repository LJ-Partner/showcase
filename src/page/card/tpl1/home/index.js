import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getCardData : {},
			loading: true,
			emptyCnt: false
		}
	}
	getCardInfo(){
		let _this = this;
  		Api.card.tpl1.home(this.props.match.params.name_id)
  		.then((res) =>{
  			if(res.data.code && res.data.code == 200){
  				_this.setState({ 
	                getCardData: res.data.content,
	                loading: false
	            });	
  			}else{
  				_this.setState({
  					emptyCnt: true,
  					loading: false
  				})
  			}
  		})
  		.catch((error) => {
  			console.log(error)
  		})
	}
	componentDidMount() {
		this.getCardInfo();		
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
				    <div className="card">
				    	<div className="card-header">
				    		<div className="logo">
				    			<img src={data.logo} />
				    		</div>
				    		<div className="card-contact-us">
				    			<span>联系我们</span>
				    			<p>
				    				<em>CONTACT US</em>
				    				<span></span>
				    			</p>
				    		</div>	
				    	</div>
				    	<div className="card-cnt">
				    		<div className="item-box item-address">
				    			<div className="item-box-txt">
				    				<span>地址</span>
				    				<p>{data.Address}</p>
				    			</div>	
				    			<div className="item-box-pic">
				    				<img src={require('../../../../images/contact/contact_ico_address.png')} />	
				    			</div>
				    		</div>
				    		<div className="item-box item-tel">
				    			<div className="item-box-txt">
				    				<span>电话</span>
				    				<p>{data.Telephone}</p>
				    			</div>	
				    			<div className="item-box-pic">
				    				<img src={require('../../../../images/contact/contact_ico_tel.png')} />	
				    			</div>	
				    		</div>
				    		<div className="item-box item-web">
				    			<div className="item-box-txt">
				    				<span>官网</span>
				    				<p>{data.Website}</p>
				    			</div>	
				    			<div className="item-box-pic">
				    				<img src={require('../../../../images/contact/contact_ico_web.png')} />	
				    			</div>	
				    		</div>
				    	</div>			
					</div>
				);		
			}else{
				return (
					<div className="wrap">
	        			<Empty content = "内容为空" />
	        		</div>
				)
			}	
        }
	}
}




