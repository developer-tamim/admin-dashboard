<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return Inertia::render('Product/index', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
        ]);
        // return Inertia::render('Product/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $user = $request->user();
        return Inertia::render('Product/create', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
        ]);
        // return Inertia::render('Product/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function category(Request $request)
    {
        $user = $request->user();
        return Inertia::render('Product/category', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
        ]);
        // return Inertia::render('Product/create');
    }
}
