import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import {Index} from './Pages/index.js';
import { BrowserRouter  as Router,Route,Switch } from 'react-router-dom'; 
import { default as Home } from './page/Home/index.js';
import { default as About } from './page/About/index.js';
import { default as Products } from './page/Product/index.js';
import { default as ProductsDetail } from './page/Product/detail.js';
import { default as Philosophy } from './page/Philosophy/index.js';
import { default as News } from './page/News/index.js';
import { default as NewsDetail } from './page/News/detail.js';
const dest = document.getElementById("root");
import axios from 'axios';
axios.get('../../src/data/index.json')
.then(res => {
    console.log(res)
});
//import getRoutes from './routes.js';
ReactDOM.render(
	<Router >
        <Switch>
            <Route path='/:name/Philosophy' component={Philosophy} />
            <Route path='/:name/news/detail/:id' component={NewsDetail} />
            <Route path='/:name/news' component={News} />
            <Route path='/:name/products/detail/:id' component={ProductsDetail} />
            <Route path='/:name/products/:id' component={Products} />
            <Route path='/:name/about' component={About} />
            <Route path='/:name' component={Home} />
            <Route exact path='/' component={Home} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
	</Router>
  ,
  dest
);