import axios from 'axios'
module.exports = {
	home(id){
		if(id){
			return  axios.get('http://192.168.0.103:1024/Api/V1/' + id + '/index');
		}
	},
	about(id){
		return  axios.get('http://192.168.0.103:1024/Api/V1/2/index/about');	
	},
	//所有产品
	AllProduct(id,page){
		if(id){
			return  axios.get('http://192.168.0.103:1024/Api/V1/'+id+'/index/products/'+page);	
		}
	},
	//系列产品
	SeriesProduct(id,series_id,page){
		if(id){
			return  axios.get('http://192.168.0.103:1024/Api/V1/'+id+'/index/series/'+series_id+'/products/'+page);	
		}	
	},
	productDetail(id,series_id,product_id){
		if(id){
			return axios.get('http://192.168.0.103:1024/Api/V1/'+id+'/index/series/'+series_id+'/product/'+product_id);
		}
	},
	news(id){
		if(id){
			return  axios.get('http://192.168.0.103:1024/Api/V1/'+id+'/index/news/');
		}
	},
	newsDetail(id,news_id){
		return  axios.get('http://192.168.0.103:1024/Api/V1/'+id+'/index/news/new/'+news_id);	
	}
}
