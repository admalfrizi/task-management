<?php

namespace App\Trait;
use Illuminate\Http\JsonResponse;

trait ResponseHelper
{
    protected function responseSuccess($result, $message, $code = 200): JsonResponse
    {
        $res = [
            'success' => true,
            'code' => $code,
            'message' => $message,
            'data' => $result
        ];

        return response()->json($res, $code);
    }

    protected function responseError($message, $code): JsonResponse
    {
        $res = [
            'success' => false,
            'code' => $code,
            'message' => $message,
            "data" => null
        ];

        return response()->json($res,$code);
    }

    protected function responseValidate($message, $code, $data = null): JsonResponse
    {
        $res = [
            'success' => false,
            'code' => $code,
            'message' => $message,
            "data" => $data
        ];

        return response()->json($res,$code);
    }
}
