import firebase from 'firebase';

try{
  var config = {
    apiKey: "AIzaSyCMS6_8GvVzSYJK9bxWuSFGIWlnPYdkEcg",
    authDomain: "mead-todo-app-59698.firebaseapp.com",
    databaseURL: "https://mead-todo-app-59698.firebaseio.com",
    storageBucket: "mead-todo-app-59698.appspot.com",
  };
  firebase.initializeApp(config);
} catch(e) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;
