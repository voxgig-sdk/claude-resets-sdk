# ClaudeResets SDK exists test

import pytest
from clauderesets_sdk import ClaudeResetsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ClaudeResetsSDK.test(None, None)
        assert testsdk is not None
