import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "catalog",
    "accessor": "Catalog",
    "op": "load",
    "method": "GET",
    "path": "/api/resets",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "providers": {
        "claude": {
          "name": "Claude",
          "product": "Claude Code",
          "account": "ClaudeDevs",
          "accountUrl": "https://x.com/ClaudeDevs",
          "note": "x",
          "events": [
            {
              "id": "2044868953206612154",
              "date": "2026-01-01T00:00:00Z",
              "kind": "reset",
              "resetType": "banked",
              "usableUntil": "2026-01-01T00:00:00Z",
              "account": "x",
              "scope": "all",
              "note": "x",
              "url": "x",
              "verification": "curated"
            }
          ]
        },
        "codex": {
          "name": "Claude",
          "product": "Claude Code",
          "account": "ClaudeDevs",
          "accountUrl": "https://x.com/ClaudeDevs",
          "note": "x",
          "events": [
            {
              "id": "2044868953206612154",
              "date": "2026-01-01T00:00:00Z",
              "kind": "reset",
              "resetType": "banked",
              "usableUntil": "2026-01-01T00:00:00Z",
              "account": "x",
              "scope": "all",
              "note": "x",
              "url": "x",
              "verification": "curated"
            }
          ]
        }
      },
      "meta": {
        "detector": {
          "status": "fresh"
        },
        "codexSync": {
          "status": "fresh"
        },
        "provisionalEventIds": [
          "x"
        ],
        "provisionalPolicyIds": [
          "x"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "history",
    "accessor": "History",
    "op": "load",
    "method": "GET",
    "path": "/data/resets.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "providers": {
        "claude": {
          "name": "Claude",
          "product": "Claude Code",
          "account": "ClaudeDevs",
          "accountUrl": "https://x.com/ClaudeDevs",
          "note": "x",
          "events": [
            {
              "id": "2044868953206612154",
              "date": "2026-01-01T00:00:00Z",
              "kind": "reset",
              "resetType": "banked",
              "usableUntil": "2026-01-01T00:00:00Z",
              "account": "x",
              "scope": "all",
              "note": "x",
              "url": "x",
              "verification": "curated"
            }
          ]
        },
        "codex": {
          "name": "Claude",
          "product": "Claude Code",
          "account": "ClaudeDevs",
          "accountUrl": "https://x.com/ClaudeDevs",
          "note": "x",
          "events": [
            {
              "id": "2044868953206612154",
              "date": "2026-01-01T00:00:00Z",
              "kind": "reset",
              "resetType": "banked",
              "usableUntil": "2026-01-01T00:00:00Z",
              "account": "x",
              "scope": "all",
              "note": "x",
              "url": "x",
              "verification": "curated"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "summary",
    "accessor": "Summary",
    "op": "list",
    "method": "GET",
    "path": "/data/summary.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "site": "x",
      "name": "claude-resets.com",
      "product": "Claude Code",
      "account": "ClaudeDevs",
      "accountUrl": "x",
      "lastResetAt": "2026-01-01T00:00:00Z",
      "lastResetUrl": "x",
      "lastResetAccount": "x",
      "lastResetScope": "x",
      "lastResetType": "x",
      "lastResetUsableUntil": "2026-01-01T00:00:00Z",
      "lastResetForAllUsersAt": "2026-01-01T00:00:00Z",
      "lastResetForAllUsersUrl": "x",
      "resetCount": 14,
      "bankedResetCount": 1,
      "bankedResets": [
        {
          "id": "x",
          "date": "2026-01-01T00:00:00Z",
          "scope": "x",
          "usableUntil": "2026-01-01T00:00:00Z",
          "url": "x"
        }
      ],
      "policyChangeCount": 1,
      "meanGapDays": 12.2,
      "longestGapDays": 47.6,
      "firstResetAt": "2026-01-01T00:00:00Z",
      "datasetUrl": "x",
      "liveDatasetUrl": "x",
      "resetRssUrl": "x",
      "announcementRssUrl": "x",
      "llmsTxtUrl": "x",
      "calendarUrl": "x",
      "mcpUrl": "x",
      "statuslineUrl": "x",
      "definitions": {
        "reset": "x",
        "bankedReset": "x",
        "policy": "x"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
