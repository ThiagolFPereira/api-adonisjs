'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Produtores
Route.get('/produtores', 'ProdutorRuralController.index');
Route.get('/produtores/:id', 'ProdutorRuralController.show');
Route.post('/produtores', 'ProdutorRuralController.store');
Route.put('/produtores/:id', 'ProdutorRuralController.update');
Route.delete('/produtores/:id', 'ProdutorRuralController.destroy');

// Dashboard
Route.get('/dashboard', 'ProdutorRuralController.dashboard');

Route.on('/').render('welcome')
