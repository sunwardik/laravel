<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Catalog;

class BaseController extends Controller{

    public function getIndex($id=null){
		return view('index');
	}
	public function getInsert($n=null){
		$cat = new Catalog;
		$cat -> name = $n;
		$cat -> save();		
	}

}
