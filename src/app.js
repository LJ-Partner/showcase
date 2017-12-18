import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import {Index} from './Pages/index.js';
import { HashRouter as Router,Route,Switch } from 'react-router-dom'; 
import { default as Home } from './page/Home/index.js';
import { default as About } from './page/About/index.js';
import { default as Products } from './page/Product/index.js';
import { default as Philosophy } from './page/Philosophy/index.js';
import { default as News } from './page/News/index.js';
import { default as NewsDetail } from './page/News/detail.js';
const dest = document.getElementById("root");
//import getRoutes from './routes.js';
ReactDOM.render(
	<Router >
        <Switch>
            <Route exact path='/:name' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/products/:id' component={Products} />
            <Route path='/Philosophy' component={Philosophy} />
            <Route path='/news/detail/:id' component={NewsDetail} />
            <Route path='/news' component={News} />
        </Switch>
	</Router>
  ,
  dest
);