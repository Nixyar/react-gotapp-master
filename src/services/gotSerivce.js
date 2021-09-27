export class GotService {
    constructor() {
        this._apiUrl = 'https://www.anapioficeandfire.com/api/'
    }
    async getResource(url) {
        const res = await fetch(`${this._apiUrl}${url}`);

        if (!res.ok) {
            throw Error(`Error fetch by url: ${url}. Error status: ${res.status}`);
        }

        return await res.json();
    }

    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }

    async getAllCharacters() {
        const generateIdPage = Math.floor(Math.random() * 140 + 2);
        const res = await this.getResource(`/characters?page=${generateIdPage}&pageSize=5`);
        return res.map(this._transformChar);
    }

    getAllBooks() {
        return this.getResource('/books');
    }

    getAllHouses() {
        return this.getResource('/houses');
    }

    _transformChar(char) {
        return {
            url: char.url,
            name: char.name || 'Unknown',
            gender: char.gender || 'Unknown',
            born: char.born || 'Unknown',
            died: char.died || 'Unknown',
            culture: char.culture || 'Unknown',
        };
    }
}
