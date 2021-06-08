import { getAllCharacters } from "../../requests";
import { GET_CHARACTERS } from "../cases";

export const setCharacters = async (offset) => ({
	type: GET_CHARACTERS,
	payload: await getAllCharacters(offset),
});
