<?php

namespace App\Http\Resources\ServiceCategory;


use Illuminate\Http\Resources\Json\JsonResource;

class ServiceCategoryResource extends JsonResource
{
    public function toArray($request): array
    {
        return $this->withTranslations([
            'no' => str_pad($this->id, 8, "0", STR_PAD_LEFT),
            'id' => $this->id,
            'name' => $this->name,
            'parent_service_category' => $this->parent_service_category,
            'parent_service_category_id' => $this->parent_service_category?->id,
            'children_service_categories' => $this->children_service_categories,
            "created_by" => $this->created_by_user?->name,
            "created_by_id" => $this->created_by_user?->id,
            "updated_by" => $this->updated_by_user?->name,
            "updated_by_id" => $this->updated_by_user?->id,
            $this->mergeWhen($this->created_at, [
                "created_at" => $this->created_at?->format("Y-m-d (h:i)A"),
                "created_from" => $this->created_at?->diffForHumans(),
            ]),
            $this->mergeWhen($this->updated_at, [
                "updated_at" => $this->updated_at?->format("Y-m-d (h:i)A"),
                "updated_from" => $this->updated_at?->diffForHumans(),
            ]),
            $this->mergeWhen($this->deleted_at, [
                "deleted_at" => $this->deleted_at?->format("Y-m-d (h:i)A"),
                "deleted_from" => $this->deleted_at?->diffForHumans(),
            ]),
        ]);

    }
}
