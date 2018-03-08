import axios from 'axios'
import Api from '../../index.js'
module.exports = {
	pushdata(id,obj){
		if(id && obj){
			return  axios.post(Api.api_prefix+id+'/signs/signin',obj);
		}
	},
	signData(id,signId){
		if(id){
			return  axios.get(Api.api_prefix+id+'/signs/'+signId)
		}
	},
	apply(id,obj){
		if(id){
			return  axios.post(Api.api_prefix+id+'/signs',obj)
		}
	}
}
