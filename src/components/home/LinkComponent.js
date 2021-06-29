import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
const LinkComponent = ({ route, name }) => {
	const location = useLocation()
	return (
		<address className="navigation__adress">
			<Link to={route} className={`navigation__a ${route.includes(location.pathname) && location.pathname !== "/" ? "navigation__a--active" : ''}`}>
				{name}
			</Link>
		</address>
	);
};

export default LinkComponent;
