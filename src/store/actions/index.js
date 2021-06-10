import { getAllItems } from "../../requests";
import { GET_CARD_ITEMS } from "../cases";

export const setCardsSection = async (offset, sectionName) => ({
	type: GET_CARD_ITEMS,
	payload: await getAllItems(offset, sectionName)
});
