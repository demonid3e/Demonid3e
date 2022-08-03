import { useHttp } from "../hooks/http.hook";


// get request using fetch
const useMarvelService = () => {

    const {loading, request, error} = useHttp();

// constants 
    const _apiBase = `https://gateway.marvel.com:443/v1/public/`;
    const _apiKey = `apikey=3f79bdb96234b3903343b01ff26e6117`;
    const _baseOffset = 210;

    // method to get characters from API
    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter)
    }
    // method to get oneCharacter by ID
   const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }


    const _transformCharacter = (char) => {
  

        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    return {loading, error, getAllCharacters, getCharacter}
}

export default useMarvelService;