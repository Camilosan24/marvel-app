import React from "react";
import LinkComponent from "../home/LinkComponent";
import "./style.css";

const Layout = ({ children }) => {

	return (
		<div className="container">
			<header className="main-header">
				<div className="bg-title">
					<a href="https://developer.marvel.com/"><h1>marvel</h1></a>
				</div>
				<nav className="navigation">
					<LinkComponent route="/" name="home" />
					<LinkComponent route="/characters" name="characters" />
					<LinkComponent route="/comics" name="comics" />
					<LinkComponent route="/series" name="series" />
					<LinkComponent route="/events" name="events" />
				</nav>
			</header>

			<main className="main-content">
				{children}
				<div className="background"></div>
			</main>

			<footer>
				<div className="logo-container">
					<div className="logo"><span>m</span></div>
				</div>
				<div className="information-container">
					<h1>contact information</h1>
					<ul>
						<li>danielcamilo.sanchez@globant.com</li>
						<li>
							<i className="fab fa-linkedin-in"></i>
							<a href="https://www.linkedin.com/in/daniel-camilo-sanchez-barrag%C3%A1n-9192221a7/">linkedin</a>
						</li>
						<li>
							<i className="fab fa-github"></i>
							<a href="https://github.com/Camilosan24">github</a>
						</li>
					</ul>
				</div>
				<span className="reserverd-rights">©2021 MARVEL</span>
			</footer>
		</div>
	);
};

export default Layout;
