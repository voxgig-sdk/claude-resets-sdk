<?php
declare(strict_types=1);

// ClaudeResets SDK base feature

class ClaudeResetsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ClaudeResetsContext $ctx, array $options): void {}
    public function PostConstruct(ClaudeResetsContext $ctx): void {}
    public function PostConstructEntity(ClaudeResetsContext $ctx): void {}
    public function SetData(ClaudeResetsContext $ctx): void {}
    public function GetData(ClaudeResetsContext $ctx): void {}
    public function GetMatch(ClaudeResetsContext $ctx): void {}
    public function SetMatch(ClaudeResetsContext $ctx): void {}
    public function PrePoint(ClaudeResetsContext $ctx): void {}
    public function PreSpec(ClaudeResetsContext $ctx): void {}
    public function PreRequest(ClaudeResetsContext $ctx): void {}
    public function PreResponse(ClaudeResetsContext $ctx): void {}
    public function PreResult(ClaudeResetsContext $ctx): void {}
    public function PreDone(ClaudeResetsContext $ctx): void {}
    public function PreUnexpected(ClaudeResetsContext $ctx): void {}
}
