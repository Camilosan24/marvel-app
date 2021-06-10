import { GET_CARD_ITEMS } from "../cases";

const initialState = {
	cardItems: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CARD_ITEMS:
			return {
				...state,
				cardItems: [...action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
