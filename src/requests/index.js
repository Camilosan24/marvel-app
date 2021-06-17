const URI = "https://gateway.marvel.com/v1/public/";
const CREDENTIALS = "ts=1&apikey=5230904141b43d248f5e8468e0ff6759&hash=81ab3e48092d910b0c726ab8f0e902be";
// const CREDENTIALS = "ts=2&apikey=3ccb844be67278a4ebfc4141e033506b&hash=23f4870dbbf66c627b83480fcdcf4d4e";

export function getAllItems(offset, section) {
	return new Promise((resolve, reject) => {
		fetch(`${URI + section}?limit=20&offset=${offset}&${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(res.data.results))
			.catch((err) => {
				reject('no se pudo obtener');
			});
	});
}

export function getSingleCharacterById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/characters/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject('no se pudo obtener');
			});
	});
}

export function getSingleCharacterByStartName(name) {
	return new Promise((resolve, reject) => {
		if (typeof name !== 'string') return reject('no se pudo obtener')
		const nameToSend = name.replace(' ', "%20")
		fetch(`${URI}/characters?nameStartsWith=${nameToSend}&${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject('no se pudo obtener');
			});
	});
}

export function getSingleComicById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/comics/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject('no se pudo obtener');
			});
	});
}

export function getSingleSerieById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/series/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject('no se pudo obtener');
			});
	});
}


export function getSingleEventById(id) {
	return new Promise((resolve, reject) => {
		fetch(`${URI}/events/${id}?${CREDENTIALS}`)
			.then((res) => res.json())
			.then((res) => resolve(...res.data.results))
			.catch((err) => {
				reject('no se pudo obtener');
			});
	});
}
