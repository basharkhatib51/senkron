<?php


namespace App\Http\Requests\Menu;

use Illuminate\Foundation\Http\FormRequest;


class  UpdateMenuRequest extends FormRequest
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
            'name' => "string|required|unique:menus,name,$this->id",
            'type' => "required|in:url,page,route",
            'url' => "required",
            'menu_id' => "exists:menus,id|nullable",
        ];
    }
}
