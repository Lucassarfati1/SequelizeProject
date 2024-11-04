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
        },

        update: (req,res) => {
          const idUser = req.params.id;
          const name = req.body.name;
          const email = req.body.email;
          const password = req.body.password;

          db.User.update({
            name:name,
            email:email,
            password:password
          }, {
            where: {
              id: idUser
            }
          })

          res.redirect('/movies');
        
        },

        editForm: (req,res) => {
          const idUser = req.params.id;

          db.User.findByKey(idUser).then(user => {
            return res.render('updateUser', {user:user});
          });

          
        },
        
        upsert: (req,res) => {

          const email = req.body.email;
          const name = req.body.name;
          const password = req.body.password;


          db.User.upsert({
            email:email,
            name:name,
            password:password
          }
        ).then(([user,creado]) => {
          if(creado){
            console.log('Usuario creado: ' + user);
          }else{
            console.log('Usuario actualizado'+ user);
          }
          
        }).catch(error =>{
          console.error('Error al actualizar el usuario '+ error);
        });
      },

      
      destroy: (req,res) => {

        const idUser = req.params.id;
      
        db.User.destroy({where:{id: idUser}}).then(resultado => {
          if(resultado > 0){
            console.log('Se ha eliminado el usuario correctamente:');
          }else{
            console.log('No se ha podido encontrar ningun usuario con ese ID ');
          }
        
        }).catch(error => {
          console.error('Error al eliminar el usuario', error);
        })
      },
      destroyByEmail: (req,res) => {

        const email = req.body.email;
        console.log(email);
        db.User.destroy({
          where:
          {
            email: email
          }
        }).then(resultado => {
          if(resultado > 0){
            console.log('Se ha eliminado este usuario correctamente: '+email);
          }else{
            console.log('No se ha podido encontrar ningun usuario con ese email '+email);
          }
        
        }).catch(error => {
          console.error('Error al eliminar el usuario', error);
        })
      }


}


module.exports = userController;

