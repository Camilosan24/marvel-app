import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { setCardsSection } from "../../store/actions";
import Pagination from "../../components/pagination";
import Card from "../../components/card/Card";
import Loading from "../../components/Loading";

const CardsContainer = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const cardItems = useSelector((state) => state.cardItems);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);

	const changePage = (e) => {
		let name = e.currentTarget.name;
		if (name === "prev-page" && page > 0) return setPage(page - 1);
		if (name === "next-page") return setPage(page + 1);
	};

	useEffect(() => {
		setLoading(true);
		const dispatchSetCardItems = async () => {
			await dispatch(setCardsSection(page * 20, location.pathname));
			setLoading(false);
		};
		dispatchSetCardItems();
	}, [page, dispatch]);
	return (
		<section>
			{!loading ? (
				cardItems.map((cardItem, i) => {
					return <Card {...cardItem} key={i}></Card>;
				})
			) : (
				<Loading />
			)}
			<Pagination changePage={changePage} page={page} />
		</section>
	);
};

export default CardsContainer;
