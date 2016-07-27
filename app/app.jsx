//jsの設定ファイル読み込み
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// import './../playground/firebase/index';

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//foundation用のcssファイル読み込み
$(document).foundation();

//cssファイルの読み込み
require('style!css!sass!applicationStyles')

//メイン処理
ReactDOM.render(
  <Provider store={store}>
      <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
