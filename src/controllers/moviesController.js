const db = require('../../models/index');


const moviesController = {
    list: (req,res) => {

        db.Movies.findAll().then(function(movies){
            res.render('moviesList', {movies:movies});
        }).catch(err => {
            console.error('Error al obtener las películas:', err);
            res.status(500).send('Error al obtener las películas');
        });

        
    },

    detail: (req,res) => {
        const userId = req.params.id;
        db.Movies.findByPk(userId).then(function(movie){
            console.log(movie);
            res.render('moviesDetail', {movie:movie});
        }).catch(err => {
            console.error('Error al obtener las películas:', err);
            res.status(500).send('Error al obtener las películas');
        });
    },
    new: (req,res) => {
        db.Movies.findAll({
            limit: 5
          }).then(movies => {
            res.render('newestMovies', {movies:movies});
          }).catch(error => {
            console.error('Error:', error);
          });
    },
    recomended: (req, res) => {
        db.Movies.findAll({
            order: [['release_date', 'DESC']], // Ordenar por fecha de lanzamiento en orden descendente
            limit: 5 // Limitar a las 5 últimas películas
        }).then(movies => {
            res.render('recommendedMovies', { movies: movies });
        }).catch(error => {
            console.error('Error', error);
            res.status(500).send('Error al obtener las películas recomendadas');
        });

        
    },

    createBulkMovies: (req,res) => {

        const movies = req.body;

        db.Movies.bulkCreate(movies)
        .then(peliculasInsertadas => {
        console.log(peliculasInsertadas);
        res.status(201).json(peliculasInsertadas);
    })
    .catch(error => {
        console.error('Error al insertar las películas:', error);
    });
    }

}


module.exports = moviesController;


