# ClaudeResets SDK utility: make_context
require_relative '../core/context'
module ClaudeResetsUtilities
  MakeContext = ->(ctxmap, basectx) {
    ClaudeResetsContext.new(ctxmap, basectx)
  }
end
