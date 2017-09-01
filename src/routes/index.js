/**
 * Created by 0easy-23 on 2017/9/1.
 * 油路配置（方便本地打包，使用了HashRouter）;
 * tips:开发环境下面使用了browserHistory，打包上线的时候需要服务器进行配置;
 */
import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../containers/Home';
import Test from '../containers/Test';
import Login from '../containers/Login';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/test" component={Test}/>
            <Route path="/login" component={Login}/>
            <Redirect from="/undefined" to={{pathname: '/', search: '?mold=redirect'}}/>
        </Switch>
    </Router>
);
export default Routes;