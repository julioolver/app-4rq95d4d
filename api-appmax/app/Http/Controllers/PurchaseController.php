<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use App\Repositories\PurchaseRepository;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{
    private $model;

    public function __construct(PurchaseRepository $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        $purchases = $this->model->all();

        return response()->json($purchases);
    }

    public function store(Request $request)
    {
        try {
            $response = array('response' => '', 'success' => true);
            $response['response'] = $this->model->create($request->all());
            return response()->json($response, 201);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
        try {
            $purchase = $this->model->find($id);
            return response()->json($purchase, 200);
        } catch (\Throwable $th) {
            return response()->json($th, 404);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $purchase = $this->model->findOrFail($id);
            $purchase->update($request->all());

            return response()->json('success', 200);
        } catch (\Throwable $th) {
            return response()->json($th, 403);
        }
    }

    public function destroy($id)
    {
        try {
            $this->model->delete($id);

            return response()->json(['message' => 'Deleted Successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json($th, 403);
        }
    }
}
