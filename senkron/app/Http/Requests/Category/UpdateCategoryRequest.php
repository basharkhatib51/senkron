<?php


namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;


class  UpdateCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name' => "string|required|unique:categories,name,$this->id",
            'image' => "exists:uploads,id|nullable",
            'parent_category' => "exists:categories,id|nullable",
        ];
    }
}
