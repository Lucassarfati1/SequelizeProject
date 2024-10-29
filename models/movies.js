module.exports = (sequelize, DataTypes) => {
    const Movies = sequelize.define("Movies",
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
        type: DataTypes.DATE

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
   
    return Movies;
    }