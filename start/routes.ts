/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
/*
Route.get('/', async () => {
  return { hello: 'world' }
})
*/

Route.group(()=>{

  //Funciona, pero sería bueno limpiar un poco los formatos
  Route.get('/listar-usuarios', 'UsuariosController.getListarUsuarios') //funciona
  Route.get('/listar-todo', 'UsuariosController.getListarUsuarios') 
  Route.get('/listar-perfil', 'UsuariosController.getListarUsuariosYPerfil') //
  Route.get('/listar-publicaciones', 'UsuariosController.getListarUsuariosYPublicacion') //
  Route.get('/listar-usuarios-grupos', 'UsuariosController.getListarUsuariosGrupos') //

//deberían funcionar

  Route.post('/registro-usuarios', 'UsuariosController.setRegistrarUsuarios') //funciona
  Route.post('/registro-perfil', 'PerfilsController.setRegistrarPerfil')  //funcionó una vez??
  Route.post('/registro-publicacion', 'PublicacionesController.setRegistroPublicaciones') //funciona
  Route.post('/registro-grupo', 'GruposController.setRegistrarGrupo') // funciona
  Route.post('/registro-usuario-grupos', 'GrupoUsuariosController.setRegistrarUsuarioGrupo') //funciona

}).prefix('/alcaldia')


//http://localhost:333/alcaldia/registro-usuarios