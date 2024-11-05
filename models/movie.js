module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("Movie",
    {
    // Configuraciones de las columnas.
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
   
    image: {
        allowNull: true,
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:true
    },
   
    genre_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Genres',
            key:'id'
        },
        allowNull: false
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating:  {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: true

    },
    awards:{
        type: DataTypes.INTEGER
    }

    },
    {
    tableName: 'Movies',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });
   
    
    Movie.associate = function (models){
        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey:'genre_id'
        });
        Movie.belongsToMany(models.Actor,{
            as:'actors',
            through: 'actorMovie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })
    }

    return Movie;
    }