<?php
declare(strict_types=1);

// Typed models for the ClaudeResets SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Catalog entity data model. */
class Catalog
{
    public ?array $meta = null;
    public array $providers;
}

/** Request payload for Catalog#load. */
class CatalogLoadMatch
{
    public ?array $meta = null;
    public ?array $providers = null;
}

/** History entity data model. */
class History
{
    public array $claude;
    public array $codex;
}

/** Request payload for History#load. */
class HistoryLoadMatch
{
    public ?array $claude = null;
    public ?array $codex = null;
}

/** Summary entity data model. */
class Summary
{
    public string $date;
    public string $id;
    public ?string $scope = null;
    public ?string $url = null;
    public ?string $usableUntil = null;
}

/** Request payload for Summary#list. */
class SummaryListMatch
{
    public ?string $date = null;
    public ?string $id = null;
    public ?string $scope = null;
    public ?string $url = null;
    public ?string $usableUntil = null;
}

