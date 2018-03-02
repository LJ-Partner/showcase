import React from 'react';
import ReactDOM from 'react-dom';
import '../../../../font/iconfont.css';
import './index.less';
import Loading from '../../../../components/Loading/Loading';
import Support from '../../../../components/Support/Support';
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
				    <div className="video-list-w">
				    	<div className="logo-w">
					    	<h1 className="logo">
					    		<span>
					    			<img src={'https://p.maicai360.cn/img/get/20180301/72817636555120975340246_png'} />
					    		</span>
					    	</h1>
					    </div>
				    	<div className="title">
				    		<p>新能源汽车发动机的优势</p>
				    	</div>	
				    	<div className="video-list">
				    		<div className="list-item">
				    			<a href="javascript:;" className="item-video">
				    				<span>
				    					<img src={'https://p.maicai360.cn/img/get/20180228/27083636554332966181433_png'} />	
				    				</span>	
				    				<i className="icon-bofang iconfont">

				    				</i>
				    			</a>
				    			<div className="item-detail">
				    				<h1>空气滤清器</h1>
				    				<h2>曼牌空气滤清器：可靠技术提供最佳保护</h2>
				    				<div className="advantage">
				    					<h3>
				    						曼牌空气滤清器的优点：	
				    					</h3>
				    					<div className="advantage-cnt">
				    						<p>在整个维护周期内性能可靠</p>
				    						<p>最佳污物分离效率</p>
				    						<p>流阴小</p>
				    						<p>可靠的防漏效果</p>
				    						<p>采用特殊压痕工艺，保证了良好的褶片稳定性</p>
				    					</div>
				    				</div>	
				    			</div>
				    		</div>
				    		<div className="list-item">
				    			<a href="javascript:;" className="item-video">
				    				<span>
				    					<img src={'https://p.maicai360.cn/img/get/20180228/27083636554332966181433_png'} />	
				    				</span>	
				    				<i className="icon-bofang iconfont">

				    				</i>
				    			</a>
				    			<div className="item-detail">
				    				<h1>空气滤清器</h1>
				    				<h2>曼牌空气滤清器：可靠技术提供最佳保护</h2>
				    				<div className="advantage">
				    					<h3>
				    						曼牌空气滤清器的优点：	
				    					</h3>
				    					<div className="advantage-cnt">
				    						<p>在整个维护周期内性能可靠</p>
				    						<p>最佳污物分离效率</p>
				    						<p>流阴小</p>
				    						<p>可靠的防漏效果</p>
				    						<p>采用特殊压痕工艺，保证了良好的褶片稳定性</p>
				    					</div>
				    				</div>	
				    			</div>
				    		</div>
				    	</div>	
				    	<Support />	
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




