# ClaudeResets SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ClaudeResetsFeatures
  def self.make_feature(name)
    case name
    when "base"
      ClaudeResetsBaseFeature.new
    when "ratelimit"
      ClaudeResetsRatelimitFeature.new
    when "retry"
      ClaudeResetsRetryFeature.new
    when "test"
      ClaudeResetsTestFeature.new
    when "timeout"
      ClaudeResetsTimeoutFeature.new
    else
      ClaudeResetsBaseFeature.new
    end
  end
end
