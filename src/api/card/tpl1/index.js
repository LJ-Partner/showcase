import axios from 'axios'
module.exports = {
	home(id){
		if(id){
			return  axios.get('http://192.168.0.103:1024/Api/V1/'+id+'/card');
		}
	}
}
