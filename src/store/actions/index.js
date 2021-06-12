import { getAllItems, getSingleCharacter } from "../../requests";
import { GET_CARD_ITEMS, GET_SINGLE_CHARACTER } from "../cases";

export const setCardsSection = async (offset, sectionName) => ({
	type: GET_CARD_ITEMS,
	payload: await getAllItems(offset, sectionName)
});

export const setCharacter = async (id) => ({
	type: GET_SINGLE_CHARACTER,
	payload: await getSingleCharacter(id)
});
