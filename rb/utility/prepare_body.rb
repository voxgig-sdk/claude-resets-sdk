# ClaudeResets SDK utility: prepare_body
require_relative 'media'
module ClaudeResetsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ClaudeResetsUtilities.raw_body(ctx.reqdata) if ClaudeResetsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
