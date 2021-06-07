import { getAllCharacters } from "../../requests";
import { GET_ALL_CHARACTERS } from "../cases";

export const setCharacters = async (offset) => ({
	type: GET_ALL_CHARACTERS,
	payload: await getAllCharacters(offset),
});
