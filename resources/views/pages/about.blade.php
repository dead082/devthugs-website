@extends('layouts.app')

@section('title', 'About — Devthugz')

@section('content')
    <main class="pt-20">
        @include('components.about.what-is-devthugs', ['showcaseImages' => $showcaseImages])
        @include('components.about.how-it-started', ['milestones' => $milestones])
        @include('components.about.why-devthugs', ['whyFeatures' => $whyFeatures])
        @include('components.about.vision-mission')
        @include('components.about.meet-the-team', ['team' => $team])
    </main>
@endsection
