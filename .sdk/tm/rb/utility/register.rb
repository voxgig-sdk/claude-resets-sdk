# ClaudeResets SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ClaudeResetsUtility.registrar = ->(u) {
  u.clean = ClaudeResetsUtilities::Clean
  u.clean_add = ClaudeResetsUtilities::CleanAdd
  u.clean_explain = ClaudeResetsUtilities::CleanExplain
  u.done = ClaudeResetsUtilities::Done
  u.make_error = ClaudeResetsUtilities::MakeError
  u.feature_add = ClaudeResetsUtilities::FeatureAdd
  u.feature_hook = ClaudeResetsUtilities::FeatureHook
  u.feature_init = ClaudeResetsUtilities::FeatureInit
  u.fetcher = ClaudeResetsUtilities::Fetcher
  u.make_fetch_def = ClaudeResetsUtilities::MakeFetchDef
  u.make_context = ClaudeResetsUtilities::MakeContext
  u.make_options = ClaudeResetsUtilities::MakeOptions
  u.make_request = ClaudeResetsUtilities::MakeRequest
  u.make_response = ClaudeResetsUtilities::MakeResponse
  u.make_result = ClaudeResetsUtilities::MakeResult
  u.make_point = ClaudeResetsUtilities::MakePoint
  u.make_spec = ClaudeResetsUtilities::MakeSpec
  u.make_url = ClaudeResetsUtilities::MakeUrl
  u.param = ClaudeResetsUtilities::Param
  u.prepare_auth = ClaudeResetsUtilities::PrepareAuth
  u.prepare_body = ClaudeResetsUtilities::PrepareBody
  u.prepare_headers = ClaudeResetsUtilities::PrepareHeaders
  u.prepare_method = ClaudeResetsUtilities::PrepareMethod
  u.prepare_params = ClaudeResetsUtilities::PrepareParams
  u.prepare_path = ClaudeResetsUtilities::PreparePath
  u.prepare_query = ClaudeResetsUtilities::PrepareQuery
  u.graphql_body = ClaudeResetsUtilities::GraphqlBody
  u.graphql_errors = ClaudeResetsUtilities::GraphqlErrors
  u.result_basic = ClaudeResetsUtilities::ResultBasic
  u.result_body = ClaudeResetsUtilities::ResultBody
  u.result_headers = ClaudeResetsUtilities::ResultHeaders
  u.transform_request = ClaudeResetsUtilities::TransformRequest
  u.transform_response = ClaudeResetsUtilities::TransformResponse
}
