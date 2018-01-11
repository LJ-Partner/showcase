import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  as Router,Route,Switch } from 'react-router-dom'; 
import { default as type } from './type/index.js';
const dest = document.getElementById('root');
import axios from 'axios';
var name = window.location.pathname;
var company_id = name.split('/')[1];
var category_name = name.split('/')[2];
if(category_name){
    //company_id 公司id
    //category_name 类别名字 微官网:website 分享名片:card
    //item_id  对应字段 ItemID 模板id 唯一值
    var _url;
    if(category_name == 'website'){ //微官网
        if(company_id){
            axios.get('http://192.168.0.103:1024/Api/V1/'+company_id)
            .then((res) => {
                if(res.data.code && res.data.code == 200){
                    _url = '/:name_id/website/:item_id';
                    if(res.data.content.website_tmp == 1){
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route path={_url+'/news/detail/:news_id'} component={type.website.tpl1.newsDetail()} />
                                    <Route path={_url+'/news'} component={type.website.tpl1.news()} />
                                    <Route path={_url+'/products/:series_id/detail/:product_id'} component={type.website.tpl1.productDetail()} />
                                    <Route path={_url+'/products/:series_id'} component={type.website.tpl1.product()} />
                                    <Route path={_url+'/products/'} component={type.website.tpl1.product()} />
                                    <Route path={_url+'/about'} component={type.website.tpl1.about()} />
                                    <Route path={_url} component={type.website.tpl1.home()} />
                                    <Route component={type.website.tpl1.error()} />
                                </Switch>
                            </Router>
                            ,
                            dest    
                        )  
                    }
                }else{
                    console.log('暂无数据')
                }
            })
            .catch((error) =>{
                console.log(error)
            });    
        }
    }else if(category_name == 'card'){ //名片
        if(company_id){
            axios.get('http://192.168.0.103:1024/Api/V1/'+company_id)
            .then((res) => {
                if(res.data.code && res.data.code == 200){
                    _url = '/:name_id/card/:item_id';           
                    if(res.data.content.website_tmp == 1){
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route path={_url} component={type.card.tpl1.home()} />
                                    <Route component={type.card.tpl1.error()} />
                                </Switch>
                            </Router>
                            ,
                            dest    
                        )  
                    }
                }else{
                    console.log('暂无数据')
                }
            })
            .catch((error) =>{
                console.log(error)
            });    
        }    
    }else{
        console.log('bbb')
    }    
}else{
    console.log('404')
}

