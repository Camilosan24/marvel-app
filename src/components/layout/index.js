import React from "react";
import LinkComponent from "../home/LinkComponent";
import "./style.css";

const Layout = ({ children }) => {

	return (
		<div className="container">
			<header className="container__header">
				<div className="container__header-bg-title">
					<a href="https://developer.marvel.com/">
						<h1 className="container__header-title">marvel</h1>
					</a>
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
				<div className="main-content__background"></div>
			</main>

			<footer className="footer">
				<div className="footer__logo-container">
					<div className="footer__logo"><span className="footer__logo-letter">m</span></div>
				</div>
				<div className="footer__contact-info">
					<h1 className="footer__contact-info--uppercase">contact information</h1>
					<ul className="footer__list">
						<li className="footer__list-item">danielcamilo.sanchez@globant.com</li>
						<li className="footer__list-item">
							<i className="fab fa-linkedin-in"></i>
							<a className="footer__a" href="https://www.linkedin.com/in/daniel-camilo-sanchez-barrag%C3%A1n-9192221a7/">linkedin</a>
						</li>
						<li className="footer__list-item">
							<i className="fab fa-github"></i>
							<a className="footer__a" href="https://github.com/Camilosan24">github</a>
						</li>
					</ul>
				</div>
				<span className="footer__copy-right">©2021 MARVEL</span>
			</footer>
		</div>
	);
};

export default Layout;
