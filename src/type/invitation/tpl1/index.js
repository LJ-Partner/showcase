import { default as Home } from '../../../page/invitation/tpl1/home/index.js';
import { default as Demo } from '../../../page/invitation/tpl1/demo/index.js';
import { default as Unfind } from '../../../page/error.js';
module.exports = {
	home(){
		return Home
	},
	demo(){
		return Demo
	},
	error(){
		return Unfind
	}
}
