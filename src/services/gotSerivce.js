export class GotService {
    constructor() {
        this._apiUrl = 'https://www.anapioficeandfire.com/api/'
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiUrl}${url}`);

        if (!res.ok) {
            throw Error(`Error fetch by url: ${url}. Error status: ${res.status}`);
        }

        return await res.json();
    }

    getCharacter = async (id) => {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }

    getAllCharacters = async () => {
        const generateIdPage = Math.floor(Math.random() * 140 + 2);
        const res = await this.getResource(`/characters?page=${generateIdPage}&pageSize=5`);
        return res.map(this._transformChar);
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses');
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }

    _transformChar(char) {
        return {
            id: char.url.match(/\d+/g)[0], //По урлу мы находим номер id персонажа и переиспользуем для запросов
            name: char.name || 'Unknown',
            gender: char.gender || 'Unknown',
            born: char.born || 'Unknown',
            died: char.died || 'Unknown',
            culture: char.culture || 'Unknown',
        };
    }

    _transformBook(book) {
        return {
            id: book.url.match(/\d+/g)[0], //По урлу мы находим номер id книги и переиспользуем для запросов
            name: book.name,
            numberOfPages: book.numberOfPages || 'Unknown',
            publisher: book.publisher || 'Unknown',
            released: book.released || 'Unknown',
        };
    }

    _transformHouse(house) {
        return {
            id: house.url.match(/\d+/g)[0], //По урлу мы находим номер id дома и переиспользуем для запросов
            name: house.name,
            coatOfArms: house.coatOfArms,
            region: house.region || 'Unknown',
        };
    }
}
