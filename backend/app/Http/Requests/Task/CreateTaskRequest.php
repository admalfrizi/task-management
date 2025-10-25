<?php

namespace App\Http\Requests\Task;

use App\Trait\ResponseHelper;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateTaskRequest extends FormRequest
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
            'title' => 'required|string',
            'description'=> 'nullable|string',
            'status' => 'required|in:todo,in_progress,done',
            'deadline' => 'nullable|date|after:today'
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
