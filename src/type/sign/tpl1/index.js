import { default as Home } from '../../../page/sign/tpl1/home/index.js';
import { default as Apply } from '../../../page/sign/tpl1/apply/index.js';
import { default as Unfind } from '../../../page/error.js';
module.exports = {
	home(){
		return Home
	},
	apply(){
		return Apply
	},
	error(){
		return Unfind
	}
}
