export default class ApiTmdb {
    _API_KEY = '?api_key=fcf247972b8f4e5c42eeb5aa3a0cfdd9';
    _API_BASE = `https://api.themoviedb.org/3/`;

    async getResource(url) {
        const res = await fetch(`${this._API_BASE}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, 
                             received ${res.status}`);
        }

        return await res.json();
    };

    getAllMovies = async(id) => {
        const res = await this.getResource(`movie/${id}${this._API_KEY}`);
        return res.results.map(this.getData);
    };
    getMovie = async(id) => {
        const item = await this.getResource(`movie/${id}${this._API_KEY}`);
        return this.getData(item);
    };
    getVideo = async(id) => {
        const res = await this.getResource(`movie/${id}${this._API_KEY}`);
        return res.results[0].key;
    };
    getSearchResults = async(query) => {
        const res = await this.getResource(`search/movie${this._API_KEY}&query=${query}`);
        return res.results.map(this.getData);
    };
    getSearchPagination = async(query, page) => {
        const res = await this.getResource(`search/movie${this._API_KEY}&query=${query}`);
        return res;
    };

    getData = (item) => {
        return {
            id: item.id,
            title: item.title,
            overview: item.overview,
            tagline: item.tagline,
            image: item.poster_path,
            backdrop: item.backdrop_path,
            date: item.release_date,
            vote: item.vote_average,
            genre: item.genres
        }
    };
};