<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Repositories\SaleRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SaleController extends Controller
{
    private $model;

    public function __construct(SaleRepository $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        $sales = $this->model->all();

        return response()->json($sales);
    }

    public function store(Request $request)
    {
        try {
            $response = array('response' => '', 'success' => true);
            $sale =  $this->model->create($request->all());
            if ($sale) {
                $response['response'] = $sale;
                $this->model->saveAudit($sale);
                return response()->json($response, 201);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 403);
        }
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
        try {
            $sale = $this->model->find($id);
            return response()->json($sale, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 403);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $sale = $this->model->findOrFail($id);
            $sale->update($request->all());

            return response()->json('success', 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 403);
        }
    }

    public function destroy($id)
    {
        try {
            $this->model->delete($id);

            return response()->json(['message' => 'Deleted Successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 403);
        }
    }
}
