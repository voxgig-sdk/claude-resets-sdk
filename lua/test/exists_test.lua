-- ClaudeResets SDK exists test

local sdk = require("claude-resets_sdk")

describe("ClaudeResetsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
