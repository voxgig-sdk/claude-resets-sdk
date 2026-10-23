package voxgigclauderesetssdk

import (
	"github.com/voxgig-sdk/claude-resets-sdk/go/core"
	"github.com/voxgig-sdk/claude-resets-sdk/go/entity"
	"github.com/voxgig-sdk/claude-resets-sdk/go/feature"
	_ "github.com/voxgig-sdk/claude-resets-sdk/go/utility"
)

// Type aliases preserve external API.
type ClaudeResetsSDK = core.ClaudeResetsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ClaudeResetsEntity = core.ClaudeResetsEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ClaudeResetsError = core.ClaudeResetsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewCatalogEntityFunc = func(client *core.ClaudeResetsSDK, entopts map[string]any) core.ClaudeResetsEntity {
		return entity.NewCatalogEntity(client, entopts)
	}
	core.NewHistoryEntityFunc = func(client *core.ClaudeResetsSDK, entopts map[string]any) core.ClaudeResetsEntity {
		return entity.NewHistoryEntity(client, entopts)
	}
	core.NewSummaryEntityFunc = func(client *core.ClaudeResetsSDK, entopts map[string]any) core.ClaudeResetsEntity {
		return entity.NewSummaryEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewClaudeResetsSDK = core.NewClaudeResetsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewClaudeResetsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ClaudeResetsSDK  { return NewClaudeResetsSDK(nil) }
func Test() *ClaudeResetsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
