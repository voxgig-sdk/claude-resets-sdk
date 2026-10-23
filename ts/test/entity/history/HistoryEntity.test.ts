

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ClaudeResetsSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('HistoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLAUDE_RESETS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLAUDE_RESETS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ClaudeResetsSDK.test()
    const ent = testsdk.History()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLAUDE_RESETS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'history.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"claude":{"a":true,"h":"Claude","n":"claude","r":true,"t":"`$OBJECT`","key$":"claude","index$":0},"codex":{"a":true,"h":"Codex","n":"codex","r":true,"t":"`$OBJECT`","key$":"codex","index$":1}},"name":"history","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /data/resets.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/data/resets.json","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"data"},{"lit":"resets.json"}],"t":{"req":"`reqdata`","res":"`body.providers`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"history","name__orig":"history","Name":"History","name_":"history","name-":"history","NAME":"HISTORY","index$":1}, {"active":true,"entity":"history","key$":"BasicHistoryFlow","kind":"basic","name":"BasicHistoryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"history_ref01","srcdatavar":"history_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-history_ref01"}}],"index$":0}]}, 'History', {"GET /data/resets.json":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let history_ref01_data = Object.values(setup.data.existing.history)[0] as any

    // LOAD
    const history_ref01_ent = client.History()
    const history_ref01_match_dt0: any = {}
    const history_ref01_data_dt0 = (await history_ref01_ent.load(history_ref01_match_dt0)).data()
    assert(null != history_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/history/HistoryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ClaudeResetsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['history01','history02','history03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLAUDE_RESETS_TEST_HISTORY_ENTID': idmap,
    'CLAUDE_RESETS_TEST_LIVE': 'FALSE',
    'CLAUDE_RESETS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CLAUDE_RESETS_TEST_HISTORY_ENTID']

  const live = 'TRUE' === env.CLAUDE_RESETS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLAUDE_RESETS_TEST_HISTORY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ClaudeResetsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLAUDE_RESETS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
