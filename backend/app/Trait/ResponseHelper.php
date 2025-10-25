<?php

namespace App\Trait;
use Illuminate\Http\JsonResponse;

trait ResponseHelper
{
    protected function responseSuccess($result, $message, $code = 200)
    {
        $res = [
            'success' => true,
            'code' => $code,
            'message' => $message,
            'data' => $result
        ];

        return response()->json($res, $code);
    }

     protected function responseError($message, $code)
    {
        $res = [
            'success' => false,
            'code' => $code,
            'message' => $message,
            "data" => null
        ];

        return response()->json($res,$code);
    }
}
