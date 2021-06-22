import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./style.css";

const Card = ({ name, thumbnail, title, id }) => {
	const location = useLocation();
	const history = useHistory();
	const handleOnClick = () => {
		history.push(`${location.pathname}/${id}`);
	};
	return (
		<div className="card" >
			<figure>
				<img
					src={thumbnail.path + "/portrait_fantastic." + thumbnail.extension}
					alt={name || title}
					width="200px"
					onClick={handleOnClick}
				/>
			</figure>
			<header>
				<h1>{name || title}</h1>
			</header>
		</div>
	);
};

export default Card;
