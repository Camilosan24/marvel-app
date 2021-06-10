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
