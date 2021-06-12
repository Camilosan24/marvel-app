import { useLocation } from "react-router-dom";
import { getAllItems } from '../../requests'
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination";
import Card from "../../components/card/Card";
import Loading from "../../components/Loading";
import Searcher from "../../components/searcher/Searcher";
import './style.css'

const CardsContainer = () => {
	const location = useLocation()
	const [itemsInformation, setItemsInformation] = useState([])
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);

	const changePage = (e) => {
		let name = e.currentTarget.name;
		if (name === "prev-page" && page > 0) return setPage(page - 1);
		if (name === "next-page") return setPage(page + 1);
	};

	useEffect(() => {
		setLoading(true)
		const fetchAllItems = async () => {
			const result = await getAllItems(page * 10, location.pathname)
			setItemsInformation(result)
			setLoading(false)
		}
		fetchAllItems()
		return () => {
		}
	}, [page])


	return (
		<section>
			<Searcher setItemsInformation={setItemsInformation} />
			{!loading ? (
				itemsInformation.map((cardItem, i) => {
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