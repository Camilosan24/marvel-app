import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleEventById } from '../../requests'
import Loading from '../../components/Loading'
import SingleSection from '../../components/singleSection'
import { setDate } from '../../assets'

const Events = () => {
	const params = useParams();
	const [characterInfo, setCharacterInfo] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		const fetchEventById = async () => {
			const res = await getSingleEventById(params.id)
			setCharacterInfo(res)
			setLoading(false)
		}
		fetchEventById()

	}, []);
	return !loading ? (
		<section className="character">
			<header>
				<figure>
					<img
						src={characterInfo.thumbnail?.path + "/portrait_uncanny." + characterInfo.thumbnail?.extension}
						alt={characterInfo.title}
					/>
				</figure>
				<div className="info" aria-label="event information section">
					<ul>
						<li>
							<span className="info-tag">id:</span> <p>{characterInfo.id}</p>
						</li>
						<li>
							<span className="info-tag">title:</span> <p>{characterInfo.title}</p>
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
				<SingleSection title="characters" items={characterInfo.characters.items} />
				<SingleSection title="comics" items={characterInfo.comics.items} />
				<SingleSection title="series" items={characterInfo.series.items} />
			</main>
		</section>
	) : < Loading />

};

export default Events;