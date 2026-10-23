<?php
declare(strict_types=1);

// ClaudeResets SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ClaudeResetsMakeContext
{
    public static function call(array $ctxmap, ?ClaudeResetsContext $basectx): ClaudeResetsContext
    {
        return new ClaudeResetsContext($ctxmap, $basectx);
    }
}
