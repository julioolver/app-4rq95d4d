<?php

namespace App\Repositories;

use App\Models\Audit;
use App\Models\Sale;

class SaleRepository extends Abstractrepository
{
    protected $model = Sale::class;
    //protected $audit = app(Audit::class);

    public function saveAudit($data)
    {
        return Audit::create([
            'form'      => 'Sale',
            'sku'  => "SKU: $data->sku",
            'info'      => "Quant. : $data->quantity",
            'date_time' => $data->created_at
        ]);
    }
}
