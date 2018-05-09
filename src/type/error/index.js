import { default as Unfind } from '../../page/error.js';
import { default as NotFound } from '../../page/notfound.js';
module.exports = {
	error(){
		return Unfind
	},
	notfound(){
		return NotFound
	}
}