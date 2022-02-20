class MovieStore {
    constructor() { 
        this.movies = require('../data/movies.json'); 
    }

    getAll() {
        return this.movies;
    }

    getDetail(keyword) {
        const movie = this.movies.find((x) => x.Title.toLowerCase() === keyword.toLowerCase().trim());
        if(movie !== null) {
            return movie;
        }
    }

    add(newMovie) { 
        if(newMovie !== null) { 
            this.movies.push(newMovie); 
        } 
    }

    update(title,newMovie) { 
        const oldMovie = this.getDetail(title);
        if(oldMovie === null || oldMovie === undefined) {
            return;
        }
        else{
            const index = this.movies.indexOf(oldMovie); 
            this.movies[index] = newMovie;
        }
    }

    remove(title) {
        const movie = this.getDetail(title);
        const index = this.movies.indexOf(movie);
        if(index !== -1){
            this.movies.splice(index,1);
        }
    }

    search(title) {
        const searchList = this.movies.filter((x) => x.Title.toLowerCase().includes(title.toLowerCase().trim()));
        return searchList;
    }
}

module.exports = MovieStore;