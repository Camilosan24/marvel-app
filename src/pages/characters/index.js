import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../../store/actions";
import Card from "../../components/characters/Card";
import Pagination from "../../components/pagination";
import Loading from "../../components/Loading";
import "./style.css";

const Characters = ({ section }) => {
	console.log(section);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const characters = useSelector((state) => state.characters);
	const dispatch = useDispatch();

	const changePage = (e) => {
		let name = e.currentTarget.name;
		if (name === "prev-page" && page > 0) return setPage(page - 1);
		if (name === "next-page") return setPage(page + 1);
	};

	useEffect(() => {
		setLoading(true);
		const dispatchSetCharacters = async () => {
			await dispatch(setCharacters(page * 20));
			setLoading(false);
		};

		dispatchSetCharacters();
		window.scrollTo(0, 0);
		return () => {};
	}, [page, dispatch]);
	return (
		<section className="characters">
			{!loading ? (
				characters.map((character, i) => {
					return <Card {...character} key={i} />;
				})
			) : (
				<Loading />
			)}
			<Pagination changePage={changePage} page={page} />
		</section>
	);
};

export default Characters;
