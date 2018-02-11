import axios from 'axios'
import Api from '../../index.js'
module.exports = {
	home(id){
		if(id){
			return  axios.get(Api.api_prefix + id + '/website');
		}
	},
	concept(id){
		if(id){
			return  axios.get(Api.api_prefix + id + '/website');
		}
	},
	about(id){
		return  axios.get(Api.api_prefix + id + '/website/about');	
	},
	//所有产品
	AllProduct(id,page){
		if(id){
			return  axios.get(Api.api_prefix+id+'/website/products/'+page);	
		}
	},
	//系列产品
	SeriesProduct(id,series_id,page){
		if(id){
			return  axios.get(Api.api_prefix+id+'/website/series/'+series_id+'/products/'+page);	
		}	
	},
	productDetail(id,series_id,product_id){
		if(id){
			return axios.get(Api.api_prefix+id+'/website/series/'+series_id+'/product/'+product_id);
		}
	},
	news(id,page){
		if(id){
			return  axios.get(Api.api_prefix+id+'/website/news/'+page);
		}
	},
	newsDetail(id,news_id){
		return  axios.get(Api.api_prefix+id+'/website/news/new/'+news_id);	
	},
	jobs(id,page){
		if(id){
			return  axios.get(Api.api_prefix+id+'/website/jobs/'+page);
		}	
	},
	jobsDetail(id,job_id){
		if(id){
			return  axios.get(Api.api_prefix+id+'/website/jobs/job/'+job_id);
		}	
	},
	addMessage(id,obj){
		if(id){
			return  axios.post(Api.api_prefix+id+'/website/Message/Add/',obj);
		}
	}
}
