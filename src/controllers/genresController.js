const db = require('../../models/index');

const genresController = {
    list: (req,res) => {
        
        db.Genres.findAll().then(genres => {
            res.render('genresList', {genres:genres});
        }).catch(err => {
            console.error('Error al obtener las películas:', err);
            res.status(500).send('Error al obtener las películas');
        });
    },
    detail: (req,res) => {
        const idGenre = req.params.id;
        
        db.Genres.findByPk(idGenre).then(genre => {
            console.log(genre);
            res.render('genresDetail', {genre : genre });
        }).catch(err => {
            console.error('Error al obtener las películas:', err);
            res.status(500).send('Error al obtener las películas');
        });
    }

}

module.exports = genresController;