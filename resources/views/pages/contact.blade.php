@extends('layouts.app')

@section('title', 'Contact — Devthugz')

@section('content')
    <main class="pt-20 bg-dark-base min-h-screen">
        @include('components.contact.location-section')
        @include('components.contact.contact-form')
    </main>
@endsection
