# ClaudeResets SDK feature factory

from clauderesets_sdk.feature.base_feature import ClaudeResetsBaseFeature
from clauderesets_sdk.feature.ratelimit_feature import ClaudeResetsRatelimitFeature
from clauderesets_sdk.feature.retry_feature import ClaudeResetsRetryFeature
from clauderesets_sdk.feature.test_feature import ClaudeResetsTestFeature
from clauderesets_sdk.feature.timeout_feature import ClaudeResetsTimeoutFeature


_FEATURES = {
    "base": lambda: ClaudeResetsBaseFeature(),
    "ratelimit": lambda: ClaudeResetsRatelimitFeature(),
    "retry": lambda: ClaudeResetsRetryFeature(),
    "test": lambda: ClaudeResetsTestFeature(),
    "timeout": lambda: ClaudeResetsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
