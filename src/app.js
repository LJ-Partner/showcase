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
import Api from './api/index.js';

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?3c974069eb858490ad7abef80621aef1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

if(category_name){
    //company_id 公司id
    //category_name 类别名字 微官网:website 分享名片:card 邀请函: invitation
    //item_id  对应字段 ItemID 模板id 唯一值
    var _url;
    if(category_name == 'website'){ //微官网
        if(company_id){
            axios.get(Api.api_prefix+company_id)
            .then((res) => {
                if(res.data.code && res.data.code == 200){
                    _url = '/:name_id/website';
                    if (res.data.content.website_tmp == 1 && res.data.content.allowed_website==1){
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route path={_url+'/message'} component={type.website.tpl1.message()} />
                                    <Route path={_url+'/join/detail/:job_id'} component={type.website.tpl1.joinDetail()} />
                                    <Route path={_url+'/join'} component={type.website.tpl1.join()} />
                                    <Route path={_url+'/news/detail/:news_id'} component={type.website.tpl1.newsDetail()} />
                                    <Route path={_url+'/news'} component={type.website.tpl1.news()} />
                                    <Route path={_url+'/products/:series_id/detail/:product_id'} component={type.website.tpl1.productDetail()} />
                                    <Route path={_url+'/products/:series_id'} component={type.website.tpl1.product()} />
                                    <Route path={_url+'/products/'} component={type.website.tpl1.product()} />
                                    <Route path={_url+'/about'} component={type.website.tpl1.about()} />
                                    <Route path={_url+'/concept'} component={type.website.tpl1.concept()} />
                                    <Route path={_url} component={type.website.tpl1.home()} />
                                    <Route component={type.error.error()} />
                                </Switch>
                            </Router>
                            ,
                            dest    
                        )  
                    } else {
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route component={type.error.notfound()} />
                                </Switch>
                            </Router>
                            ,
                            dest
                        )
                    }
                } else {
                    console.log('暂无数据')
                }
            })
            .catch((error) =>{
                ReactDOM.render(
                    <Router>
                        <Switch>
                            <Route component={type.error.error()} />
                        </Switch>
                    </Router>
                    ,
                    dest    
                )
            });    
        }
    }else if(category_name == 'card'){ //名片
        if(company_id){
            axios.get(Api.api_prefix+company_id)
            .then((res) => {
                if(res.data.code && res.data.code == 200){
                    _url = '/:name_id/card';           
                    if (res.data.content.card_tmp == 1 && res.data.content.allowed_card == 1){
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route path={_url} component={type.card.tpl1.home()} />
                                    <Route component={type.error.error()} />
                                </Switch>
                            </Router>
                            ,
                            dest    
                        )  
                    } else {
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route component={type.error.notfound()} />
                                </Switch>
                            </Router>
                            ,
                            dest
                        )
                    }
                } else{
                    console.log('暂无数据')
                }
            })
            .catch((error) =>{
                ReactDOM.render(
                    <Router>
                        <Switch>
                            <Route component={type.error.error()} />
                        </Switch>
                    </Router>
                    ,
                    dest    
                )  
            });    
        }    
    }else if(category_name == 'single'){ //名片
        if(company_id){
            axios.get(Api.api_prefix+company_id)
            .then((res) => {
                if(res.data.code && res.data.code == 200){
                    _url = '/:name_id/single';           
                    if(res.data.content.website_tmp == 1){
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route path={_url+'/video'} component={type.single.video.home()} />
                                    <Route path={_url+'/picture'} component={type.single.picture.home()} />
                                    <Route component={type.error.error()} />
                                </Switch>
                            </Router>
                            ,
                            dest    
                        )  
                    }
                } else if (res.data.code && res.data.code == 403) {
                    ReactDOM.render(
                        <Router>
                            <Switch>
                                <Route component={type.error.notfound()} />
                            </Switch>
                        </Router>
                        ,
                        dest
                    )
                } else{
                    console.log('暂无数据')
                }
            })
            .catch((error) =>{
                ReactDOM.render(
                    <Router>
                        <Switch>
                            <Route component={type.error.error()} />
                        </Switch>
                    </Router>
                    ,
                    dest    
                )  
            });    
        }    
    }else if(category_name == 'sign'){ //签到
        if(company_id){
            axios.get(Api.api_prefix+company_id)
            .then((res) => {
                if(res.data.code && res.data.code == 200){
                    _url = '/:name_id/sign/:sign_id';           
                    if (res.data.content.signer_tmp == 1 && res.data.content.allowed_sign==1){
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route path={_url+'/apply'} component={type.sign.tpl1.apply()} />
                                    <Route path={_url} component={type.sign.tpl1.home()} />
                                    <Route component={type.error.error()} />
                                </Switch>
                            </Router>
                            ,
                            dest    
                        )  
                    } else {
                        console.log("sign:1231")
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route component={type.error.notfound()} />
                                </Switch>
                            </Router>
                            ,
                            dest
                        )
                    }
                } else{
                    console.log('暂无数据')
                }
            })
            .catch((error) =>{
                ReactDOM.render(
                    <Router>
                        <Switch>
                            <Route component={type.error.error()} />
                        </Switch>
                    </Router>
                    ,
                    dest    
                )  
            });    
        }        
    }else if(category_name == 'invitation'){
        if(company_id){
            axios.get(Api.api_prefix+company_id)
            .then((res) => {
                if(res.data.code && res.data.code == 200){
                    _url = '/:name_id/invitation';            
                    if (res.data.content.invite_temp == 1 && res.data.content.allowed_invitation==1){
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route path={_url+'/demo'} component={type.invitation.tpl1.demo()} />
                                    <Route path={_url} component={type.invitation.tpl1.home()} />
                                    <Route component={type.error.error()} />
                                </Switch>
                            </Router>
                            ,
                            dest    
                        )  
                    } else {
                        ReactDOM.render(
                            <Router>
                                <Switch>
                                    <Route component={type.error.notfound()} />
                                </Switch>
                            </Router>
                            ,
                            dest
                        )
                    }
                } else{
                    console.log('暂无数据')
                }
            })
            .catch((error) =>{
                ReactDOM.render(
                    <Router>
                        <Switch>
                            <Route component={type.error.error()} />
                        </Switch>
                    </Router>
                    ,
                    dest    
                )  
            });      
        }      
    }else{
        ReactDOM.render(
            <Router>
                <Switch>
                    <Route component={type.error.error()} />
                </Switch>
            </Router>
            ,
            dest    
        )  
    }    
}else{
    ReactDOM.render(
        <Router>
            <Switch>
                <Route component={type.error.error()} />
            </Switch>
        </Router>
        ,
        dest    
    )  
}

