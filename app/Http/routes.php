<?php

// get tasks
Route::get('/api/todos'          , 'TasksController@index');
// create new task
Route::post('/api/todos'         , 'TasksController@store');
// udpate task
Route::put('/api/todos/{task}'   , 'TasksController@update');
// delete task
Route::delete('/api/todos/{task}', 'TasksController@delete');