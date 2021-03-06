import { default as Home } from '../../../page/website/tpl1/Home/index.js';
import { default as Concept } from '../../../page/website/tpl1/Concept/index.js';
import { default as About } from '../../../page/website/tpl1/About/index.js';
import { default as Product } from '../../../page/website/tpl1/Product/index.js';
import { default as Join } from '../../../page/website/tpl1/Join/index.js';
import { default as JoinDetail } from '../../../page/website/tpl1/Join/detail.js';
import { default as ProductsDetail } from '../../../page/website/tpl1/Product/detail.js';
import { default as News } from '../../../page/website/tpl1/News/index.js';
import { default as NewsDetail } from '../../../page/website/tpl1/News/detail.js';
import { default as Message } from '../../../page/website/tpl1/Message/index.js';
import { default as Unfind } from '../../../page/error.js';
module.exports = {
	home(){
		return Home
	},
	concept(){
		return Concept
	},
	about(){
		return About
	},
	product(){
		return Product
	},
	productDetail(){
		return ProductsDetail
	},
	news(){
		return News
	},
	newsDetail(){
		return NewsDetail
	},
	join(){
		return Join
	},
	joinDetail(){
		return JoinDetail
	},
	message(){
		return Message
	},
	error(){
		return Unfind
	}
}
