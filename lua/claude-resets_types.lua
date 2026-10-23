-- Typed models for the ClaudeResets SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Catalog
---@field meta? table
---@field providers table

---@class CatalogLoadMatch
---@field meta? table
---@field providers? table

---@class History
---@field claude table
---@field codex table

---@class HistoryLoadMatch
---@field claude? table
---@field codex? table

---@class Summary
---@field date string
---@field id string
---@field scope? string
---@field url? string
---@field usableUntil? string

---@class SummaryListMatch
---@field date? string
---@field id? string
---@field scope? string
---@field url? string
---@field usableUntil? string

local M = {}

return M
