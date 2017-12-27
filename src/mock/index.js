const data= require('../data/index.json');
const aboutData= require('../data/about.json');
const productData= require('../data/product.json');
const productDetailData= require('../data/productDetail.json');
const newsData= require('../data/news.json');
const newsDetailData= require('../data/newsDetail.json');
const philosophyData = require('../data/philosophy.json');
const menuIconData = require('../data/menuIcon.json');
const customeData = require('../data/custome.json');
const popData = require('../data/pop.json');
let Api= function(){}
Api.prototype.IndexData = function(name){
	if(name == 'yikst'){
		return data.yikst	
	}else if(name == 'zzkeneng'){
		return data.zzkeneng	
	}else if(name == 'ningde'){
		return data.ningde	
	}else {
		return data.ruien
	}
}
Api.prototype.aboutData = function(name){
	if(name == 'yikst'){
		return aboutData.yikst	
	}else if(name == 'zzkeneng'){
		return aboutData.zzkeneng	
	}else{
		return aboutData.ruien
	}
}
Api.prototype.productData = function(name,id){
	if(name == 'yikst'){
		return [productData.yikst.banner,productData.yikst.list]
	}else if(name == 'zzkeneng'){
		return [productData.zzkeneng.banner,productData.zzkeneng.list]
	}else{
		return [productData.ruien.banner,productData.ruien.list]		
	}
}
Api.prototype.productDetailData = function(name,id){
	if(name == 'yikst'){
		return [productDetailData.yikst.banner,productDetailData.yikst.detail]
	}else if(name == 'zzkeneng'){
		return [productDetailData.yikst.banner,productDetailData.zzkeneng.detail]
	}
}
Api.prototype.newsData = function(name){
	if(name == 'yikst'){
		return newsData.yikst	
	}else if(name == 'zzkeneng'){
		return newsData.zzkeneng
	}else{
		return newsData.ruien
	}
}
Api.prototype.newsDetailData = function(name,id){
	if(name == 'yikst'){
		return [newsDetailData.yikst.banner,newsDetailData.yikst.detail]	
	}else if(name == 'zzkeneng'){
		return [newsDetailData.zzkeneng.banner,newsDetailData.zzkeneng.detail]	
	}else{
		return [newsDetailData.ruien.banner,newsDetailData.ruien.detail]	
	}
}
Api.prototype.philosophyData = function(name){
	if(name == 'yikst'){
		return philosophyData.yikst	
	}else if(name == 'zzkeneng'){
		return philosophyData.zzkeneng	
	}else{
		return philosophyData.ruien	
	}
}

Api.prototype.menuIconData = function(name){
	if(name == 'yikst'){
		return menuIconData.yikst	
	}else if(name == 'zzkeneng'){
		return menuIconData.zzkeneng	
	}else {
		return menuIconData.ruien
	}
}
Api.prototype.customeData = function(name){
	if(name == 'yikst'){
		return customeData.yikst	
	}else if(name == 'zzkeneng'){
		return customeData.zzkeneng
	}else{
		return customeData.ruien
	}
}
Api.prototype.popData = function(name){
	if(name == 'yikst'){
		return popData.yikst	
	}else if(name == 'zzkeneng'){
		return popData.zzkeneng
	}else{
		return popData.ruien
	}
}	
module.exports= new Api();
