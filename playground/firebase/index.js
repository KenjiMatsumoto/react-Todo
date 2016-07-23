import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCMS6_8GvVzSYJK9bxWuSFGIWlnPYdkEcg",
  authDomain: "mead-todo-app-59698.firebaseapp.com",
  databaseURL: "https://mead-todo-app-59698.firebaseio.com",
  storageBucket: "mead-todo-app-59698.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Kenji',
      age: 25
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
