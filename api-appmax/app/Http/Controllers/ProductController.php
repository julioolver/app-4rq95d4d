<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    private $model;

    public function __construct(ProductRepository $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        $products = $this->model->all();

        return response()->json($products);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'sku' => 'required|unique:products'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            } else {
                $product = $this->model->create($request->all());
                return response()->json($product, 201);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 403);
        }
    }

    public function show($id)
    {
        $product = $this->model->find($id);

        return response()->json($product);
    }

    public function edit($id)
    {
        try {
            $product = $this->model->find($id);
            return response()->json($product, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 403);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $product = $this->model->findOrFail($id);
            $product->update($request->all());

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
