<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RefreshPage;

class HomePageController extends Controller
{
    // get Home Page:
    public function index()
    {
        return view('front.home');
    }

    // Refresh Page after submit form:
    public function refreshPage(Request $request){
        $request->validate([
            'numberField' => 'required|max:15'
        ]);

        $seconds = $request->numberField;
        header("Refresh:0");
        return redirect('home')->with('success', $seconds);
    }

}
