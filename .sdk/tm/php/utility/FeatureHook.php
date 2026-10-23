<?php
declare(strict_types=1);

// ClaudeResets SDK utility: feature_hook

class ClaudeResetsFeatureHook
{
    public static function call(ClaudeResetsContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
