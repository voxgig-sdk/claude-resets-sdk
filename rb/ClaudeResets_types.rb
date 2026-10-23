# frozen_string_literal: true

# Typed models for the ClaudeResets SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Catalog entity data model.
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] providers
#   @return [Hash]
Catalog = Struct.new(
  :meta,
  :providers,
  keyword_init: true
)

# Request payload for Catalog#load.
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] providers
#   @return [Hash, nil]
CatalogLoadMatch = Struct.new(
  :meta,
  :providers,
  keyword_init: true
)

# History entity data model.
#
# @!attribute [rw] claude
#   @return [Hash]
#
# @!attribute [rw] codex
#   @return [Hash]
History = Struct.new(
  :claude,
  :codex,
  keyword_init: true
)

# Request payload for History#load.
#
# @!attribute [rw] claude
#   @return [Hash, nil]
#
# @!attribute [rw] codex
#   @return [Hash, nil]
HistoryLoadMatch = Struct.new(
  :claude,
  :codex,
  keyword_init: true
)

# Summary entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] usableUntil
#   @return [String, nil]
Summary = Struct.new(
  :date,
  :id,
  :scope,
  :url,
  :usableUntil,
  keyword_init: true
)

# Request payload for Summary#list.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] usableUntil
#   @return [String, nil]
SummaryListMatch = Struct.new(
  :date,
  :id,
  :scope,
  :url,
  :usableUntil,
  keyword_init: true
)

