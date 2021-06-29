import React from "react";
import './style.css'

const Pagination = ({ changePage, page }) => {
	return (
		<div className="pagination">
			<button className="pagination__button" onClick={changePage} name="prev-page" aria-label="go to the previous page">
				<i className="fas fa-arrow-left"></i>
			</button>
			<div className="pagination__number-box" aria-label="page number">
				<span className="pagination__number">{page}</span>
			</div>
			<button className="pagination__button" onClick={changePage} name="next-page" aria-label="go to the next page">
				<i className="fas fa-arrow-right"></i>
			</button>
		</div>
	);
};

export default Pagination;
