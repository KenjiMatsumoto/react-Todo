//jsの設定ファイル読み込み
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

//foundation用のcssファイル読み込み
$(document).foundation();

//cssファイルの読み込み
require('style!css!sass!applicationStyles')

//メイン処理
ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
