import { useLocation } from "react-router-dom";
import { getAllItems } from '../../requests'
import { useEffect, useState } from "react";
import Pagination from "../../components/pagination";
import ListCards from '../../components/listCards'
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

		const fetchAllItems = async () => {
			try {
				const res = await getAllItems(page * 10, location.pathname)
				if (res) {
					setLoading(false)
					return setItemsInformation(res)
				}
				throw new Error('We couldnt find data')
			} catch (error) {
				setItemsInformation([])
			}
		}
		setLoading(true)
		fetchAllItems()
	}, [page])


	return (
		<section className="section-container">
			{location.pathname === '/characters' && <Searcher setItemsInformation={setItemsInformation} />}
			{!loading ? <ListCards itemsInformation={itemsInformation} /> : <Loading />}
			<Pagination changePage={changePage} page={page} />
		</section>
	);
};

export default CardsContainer;