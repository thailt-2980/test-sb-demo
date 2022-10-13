<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebInit extends Controller
{
    public function __invoke()
    {
        $user = null;
        if (auth()->user()) {
            $user = auth()->user();
        }

        return response()->json([
            'user' => $user,
        ]);
    }
}
