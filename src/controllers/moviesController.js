const { Association } = require('sequelize');
const db = require('../../models/index');


const moviesController = {
    list: (req,res) => {

        db.Movies.findAll().then(function(movie){
            res.render('moviesList', {movie:movie});
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
          }).then(movie => {
            res.render('newestMovies', {movie:movie});
          }).catch(error => {
            console.error('Error:', error);
          });
    },
    recomended: (req, res) => {
        db.Movies.findAll({
            order: [['release_date', 'DESC']], // Ordenar por fecha de lanzamiento en orden descendente
            limit: 5 // Limitar a las 5 últimas películas
        }).then(movie => {
            res.render('recommendedMovies', { movie: movie });
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
        res.status(500).json({ error: 'Error al insertar las películas' });
    });
    },
    listMoviesGenres: (req,res) => {
        db.Movies.findByPk(1,{ include: ['genre'] })
    .then((pelicula) => {
        console.log(pelicula.genre);
    })
    .catch(error => console.log(error));
    },
    listMoviesGenresAll: (req,res) => {
        db.Movies.findAll({ include: 
            [{
                model: db.Genres,  // Usa directamente el modelo 'Genres'
                as: 'genre'        // Asegúrate de que el alias coincida
              }]
        }).
        then((peliculas) => {
            peliculas.forEach(pelicula => {  // Usa 'forEach' para iterar sobre el array
                // Asegúrate de acceder a 'pelicula.genre.name' para obtener el nombre del género
                console.log(`Título: ${pelicula.title}, Género: ${pelicula.genre ? pelicula.genre.name : 'No genre assigned'}`);
            });
        })
        .catch(error => console.log(error));
    }

}


module.exports = moviesController;


