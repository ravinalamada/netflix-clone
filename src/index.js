import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import { seedDatabase } from './seed';

const config = {
	apiKey: "AIzaSyCzl_xkC0p26HlWiP7BmwRUTtj-osUFTeA",
  authDomain: "netflix-onja-prisca.firebaseapp.com",
  projectId: "netflix-onja-prisca",
  storageBucket: "netflix-onja-prisca.appspot.com",
  messagingSenderId: "569278933812",
  appId: "1:569278933812:web:32b6c4e4e503b2e30fd361",
};

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
