import { useLocation } from "react-router-dom";
import { useEffect, useState  } from "react";
import { useItemsContext } from '../../hooks/useItemsContext'
import Loading from '../../components/Loading'
import SingleSection from '../../components/singleSection'
import DetailsItem from '../../components/detailsItem'

import "./style.css";

const Item = () => {
	const location = useLocation()
	const { setItemToShow, state } = useItemsContext()
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
			if (!state.tempItemToShow.id) {
				setItemToShow({ id, sectionName, cardItem: null })
				return
			}
			if (state.tempItemToShow.id) {
				setItemInfo(state.tempItemToShow)
				setLoading(false)
			}
		}
		itemInfoExistAndExist()

	}, [state.tempItemToShow]);


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
