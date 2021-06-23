import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterById, getSingleComicById, getSingleEventById, getSingleSerieById } from '../../requests'
import Loading from '../../components/Loading'
import SingleSection from '../../components/singleSection'
import { setDate } from '../../assets'
import "./style.css";

const Character = () => {
	const location = useLocation()
	const params = useParams();
	const [characterInfo, setCharacterInfo] = useState(null)
	const [loading, setLoading] = useState(true)
	const sectionName = location.pathname.split('/')[1];

	const getSectionData = async () => {
		if (sectionName === 'characters') return await getSingleCharacterById(params.id)
		if (sectionName === 'comics') return await getSingleComicById(params.id)
		if (sectionName === 'events') return await getSingleEventById(params.id)
		if (sectionName === 'series') return await getSingleSerieById(params.id)
	}

	const chooseQuantitySeriesToSend = () => {
		if (sectionName !== 'series' && sectionName === 'comics') return <SingleSection title="series" items={characterInfo.series} />;
		if (sectionName !== 'series') return <SingleSection title="series" items={characterInfo.series?.items} />
		return null;

	}

	//fetch items by section
	useEffect(() => {
		//functions
		const fetchCharacterById = async () => {
			const res = await getSectionData()
			setCharacterInfo(res)
			setLoading(false)
		}

		//execution flow
		setLoading(true)
		fetchCharacterById()
	}, []);
	return !loading ? (
		<section className="character">
			<header>
				<figure>
					<img
						src={characterInfo.thumbnail?.path + "/portrait_uncanny." + characterInfo.thumbnail?.extension}
						alt={characterInfo.name}
					/>
				</figure>
				<div className="info" aria-label="character information section">
					<ul>
						<li>
							<span className="info-tag">id:</span><p> {characterInfo.id}</p>
						</li>
						<li>
							<span className="info-tag">{characterInfo.name ? 'name' : 'title'}:</span> <p>{characterInfo.name || characterInfo.title}</p>
						</li>
						<li>
							<span className="info-tag">modified:</span> <time dateTime={setDate(characterInfo.modified)}> {setDate(characterInfo.modified)}</time>
						</li>
						<li>
							<span className="info-tag">description:</span> <p>{characterInfo.description ? characterInfo.description : 'No description available'}</p>
						</li>
					</ul>
				</div>
			</header>
			<main className="section-single-item">
				{sectionName !== 'comics' && characterInfo.comics ? <SingleSection title="comics" items={characterInfo.comics?.items} /> : null}
				{chooseQuantitySeriesToSend()}
				{sectionName !== 'events' && characterInfo.events ? <SingleSection title="events" items={characterInfo.events?.items} /> : null}
				{sectionName !== 'characters' && characterInfo.characters ? <SingleSection title="characters" items={characterInfo.characters?.items} /> : null}
			</main>
		</section>
	) : < Loading />
};

export default Character;
