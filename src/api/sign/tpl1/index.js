import axios from 'axios'
module.exports = {
	home(id){
		if(id){
			return  axios.post('http://192.168.0.103:1024/Api/V1/'+id+'/signs/signin',{
						SignID: '', 					//签到活动的id
						Signer: '',						//签到人姓名
						SignerMobile: '',				//签到人电话
						SignerGender: '',				//签到人性别 1.男，2.女
						SignerCompany: '',				//签到人公司名称
						SignerNumber:''					//与会人数
					});
		}
	}
}
