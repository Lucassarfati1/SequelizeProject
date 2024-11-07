

module.exports = (sequelize, DataTypes) => {
    const ActorMovie = sequelize.define("ActorMovie",
    {
    // Configuraciones de las columnas.
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'Movies',
             key: 'id'
        }
    },
    actor_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'Actors',
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
    ActorMovie.associate = function(models) {
   ActorMovie.belongsTo(models.Movies, { foreignKey: 'movie_id' });
    ActorMovie.belongsTo(models.Actors, { foreignKey: 'actor_id' });
    };

    return ActorMovie;
    }