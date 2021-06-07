import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/home";
import Characters from "../pages/characters";
import Layout from "../components/layout";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route exact path="/characters" component={Characters} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
