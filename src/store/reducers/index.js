import { GET_CARD_ITEMS, GET_SINGLE_CHARACTER } from "../cases";

const initialState = {
	cardItems: [],
	character: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CARD_ITEMS:
			return {
				...state,
				cardItems: [...action.payload],
			};
			case GET_SINGLE_CHARACTER:
				return {
					...state,
					character: action.payload,
				};
		default:
			return state;
	}
};

export default reducer;
