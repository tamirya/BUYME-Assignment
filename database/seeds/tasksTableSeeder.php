<?php

use Illuminate\Database\Seeder;

class tasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	for( $i=0;$i<5;$i++ ){
			DB::table('tasks')->insert([
	           'title'     => 'item '.str_random(10),
            	'completed' => 0
	        ]);
    	}
    }
}
