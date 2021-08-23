class GotService {
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

    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    getAllCharacters() {
        return this.getResource('/characters');
    }

    getAllBooks() {
        return this.getResource('/books');
    }

    getAllHouses() {
        return this.getResource('/houses');
    }
}


const got = new GotService();

got.getCharacter('123').then(res => console.log(res));
got.getAllCharacters().then(res => console.log(res));
got.getAllBooks().then(res => console.log(res));
got.getAllHouses().then(res => console.log(res));
