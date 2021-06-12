import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCharacterById } from '../../requests'
import Loading from '../../components/Loading'
import "./style.css";

const Character = () => {
	const params = useParams();
	const [characterInfo, setCharacterInfo] = useState(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(true)
		const fetchCharacterById = async () => {
			const res = await getSingleCharacterById(params.id)
			console.log(res)
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
						alt=""
					/>
				</figure>
				<div className="info" aria-label="character information section">
					<ul>
						<li>
							<span className="info-tag">id:</span> {characterInfo.id}
						</li>
						<li>
							<span className="info-tag">name:</span> {characterInfo.name}
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
				<h1>Comics</h1>
				<ul>
					{characterInfo.comics.items.length !== 0 ? characterInfo.comics.items.map((comic, index) => {
						return <li key={index}>{comic.name}</li>
					}) : "No comics"}
				</ul>
			</main>
		</section>
	) : < Loading />

};

export default Character;
