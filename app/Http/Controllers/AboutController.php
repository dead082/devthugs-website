<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class AboutController extends Controller
{
    public function index(): View
    {
        return view('pages.about', [
            'showcaseImages' => config('devthugs.showcase_images'),
            'milestones' => config('devthugs.milestones'),
            'whyFeatures' => config('devthugs.why_features'),
            'team' => config('devthugs.team'),
        ]);
    }
}
