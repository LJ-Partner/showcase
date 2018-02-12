import React from 'react';
import PropTypes from 'prop-types';
import Toast from 'react-toast-mobile';
import {T} from 'react-toast-mobile';
import Carousel from '../../../../components/Carousel/Carousel';
import Support from '../../../../components/Support/Support';
import MenuIcon from '../../../../components/MenuIcon/MenuIcon';
import Footer from '../../../../components/Footer/Footer';
import Loading from '../../../../components/Loading/Loading';
import Empty from '../../../../components/Empty/Empty';
import Api from '../../../../api/index';
import './index.less';
let forms;
const JoinConfigCarousel = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
export default class Message extends React.Component {
	static propTypes={
        flag:PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            emptyCnt: false,
            data:{
                banners:['https://p.maicai360.cn/img/get/20180129/36502636528314931782964_png','https://p.maicai360.cn/img/get/20180129/78110636528315032233128_png','https://p.maicai360.cn/img/get/20180129/58523636528315072509232_png']
            }
        }
    }
    componentDidMount(){
    	
    }
    toSubmit(e){
        e.preventDefault();
        let id = this.props.match.params.name_id;
        let name = this.refs.name.value.trim();
        let mobile = this.refs.mobile.value.trim();
        let title = this.refs.title.value.trim();
        let message = this.refs.message.value.trim();
        let telReg = !!mobile.match(/^(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
        forms = {
            mobile: mobile,
            name: name,
            title: title,
            message: message
        }
        if(mobile == "" || name == "" || title == "" || message == ""){
            T.notify('请把相关信息填写完整')
            return false;
        }else if(telReg == false){
            T.notify('请输入正确的手机号');
            return false;   
        }else{
            Api.website.tpl1.addMessage(id,forms)
            .then((res) =>{
                if(res.data.code && res.data.code == 200){
                    T.notify('留言成功');
                    setTimeout(() =>{
                        this.refs.mobile.value = '';
                        this.refs.name.value = '';
                        this.refs.title.value = '';
                        this.refs.message.value = '';    
                    },2000)
                    //window.location.href = '/' + this.props.match.params.name_id + '/website/message'  
                }else{
                    T.notify('留言失败');
                    forms = {
                        mobile: '',
                        name: '',
                        title: '',
                        message: ''
                    }
                    //window.location.href = '/' + this.props.match.params.name_id + '/website/message'
                }
            })
            .catch((res) =>{
                console.log(res)
            });
        }
        console.log(forms)
    }
    render() {
        return(
            <div className="wrap w-message">
                <div className="main">
                    <div className="main-cnt">
                        <Carousel config={JoinConfigCarousel} bannerList={this.state.data.banners}/>
                        <div className="message-line"></div>
                        <div className="message-box">
                            <div className="message-box-tit">
                                <em className="arrow-left"></em>
                                <p>留言咨询</p>
                                <em className="arrow-right"></em>
                            </div>
                            <div className="message-box-cnt">
                                <form className="form-box">
                                    <div className="form-box-item">
                                        <label>姓名<sup>*</sup></label>
                                        <input type="text" ref="name" name="name" />
                                    </div>
                                    <div className="form-box-item">
                                        <label>手机<sup>*</sup></label>
                                        <input type="text" ref="mobile" name="mobile" maxLength="11"/>
                                    </div>
                                    <div className="form-box-item">
                                        <label>标题<sup>*</sup></label>
                                        <input type="text" ref="title" name="title" />
                                    </div>
                                    <div className="form-box-item">
                                        <label>内容<sup>*</sup></label>
                                        <textarea  rows="6" ref="message" name="message"></textarea>
                                    </div>
                                    <div className="form-box-item">
                                        <button type="button" className="btn-submit" onClick={this.toSubmit.bind(this)} >提交</button>
                                    </div>
                                </form>
                            </div>
                            <Toast />
                        </div>
                    </div>
                    <Support />
                </div>
                <Footer  name={"/"+ this.props.match.params.name_id + "/website" } />
            </div>
        )    
	}
}




