import React from "react";
import './style.css'

const Pagination = ({ changePage, page }) => {
	return (
		<div className="pagination">
			<button onClick={changePage} name="prev-page">
				<i className="fas fa-arrow-left"></i>
			</button>
			{page + 1}
			<button onClick={changePage} name="next-page">
				<i className="fas fa-arrow-right"></i>
			</button>
		</div>
	);
};

export default Pagination;
