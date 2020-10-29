import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layout/Layout";
import { NavigationBar } from "./layout/Navigationbar";
import { NotFound } from "./pages/NotFound";
import { ConfigurationList } from "./configuration/ConfigurationList";
import { ConfigurationForm } from "./configuration/ConfigurationForm";
const firebase = require("firebase");
require("firebase/firestore");

class App extends Component {
	render() {
		const firebaseConfig = {
			apiKey: "AIzaSyA5ivRhYZW9XA68GhXoxtUma6iO_jaajno",
			authDomain: "conamore-a9b8a.firebaseapp.com",
			databaseURL: "https://conamore-a9b8a.firebaseio.com",
			projectId: "conamore-a9b8a",
			storageBucket: "conamore-a9b8a.appspot.com",
			messagingSenderId: "364815957005",
			appId: "1:364815957005:web:24f00a1cc469b1ea12a944",
			measurementId: "G-J3M4552DZD",
		};
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}

		return (
			<div className="App">
				<Router>
					<NavigationBar />
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								path="/configuration/create"
								component={ConfigurationForm}
							/>
							<Route path="/configuration" component={ConfigurationList} />
							<Route component={NotFound} />
						</Switch>
					</Layout>
				</Router>
			</div>
		);
	}
}

export default App;
