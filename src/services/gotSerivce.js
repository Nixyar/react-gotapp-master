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
        const res = this.getResource('/characters');
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
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        };
    }
}
