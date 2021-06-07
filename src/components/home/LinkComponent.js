import React from "react";
import { Link } from "react-router-dom";
const LinkComponent = ({ route, name }) => {
	return (
		<address className="adress-container">
			<Link to={route} className="">
				{name}
			</Link>
		</address>
	);
};

export default LinkComponent;
