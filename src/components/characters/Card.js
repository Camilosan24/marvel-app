import React from "react";
import "./style.css";

const Card = ({ name, thumbnail }) => {
	return (
		<div className="card">
			<figure>
				<img
					src={thumbnail.path + "/portrait_fantastic." + thumbnail.extension}
					alt={name}
					aria-labelledby={name}
					width="200px"
				/>
			</figure>
			<header>
				<h1 id={name}>{name}</h1>
			</header>
		</div>
	);
};

export default Card;
