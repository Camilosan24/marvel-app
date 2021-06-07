import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../../store/actions";

const Characters = () => {
	const [page, setPage] = useState(0);
	const characters = useSelector((state) => state.characters);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setCharacters(page));
		return () => {
			console.log("final");
		};
	}, [page]);
	return <div>{page}</div>;
};

export default Characters;
