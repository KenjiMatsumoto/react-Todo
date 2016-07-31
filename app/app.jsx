//jsの設定ファイル読み込み
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import Login from 'Login';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

//foundation用のcssファイル読み込み
$(document).foundation();

//cssファイルの読み込み
require('style!css!sass!applicationStyles')

//メイン処理
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
