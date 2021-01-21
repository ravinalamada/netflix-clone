import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FireBaseContext } from './context/firebase'

const config = {
  apiKey: "AIzaSyCzl_xkC0p26HlWiP7BmwRUTtj-osUFTeA",
  authDomain: "netflix-onja-prisca.firebaseapp.com",
  projectId: "netflix-onja-prisca",
  storageBucket: "netflix-onja-prisca.appspot.com",
  messagingSenderId: "569278933812",
  appId: "1:569278933812:web:32b6c4e4e503b2e30fd361"
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FireBaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles />
      <App />
    </FireBaseContext.Provider>
  </>, document.getElementById('root'));
