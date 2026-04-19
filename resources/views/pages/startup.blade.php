@extends('layouts.app')

@section('title', 'Start Up — Devthugz')

@section('content')
    <main class="pt-20 bg-dark-base min-h-screen">
        @include('components.startup.our-works', ['startupProjects' => $startupProjects])
        @include('components.startup.what-we-offer', ['services' => $services])
        @include('components.startup.startup-partnerships', ['meetingImages' => $meetingImages, 'testingImages' => $testingImages])
    </main>
@endsection
