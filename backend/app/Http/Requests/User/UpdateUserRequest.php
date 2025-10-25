<?php

namespace App\Http\Requests\User;

use App\Trait\ResponseHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateUserRequest extends FormRequest
{
    use ResponseHelper;
    
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'username'=> 'nullable|string',
            'email' => 'nullable|email|unique:users,email',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException($this->responseValidate(
            'Validation Failed !', 
            422, 
            $validator->errors()
        ));
    }
}
