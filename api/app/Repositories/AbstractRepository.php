<?php

namespace App\Repositories;

abstract class AbstractRepository
{
    protected $model;

    public function __construct()
    {
        $this->model = $this->resolveModel();
    }

    protected function resolveModel()
    {
        return app($this->model);
    }

    public function all()
    {
        return $this->model->orderBy('id')->get();
    }

    public function create($data)
    {
        return $this->model->create($data);
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function findOrFail($id)
    {
        return $this->model->findOrFail($id);
    }

    public function update($data, $id)
    {
        $update = $this->findOrFail($id);
        return $update->update($data);
    }

    public function delete($id)
    {
        $delete = $this->findOrFail($id);
        return $delete->delete();
    }
}
