const db = require('../../models/index');



const userController = {
   

    create: (req,res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const nuevoUsuario = {
            name: name,
            email: email,
            password: password
          };
        db.User.create(nuevoUsuario)
        .then(usuarioCreado => {
        console.log('Usuario creado:', usuarioCreado);
        res.status(201).json(usuarioCreado);
        })
        .catch(error => {
        console.error('Error al crear el usuario:', error);
        });
        }
        
    

}


module.exports = userController;

