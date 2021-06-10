import React from "react";
import "./style.css";

const Card = ({ name, thumbnail, title }) => {
	return (
		<div className="card">
			<figure>
				<img
					src={thumbnail.path + "/portrait_fantastic." + thumbnail.extension}
					alt={name || title}
					aria-labelledby={name || title}
					width="200px"
				/>
			</figure>
			<header>
				<h1 id={name || title}>{name || title}</h1>
			</header>
		</div>
	);
};

export default Card;
