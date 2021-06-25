import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemsContext from '../../context/ItemsContext/ItemsContext'
import Loading from '../../components/Loading'
import SingleSection from '../../components/singleSection'
import DetailsItem from '../../components/detailsItem'

import "./style.css";

const Item = () => {
	const location = useLocation()
	const itemsContext = useContext(ItemsContext)
	const [itemInfo, setItemInfo] = useState({})
	const [loading, setLoading] = useState(false)
	const [_, sectionName, id] = location.pathname.split('/');

	const chooseQuantitySeriesToSend = () => {
		if (sectionName !== 'series' && sectionName === 'comics') return <SingleSection title="series" items={itemInfo.series} />;
		if (sectionName !== 'series') return <SingleSection title="series" items={itemInfo.series?.items} />
		return null;
	}

	//fetch items by section
	useEffect(() => {
		const itemInfoExistAndExist = () => {
			if (!itemsContext.state.tempItemToShow.id) {
				itemsContext.setItemToShow({ id, sectionName, cardItem: null })
				return
			}
			if (itemsContext.state.tempItemToShow.id) {
				setItemInfo(itemsContext.state.tempItemToShow)
				setLoading(false)
			}
		}
		itemInfoExistAndExist()

	}, [itemsContext.state.tempItemToShow]);


	return !loading ? (
		<section className="character">
			<header>
				<DetailsItem itemInfo={itemInfo} />
			</header>
			<main className="section-single-item">
				{sectionName !== 'comics' && itemInfo.comics ? <SingleSection title="comics" items={itemInfo?.comics?.items} /> : null}
				{itemInfo.id && chooseQuantitySeriesToSend()}
				{sectionName !== 'events' && itemInfo.events ? <SingleSection title="events" items={itemInfo?.events?.items} /> : null}
				{sectionName !== 'characters' && itemInfo.characters ? <SingleSection title="characters" items={itemInfo?.characters?.items} /> : null}
			</main>
		</section>
	) : < Loading />
};

export default Item;
