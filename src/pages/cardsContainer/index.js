import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext, useRef } from "react";
import { pageExist } from '../../assets'
import Pagination from "../../components/pagination";
import ListCards from '../../components/listCards'
import Loading from "../../components/Loading";
import Searcher from "../../components/searcher/Searcher";
import ItemsContext from '../../context/ItemsContext/ItemsContext'
import './style.css'

const CardsContainer = () => {
	const itemsContext = useContext(ItemsContext)
	const sectionName = useLocation().pathname.substring(1)
	const [itemsInformation, setItemsInformation] = useState([])
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const topSection = useRef()

	const changePage = (e) => {
		let name = e.currentTarget.name;
		topSection.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
		if (name === "prev-page" && page > 1) return setPage(page - 1);
		if (name === "next-page") return setPage(page + 1);
	};

	useEffect(() => {
		const updateAllItemsContext = () => {
			itemsContext.getItems(page, (page - 1) * 20, sectionName)
		}
		setLoading(true)
		updateAllItemsContext()
	}, [page])

	useEffect(() => {
		const setItemInformationByPage = () => {
			const newItemInformation = pageExist(itemsContext.state[sectionName + 'Items'], page)
			if (newItemInformation) {
				setItemsInformation(newItemInformation.results)
				setLoading(false)
			}
		}
		setItemInformationByPage()
	}, [itemsContext.state, page])

	const onClickCard = (item) => {
		itemsContext.setItemToShow(item)
	}


	return (
		<section className="section-container">
			{sectionName === 'characters' &&
				<Searcher
					setItemsInformation={setItemsInformation}
					onClickCard={onClickCard}
					sectionName={sectionName} />}
			{!loading ? <ListCards
				itemsInformation={itemsInformation}
				sectionName={sectionName}
				topSection={topSection}
				onClickCard={onClickCard} /> : <Loading />}
			<Pagination changePage={changePage} page={page} />
		</section>
	);
};

export default CardsContainer;