
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define("Actors",
    {
    // Configuraciones de las columnas.
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },

    },

    {
    tableName: 'Actors',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });
   
    Actor.associate = function (models){
        Actor.belongsToMany(models.Movies,{
            as:'movies',
            through: 'ActorMovie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        });
    };


    return Actor;
    }