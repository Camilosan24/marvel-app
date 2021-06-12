import React from "react";
import LinkComponent from "../home/LinkComponent";
import "./style.css";

const Layout = ({ children }) => {
	return (
		<div className="container">
			<header className="main-header">
				<div className="bg-title">
					<h1>marvel</h1>
				</div>
				<nav className="navigation">
					<LinkComponent route="/" name="home" />
					<LinkComponent route="/characters" name="characters" />
					<LinkComponent route="/comics" name="comics" />
					<LinkComponent route="/series" name="series" />
					<LinkComponent route="/events" name="events" />
				</nav>
			</header>
			<main>
				{children}
				<div className="background"></div>
			</main>
			<footer>
			</footer>
		</div>
	);
};

export default Layout;
