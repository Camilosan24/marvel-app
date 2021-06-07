import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
	return (
		<section aria-label="welcome">
			<header className="welcoming">
				<h1>welcome! </h1>
				<h2>enjoy this marvel's api</h2>
			</header>
			<div className="main-description">
				<p>
					Hello, welcome to this web application, you're able to see all the
					content we have for you like comics, characters you love, movies, tv
					shows and games, go ahead, and let's get fun.
				</p>
				<address>
					<Link to="/characters">get started</Link>
				</address>
			</div>
		</section>
	);
};

export default Home;
