const db = require('../../models/index');


const moviesController = {
    list: (req,res) => {

        db.Movies.findAll().then(function(movies){
            res.render('moviesList', {movies:movies});
        }).catch(err => {
            console.error('Error al obtener las películas:', err);
            res.status(500).send('Error al obtener las películas');
        });;

        
    },
}


module.exports = moviesController;


