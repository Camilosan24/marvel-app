import { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ItemsState from '../context/ItemsContext/ItemsState'
import Layout from '../components/layout'
import Home from '../pages/home'
import PageNotFound from '../pages/404'

const CardsContainer = lazy(() => import('../pages/cardsContainer'))
const Item = lazy(() => import('../pages/item'))



const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Suspense fallback={<div>loading...</div>}>
						<Route exact path="/" component={Home} />
						<ItemsState>
							<Route exact path="/characters" component={CardsContainer} />
							<Route exact path="/comics" component={CardsContainer} />
							<Route exact path="/series" component={CardsContainer} />
							<Route exact path="/events" component={CardsContainer} />
							<Route exact path="/characters/:id" component={Item} />
							<Route exact path="/comics/:id" component={Item} />
							<Route exact path="/series/:id" component={Item} />
							<Route exact path="/events/:id" component={Item} />
						</ItemsState>
					</Suspense>
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
