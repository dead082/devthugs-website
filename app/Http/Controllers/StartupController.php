<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class StartupController extends Controller
{
    public function index(): View
    {
        return view('pages.startup', [
            'startupProjects' => config('devthugs.startup_projects'),
            'services' => config('devthugs.services'),
            'meetingImages' => config('devthugs.meeting_images'),
            'testingImages' => config('devthugs.testing_images'),
        ]);
    }
}
