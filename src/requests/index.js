const URI = "http://gateway.marvel.com/v1/public/";
const CREDENTIALS =
	"ts=1&apikey=5230904141b43d248f5e8468e0ff6759&hash=81ab3e48092d910b0c726ab8f0e902be";

export function getAllItems(offset, section) {
	return new Promise((resolve, reject) => {
		fetch(`${URI + section}?limit=20&offset=${offset}&${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(res.data.results))
			.catch((err) => {
				reject(err);
			});
	});
}

export function getSingleCharacterById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/characters/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject(err);
			});
	});
}

export function getSingleCharacterByStartName(name) {
	const nameToSend = name.replace(' ', "%20")
	return new Promise((resolve, reject) => {
		fetch(`${URI}/characters?nameStartsWith=${nameToSend}&${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject(err);
			});
	});
}

// resolve({ uno: res.json(), second: `${URI}/characters?nameStartsWith=${nameToSend}?${CREDENTIALS}` })


export function getSingleComicById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/comics/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject(err);
			});
	});
}

export function getSingleSerieById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/series/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject(err);
			});
	});
}


export function getSingleEventById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/events/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject(err);
			});
	});
}
