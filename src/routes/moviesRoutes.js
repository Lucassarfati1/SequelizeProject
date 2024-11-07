const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.post('/movies/new', moviesController.createBulkMovies);
router.get('/movies/genres', moviesController.listMoviesGenres);
router.get('/movies/genres-all', moviesController.listMoviesGenresAll);


module.exports = router;