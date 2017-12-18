const data= require('../data/index.json');
let Api= function(){}
Api.prototype.getdata = function(){
	return data.data	
}
	
module.exports= new Api();
