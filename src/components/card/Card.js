import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import "./style.css";

const Card = ({ name, thumbnail, title, id }) => {
	const location = useLocation();
	const history = useHistory();
	const handleOnClick = () => {
		history.push(`${location.pathname}/${id}`);
	};
	return (
		<Link className="card" to={`${location.pathname}/${id}`}>
			<figure>
				<img
					src={thumbnail.path + "/portrait_fantastic." + thumbnail.extension}
					aria-labelledby="character name"
					width="200px"
					onClick={handleOnClick}
				/>
			</figure>
			<header>
				<span >{name || title}</span>
			</header>
		</Link>
	);
};

export default Card;
