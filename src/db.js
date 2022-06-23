import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBxJQOEuVtVI98xbTv9iO-ABoSlOMK-Kqw",
    authDomain: "chat-vue-cb54f.firebaseapp.com",
    projectId: "chat-vue-cb54f",
    storageBucket: "chat-vue-cb54f.appspot.com",
    messagingSenderId: "445527850338",
    appId: "1:445527850338:web:9ee574b6f084ac3570803b"
}

const db = firebase.initializeApp(config);
export default db;