const express = require('express');
const paginate = require('../util/paginate');

const movieRouter = express.Router();

const moviesStore = require('../store/movieStore');
const movies = new moviesStore(); 

// GET ALL MOVIES [GET: /movies]
movieRouter.get('/', (req,res) => {
    // http://localhost:5000/movies?title=the
    const query = req.query.title;            // Lấy ra query string sau dấu ?
    let page = parseInt(req.query.page) || 1; // Trang bao nhiêu
    let size = parseInt(req.query.size) || 2; // Tổng phần tử trong 1 trang
    if(query) {
        const listMovieQuery = movies.search(query);
        if(listMovieQuery.length > 0) {
            const movieListPaginationQuery = paginate(listMovieQuery,size,page);
            return res.json({
                success: true, 
                message: "Get List Movie Success", 
                data: movieListPaginationQuery, 
                page: page, 
                size: size,
                totalPage: movieListPaginationQuery.length
            }); 
        }
        else {
            return res.json({success: false, message: "Not Found Movie"});
        }
    }
    else {
        const movieListPagination = paginate(movies.getAll(),size,page)
        return res.json({
            data: movieListPagination,
            page: page, 
            size: size,
            totalPage: movies.length
        });
    }
})

// GET DETAIL MOVIE [GET: /title]
movieRouter.get('/:title', (req,res) => {
    const keyword = req.params.title;
    const movie = movies.getDetail(keyword);
    if(movie === null || movie === undefined) { 
        return res.json({success: false, message: "Not Found Club"});
    }
    else { 
        return res.json({success: true, message: "Found Club", data: movie});
    }
})

// ADD NEW MOVIE [POST: /movies]
movieRouter.post('/', (req,res) => {
    const title = req.body.Title;
    const movie = movies.getDetail(title);
    // Validation
    if(!title || title.trim() === "" || title.length === 0) {
        return res.json({success: false, message: "Invalid or missing title"});
    }
    // Check Exists
    else if(movie !== null && movie !== undefined) {
        return res.json({success: false, message: "Title is exists"});
    }
    // Add Movie
    else{
        const newMovie = req.body;
        if(newMovie === null || newMovie === undefined) { 
            return res.json({success: false, message: "Add Movie Failed"});
        }
        else { 
            movies.add(newMovie);
            return res.json({success: true, message: "Add Movie Success", data: newMovie}); 
        }
    }
})

// UPDATE MOVIE [PUT: /title]
movieRouter.put('/:title', (req,res) => {
    const title = req.params.title;
    const newMovie = req.body;
    const movie = movies.getDetail(title);
    if(movie === null || movie === undefined) {
        return res.json({success: false, message: "Not Found Movie"});
    }
    else if(newMovie === null || newMovie === undefined) { 
        return res.json({success: false, message: "Update Movie Failed"});
    }
    else { 
        movies.update(title,newMovie);
        return res.json({success: true, message: "Update Movie Success", data: newMovie}); 
    }
})

// DELETE MOVIE [DELETE: /title]
movieRouter.delete('/:title', (req,res) => {
    const title = req.params.title;
    const movie = movies.getDetail(title);
    if(movie === null || movie === undefined) {
        return res.json({success: false, message: "Not Found Movie"});
    }
    else { 
        movies.remove(title);
        return res.json({success: true, message: "Delete Movie Success"}); 
    }
})

module.exports = movieRouter;