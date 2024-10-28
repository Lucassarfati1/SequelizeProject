module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("Genre",
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
    }
    },
    {
    tableName: 'Genre',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
    });
   
    return Genre;
    }