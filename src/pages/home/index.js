import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
	return (
		<section aria-label="welcome">
			<div className="welcoming-box">
				<div className="welcome-left">
					<header className="welcoming">
						<h1>welcome! </h1>
						<h2>enjoy this marvel's api</h2>
					</header>
					<div className="main-description">
						<p>
							The Marvel Cinematic Universe is a media franchise and shared
							universe, centered on a series of superhero films produced
							independently by Marvel Studios and based on the characters that
							appear in Marvel Comics publications.
						</p>
						<br />
						<p>
							In this web application, you're able to see all the content we have
							for you like comics, characters you love, tv shows and
							games, go ahead, and let's get fun.
						</p>

						<ul>
							<li>Characters</li>
							<li>Comics</li>
							<li>Series</li>
							<li>Events</li>
						</ul>
						<address>
							<Link to="/characters">get started</Link>
						</address>
					</div>
				</div>
				<div className="welcome-right">
					<img
						src="https://allegra.flowersetcfresno.com/pic/734091_full-fondos-de-pantalla-4k-marvel-vertical-spider-man-vertical-iphone-wallpaper-spiderman-avengers.jpg"
						alt="background"
						width="500px"
						height="1000px"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
