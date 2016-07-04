//jsの設定ファイル読み込み
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//foundation用のcssファイル読み込み
$(document).foundation();

//cssファイルの読み込み
require('style!css!sass!applicationStyles')

//メイン処理
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
