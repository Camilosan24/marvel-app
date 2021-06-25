import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

const Card = ({ name, thumbnail, title, id, locationPathname }) => {
	return (
		<Link  to={`${locationPathname}/${id}`} className="card">
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
