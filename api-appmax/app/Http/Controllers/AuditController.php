<?php

namespace App\Http\Controllers;

use App\Repositories\AuditRepository;
use Illuminate\Http\Request;

class AuditController extends Controller
{
    private $model;

    public function __construct(AuditRepository $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        $products = $this->model->all();

        return response()->json($products);
    }
}
