import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout";
import CardsContainer from "../pages/cardsContainer";
import Character from "../pages/character/index";
import Comic from "../pages/comic/index";
import Serie from "../pages/serie";
import Events from "../pages/events";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route exact path="/characters" component={CardsContainer} />
					<Route exact path="/characters/:id" component={Character} />
					<Route exact path="/comics" component={CardsContainer} />
					<Route exact path="/comics/:id" component={Comic} />
					<Route exact path="/series" component={CardsContainer} />
					<Route exact path="/series/:id" component={Serie} />
					<Route exact path="/events" component={CardsContainer} />
					<Route exact path="/events/:id" component={Events} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
