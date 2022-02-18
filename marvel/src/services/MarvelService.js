
// get request using fetch
class MarvelService {
// constants 
    _apiBase = `https://gateway.marvel.com:443/v1/public/`;
    _apiKey = `apikey=3f79bdb96234b3903343b01ff26e6117`;

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
    // method to get characters from API
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
    // method to get oneCharacter by ID
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;