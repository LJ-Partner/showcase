import { default as Home } from '../../../page/single/picture/home/index.js';
import { default as Unfind } from '../../../page/error.js';
module.exports = {
	home(){
		return Home
	},
	error(){
		return Unfind
	}
}
