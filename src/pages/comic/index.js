import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleComicById } from '../../requests'
import Loading from '../../components/Loading'
import "./style.css";

const Comic = () => {
	const params = useParams();
	const [characterInfo, setCharacterInfo] = useState(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(true)
		const fetchComicById = async () => {
			const res = await getSingleComicById(params.id)
			setCharacterInfo(res)
			setLoading(false)
		}
		fetchComicById()
	}, []);
	return !loading ? (
		<section className="character">
			<header>
				<figure>
					<img
						src={characterInfo.thumbnail?.path + "/portrait_uncanny." + characterInfo.thumbnail?.extension}
						alt=""
					/>
				</figure>
				<div className="info" aria-label="character information section">
					<ul>
						<li>
							<span className="info-tag">id:</span> {characterInfo.id}
						</li>
						<li>
							<span className="info-tag">title:</span> {characterInfo.title}
						</li>
						<li>
							<span className="info-tag">modified:</span> {characterInfo.modified}
						</li>
						<li>
							<span className="info-tag">description:</span> <p>{characterInfo.description ? characterInfo.description : 'No description available'}</p>
						</li>
					</ul>
				</div>
			</header>
			<main>
				<h1>Characters</h1>
				<ul>
					{characterInfo.characters.items.length !== 0 ? characterInfo.characters.items.map((comic, index) => {
						return <li key={index}>{comic.name}</li>
					}) : "No characters"}
				</ul>
			</main>
		</section>
	) : < Loading />

};

export default Comic;