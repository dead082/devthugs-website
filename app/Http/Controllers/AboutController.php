<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class AboutController extends Controller
{
    public function index(): View
    {
        $team = collect(config('devthugs.team'))
            ->map(fn (array $member) => array_merge($member, [
                'photo_url' => ! empty($member['photo'] ?? null) ? asset($member['photo']) : '',
            ]))
            ->all();

        return view('pages.about', [
            'showcaseImages' => config('devthugs.showcase_images'),
            'milestones' => config('devthugs.milestones'),
            'whyFeatures' => config('devthugs.why_features'),
            'team' => $team,
        ]);
    }
}
