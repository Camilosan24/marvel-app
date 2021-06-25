import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

const Card = ({ name, thumbnail, title, id, sectionName,onClickCard }) => {
	return (
		<Link  to={`/${sectionName}/${id}`} className="card" onClick={onClickCard}>
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
