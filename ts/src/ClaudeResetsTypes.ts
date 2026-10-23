// Typed models for the ClaudeResets SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Catalog {
  meta?: Record<string, any>
  providers: Record<string, any>
}

export interface CatalogLoadMatch {
  meta?: Record<string, any>
  providers?: Record<string, any>
}

export interface History {
  claude: Record<string, any>
  codex: Record<string, any>
}

export interface HistoryLoadMatch {
  claude?: Record<string, any>
  codex?: Record<string, any>
}

export interface Summary {
  date: string
  id: string
  scope?: string
  url?: string
  usableUntil?: string
}

export interface SummaryListMatch {
  date?: string
  id?: string
  scope?: string
  url?: string
  usableUntil?: string
}

