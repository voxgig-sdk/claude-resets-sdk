# ClaudeResets SDK configuration

module ClaudeResetsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ClaudeResets",
        "slug" => "claude-resets",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://claude-resets.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "catalog" => {},
          "history" => {},
          "summary" => {},
        },
      },
      "entity" => {
        "catalog" => {
          "fields" => [
            {
              "name" => "meta",
              "title" => "Meta",
              "type" => "`$OBJECT`",
              "short" => "Runtime metadata.",
            },
            {
              "name" => "providers",
              "title" => "Providers",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Event history per provider.",
            },
          ],
          "name" => "catalog",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/resets",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "resets",
                    },
                  ],
                  "parts" => [
                    "api",
                    "resets",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "history" => {
          "fields" => [
            {
              "name" => "claude",
              "title" => "Claude",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "codex",
              "title" => "Codex",
              "type" => "`$OBJECT`",
              "req" => true,
            },
          ],
          "name" => "history",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/data/resets.json",
                  "segments" => [
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "resets.json",
                    },
                  ],
                  "parts" => [
                    "data",
                    "resets.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.providers`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "summary" => {
          "fields" => [
            {
              "name" => "date",
              "title" => "Date",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "scope",
              "title" => "Scope",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
            },
            {
              "name" => "usableUntil",
              "title" => "Usable Until",
              "type" => "`$STRING`",
              "short" => "Deadline to apply it, or null when none was set.",
              "format" => "date-time",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "summary",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/data/summary.json",
                  "segments" => [
                    {
                      "lit" => "data",
                    },
                    {
                      "lit" => "summary.json",
                    },
                  ],
                  "parts" => [
                    "data",
                    "summary.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ClaudeResetsFeatures.make_feature(name)
  end
end
