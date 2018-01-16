import axios from 'axios'
import Api from '../../index.js'
module.exports = {
	pushdata(id,obj){
		if(id && obj){
			return  axios.post(Api.api_prefix+id+'/signs/signin',obj);
		}
	},
	apply(id){
		if(id){
			return  axios.get(Api.api_prefix+id+'/signs')
		}
	}
}
