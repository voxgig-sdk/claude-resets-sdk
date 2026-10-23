
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ClaudeResetsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ClaudeResetsSDK.test()
    equal(testsdk instanceof ClaudeResetsSDK, true,
      'ClaudeResetsSDK.test() must return a client synchronously')
  })

})
