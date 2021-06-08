import { GET_CHARACTERS } from "../cases";

const initialState = {
	characters: [],
	comics: [],
	movies: [],
	tvshows: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARACTERS:
			return {
				...state,
				characters: [...action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
