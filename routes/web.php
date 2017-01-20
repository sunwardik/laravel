<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|

Route::get('user/{id}',fuction($id=1){
	return $id;
)}->where('id','[0-9]+');
*/
Route::get('insert/{n}', 'BaseController@getInsert');
Route::get('/','BaseController@getIndex');

Auth::routes();

Route::get('/home', 'HomeController@index');
