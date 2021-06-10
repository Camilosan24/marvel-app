import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout";
import CardsContainer from "../pages/cardsContainer";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route exact path="/characters" component={CardsContainer} />
					<Route exact path="/comics" component={CardsContainer} />
					<Route exact path="/series" component={CardsContainer} />
					<Route exact path="/events" component={CardsContainer} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
