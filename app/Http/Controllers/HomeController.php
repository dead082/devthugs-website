<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        return view('pages.home', [
            'featuredProjects' => config('devthugs.featured_projects'),
            'partners' => config('devthugs.partners'),
        ]);
    }
}
