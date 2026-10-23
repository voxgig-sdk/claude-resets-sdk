# ClaudeResets SDK utility: make_context

from clauderesets_sdk.core.context import ClaudeResetsContext


def make_context_util(ctxmap, basectx):
    return ClaudeResetsContext(ctxmap, basectx)
