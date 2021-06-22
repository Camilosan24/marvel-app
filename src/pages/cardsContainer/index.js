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
			try {
				const res = await getAllItems(page * 10, location.pathname)
				if (res) {
					setItemsInformation(res)
					return setLoading(false)
				}
				throw new Error('We couldnt find data')
			} catch (error) {
				setItemsInformation([])
			}
		}
		fetchAllItems()
	}, [page])


	return (
		<section>
			<Searcher setItemsInformation={setItemsInformation} />
			<div className="cards-container-box" placeholder="cards-container-box">
				{!loading ? (
					itemsInformation?.map((cardItem, i) => {
						return <Card {...cardItem} key={i} />;
					})
				) : (
					<Loading />
				)}
			</div>

			<Pagination changePage={changePage} page={page} />
		</section>
	);
};

export default CardsContainer;
