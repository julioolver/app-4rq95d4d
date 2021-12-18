<?php

namespace App\Repositories;

use App\Models\Audit;
use App\Models\Purchase;

class PurchaseRepository extends AbstractRepository
{
    protected $model = Purchase::class;

    public function saveAudit($data)
    {
        return Audit::create([
            'form'      => 'Purchase',
            'sku'  => "SKU: $data->sku",
            'info'      => "Quant. : $data->quantity",
            'date_time' => $data->created_at
        ]);
    }
}
