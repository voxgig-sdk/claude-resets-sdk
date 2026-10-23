<?php
declare(strict_types=1);

// ClaudeResets SDK utility: result_headers

class ClaudeResetsResultHeaders
{
    public static function call(ClaudeResetsContext $ctx): ?ClaudeResetsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
