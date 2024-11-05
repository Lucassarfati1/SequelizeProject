const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const actorMovie = sequelize.define("actorMovie",
    {
    // Configuraciones de las columnas.
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'Movie',
             key: 'id'
        }
    },
    actor_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'Actor',
             key: 'id'
        }
    },

    },

    {
    tableName: 'ActorMovie',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });
    actorMovie.associate = function(models) {
   actorMovie.belongsTo(models.Movie, { foreignKey: 'movie_id' });
    actorMovie.belongsTo(models.Actor, { foreignKey: 'actor_id' });
    };

    return actorMovie;
    }