import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterById, getSingleComicById, getSingleEventById, getSingleSerieById } from '../../requests'
import Loading from '../../components/Loading'
import SingleSection from '../../components/singleSection'
import DetailsItem from '../../components/detailsItem'

import "./style.css";

const Item = () => {
	const location = useLocation()
	const params = useParams();
	const [itemInfo, setitemInfo] = useState(null)
	const [loading, setLoading] = useState(true)
	const sectionName = location.pathname.split('/')[1];

	const getSectionData = async () => {
		if (sectionName === 'characters') return await getSingleCharacterById(params.id)
		if (sectionName === 'comics') return await getSingleComicById(params.id)
		if (sectionName === 'events') return await getSingleEventById(params.id)
		if (sectionName === 'series') return await getSingleSerieById(params.id)
	}

	const chooseQuantitySeriesToSend = () => {
		if (sectionName !== 'series' && sectionName === 'comics') return <SingleSection title="series" items={itemInfo.series} />;
		if (sectionName !== 'series') return <SingleSection title="series" items={itemInfo.series?.items} />
		return null;
	}

	//fetch items by section
	useEffect(() => {
		//functions
		const fetchCharacterById = async () => {
			const res = await getSectionData()
			await res.thumbnail.path.replace('http', 'https')
			setitemInfo(res)
			setLoading(false)
		}

		//execution flow
		setLoading(true)
		fetchCharacterById()

	}, []);
	return !loading ? (
		<section className="character">
			<header>
				<DetailsItem itemInfo={itemInfo} />
			</header>
			<main className="section-single-item">
				{sectionName !== 'comics' && itemInfo.comics ? <SingleSection title="comics" items={itemInfo.comics?.items} /> : null}
				{chooseQuantitySeriesToSend()}
				{sectionName !== 'events' && itemInfo.events ? <SingleSection title="events" items={itemInfo.events?.items} /> : null}
				{sectionName !== 'characters' && itemInfo.characters ? <SingleSection title="characters" items={itemInfo.characters?.items} /> : null}
			</main>
		</section>
	) : < Loading />
};

export default Item;
