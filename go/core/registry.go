package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCatalogEntityFunc func(client *ClaudeResetsSDK, entopts map[string]any) ClaudeResetsEntity

var NewHistoryEntityFunc func(client *ClaudeResetsSDK, entopts map[string]any) ClaudeResetsEntity

var NewSummaryEntityFunc func(client *ClaudeResetsSDK, entopts map[string]any) ClaudeResetsEntity

