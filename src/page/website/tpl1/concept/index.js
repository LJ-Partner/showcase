import './index.less';
import React from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import ConceptDetail from '../../../../components/ConceptDetail/ConceptDetail';
import Support from '../../../../components/Support/Support';
import MenuIcon from '../../../../components/MenuIcon/MenuIcon';
import Footer from '../../../../components/Footer/Footer';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
const IndexHeadCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
export default class Concept extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			conceptData: {},
			loading: true,
			emptyCnt: false
		}
	}
	getConceptData(){
        let _this = this;
        Api.website.tpl1.home(this.props.match.params.name_id)
        .then((res)=>{
        	console.log(res)
            if(res.data.code && res.data.code == 200){
                _this.setState({ 
                    conceptData: res.data.content.index,
                    loading: false 
                })  
            }else{
                _this.setState({
                    loading: false,
                    emptyCnt: true
                })
            }
        }).catch((res) =>{
        	console.log(res)
        });     
    }
    componentDidMount(){
        this.getConceptData();    
    }
    componentWillUnmount(){  
        this.setState = (state,callback)=>{
        	return;
        };  
    }
    render() {
    	var data = this.state.conceptData;
    	var _data = {};
    	console.log(this.state.loading)
    	if(this.state.loading){
            return (
                <div className="wrap">
                    <Loading />
                </div>
            )    
        }else{
        	if(!this.state.emptyCnt){
        		if(Object.keys(data).length > 0 && data.constructor === Object){
        			_data = {
        				banner: [data.Banner1,data.Banner2,data.Banner2],
        				datail: data.Ideals
        			}
        			return (
						<div className="wrap">
					    	<div className="main philosophy-w">
                                <div className="main-cnt-w">
                                    <div className="main-cnt">
    					    		    <Carousel config={IndexHeadCarousel} bannerList={_data.banner} />
    					    		    <ConceptDetail detail={_data.datail} />	
                                    </div>
                                    <Support />
                                </div>
					    	</div>	
					    	<Footer name={"/"+ this.props.match.params.name_id + "/website/" + this.props.match.params.item_id} />	
						</div>
					)	
        		}
        	}else{
        		return (
                    <div className="wrap">
                        <Empty content = "内容为空" />} 
                    </div>
                )
        	}
        }
	}
}




