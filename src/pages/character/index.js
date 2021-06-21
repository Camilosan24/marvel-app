import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterById } from '../../requests'
import Loading from '../../components/Loading'
import SingleSection from '../../components/singleSection'
import { setDate } from '../../assets'
import "./style.css";

const Character = () => {
	const params = useParams();
	const [characterInfo, setCharacterInfo] = useState(null)
	const [loading, setLoading] = useState(true)

	//fetch character on load component
	useEffect(() => {
		setLoading(true)
		const fetchCharacterById = async () => {
			const res = await getSingleCharacterById(params.id)
			setCharacterInfo(res)
			setLoading(false)
		}
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
							<span className="info-tag">name:</span> <p>{characterInfo.name}</p>
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
				<SingleSection title="comics" items={characterInfo.comics?.items} />
				<SingleSection title="series" items={characterInfo.series?.items} />
				<SingleSection title="events" items={characterInfo.events?.items} />
			</main>
		</section>
	) : < Loading />

};

export default Character;
