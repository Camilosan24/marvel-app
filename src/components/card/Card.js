import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

const Card = ({ name, thumbnail, title, id, locationParam }) => {
	return (
		<Link className="card" to={`${locationParam.pathname}/${id}`}>
			<figure>
				<img
					src={thumbnail.path + "/portrait_fantastic." + thumbnail.extension}
					alt={name || title}
					width="200px"
				/>
			</figure>
			<header>
				<h1>{name || title}</h1>
			</header>
		</Link>
	);
};

export default Card;
