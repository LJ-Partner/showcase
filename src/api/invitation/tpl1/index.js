import axios from 'axios'
import Api from '../../index.js'
module.exports = {
	home(id){
		if(id){
			return  axios.get(Api.api_prefix+id+'/invitation');
		}
	}
}
