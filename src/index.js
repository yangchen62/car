import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './javascript/component/Home';
import Car from './javascript/component/Car';
import Shopping from './javascript/component/Shopping';
import Order from './javascript/component/Order';
import Nav from './javascript/component/Nav';

ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/" component={Nav}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/car" component={Car}/>
            <Route path="/shopping" component={Shopping}/>
            <Route path="/order" component={Order}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
