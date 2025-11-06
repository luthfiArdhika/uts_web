<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route untuk frame-layout
Route::get('/frame-layout', function () {
    return view('frame-layout');  // pastikan nama file: frame-layout.blade.php
});

// Route untuk uts1 (DOM Flower Basket)
Route::get('/uts1', function () {
    return view('uts1');  // pastikan nama file: uts1.blade.php
});