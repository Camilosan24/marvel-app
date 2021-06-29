import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
	return (
		<section className="welcome" clas aria-label="welcome">
			<div className="welcome__wrapper">
				<div className="welcome__wrapper--left">
					<header className="welcome__header">
						<h1 className="welcome__header-title">welcome! </h1>
						<h2 className="welcome__header-subtitle">enjoy this marvel's api</h2>
					</header>
					<div className="welcome__description">
						<p className="welcome__p">
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

						<ul className="welcome__list">
							<li>Characters</li>
							<li>Comics</li>
							<li>Series</li>
							<li>Events</li>
						</ul>
						<address className="welcome__address">
							<Link className="welcome__a" to="/characters">get started</Link>
						</address>
					</div>
				</div>
				<div className="welcome__wrapper--right">
					<img
						src="https://allegra.flowersetcfresno.com/pic/734091_full-fondos-de-pantalla-4k-marvel-vertical-spider-man-vertical-iphone-wallpaper-spiderman-avengers.jpg"
						alt="background"
						width="500px"
						height="1000px"
						className="welcome__img"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
