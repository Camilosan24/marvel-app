import React from "react";
import './style.css'

const Pagination = ({ changePage, page }) => {
	return (
		<div className="pagination">
			<button onClick={changePage} name="prev-page" aria-label="go to the previous page">
				<i className="fas fa-arrow-left"></i>
			</button>
			<div className="page-number" aria-label="page number">
				{page}
			</div>
			<button onClick={changePage} name="next-page" aria-label="go to the next page">
				<i className="fas fa-arrow-right"></i>
			</button>
		</div>
	);
};

export default Pagination;
