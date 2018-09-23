<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\DB;
use App\Models\Tasks;

class TasksController extends Controller
{
    function index(){
        $items = Tasks::all();
        $dataReturned = [
            'todo'=>$items
        ];
        return response()->json($dataReturned);
    }

    public function store(Request $request)
    {
        $task = $request->all();

        foreach ($task as $key => $value) {
            $data = json_decode($key);
            break;
        }
 
        $task = new Tasks();
        $task->title = $data->todo->title;
        $task->completed = 0;
        $task->save();

        $dataReturned = [
            'todo'=>$task
        ];

        return response()->json($dataReturned, 201);
    }

    public function update(Request $request, Tasks $task)
    {
        $inputs = $request->all();

        foreach ($inputs as $key => $value) {
            $data = json_decode($key);
            break;
        }
        
        $updatedItem = [
            'title'=> $data->todo->title,
            'completed'=> $data->todo->completed == true ? 1 : 0,
        ];

        $task->update($updatedItem);

        return response()->json(null, 200);
    }

    public function delete(Tasks $task)
    {
        $task->delete();

        return response()->json(null, 204);
    }
}


