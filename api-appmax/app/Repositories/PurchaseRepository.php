<?php

namespace App\Repositories;

use App\Models\Purchase;

class PurchaseRepository extends AbstractRepository
{
    protected $model = Purchase::class;

    public function saveAudit($data)
    {
        $this->audit->saveAudit([
            'form'      => 'Purchase',
            'register'  => "SKU: $data->sku",
            'info'      => "Quant. : $data->quantity",
            'date_time' => $data->created_at
        ]);
    }
}
