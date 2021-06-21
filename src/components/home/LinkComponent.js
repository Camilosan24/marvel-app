import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
const LinkComponent = ({ route, name }) => {
	const location = useLocation()
	return (
		<address className="adress-container">
			<Link to={route} className={route.includes(location.pathname) && location.pathname !== "/" ? "section-active" : ''}>
				{name}
			</Link>
		</address>
	);
};

export default LinkComponent;
