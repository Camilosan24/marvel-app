import { GET_ALL_CHARACTERS } from "../cases";

const initialState = {
	characters: [],
	comics: [],
	movies: [],
	tvshows: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_CHARACTERS:
			return {
				...state,
				characters: [...state.characters, ...action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
