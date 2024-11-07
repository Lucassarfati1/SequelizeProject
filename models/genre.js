
module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("Genres",
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
    ranking: {
        type: DataTypes.INTEGER
    }
    },
    {
    tableName: 'Genres',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });
   
    Genre.associate = function (models){
        Genre.hasMany(models.Movies, {
            as: 'movies',
            foreignKey:'genre_id'
        })
    } 


    return Genre;
    }