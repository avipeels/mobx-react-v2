# Actions

1. Dont put async code in actions, because the batching will not be efficient

# Reactions

1. Autorun: Tracks every observable inside it. It needs to be disposed.
2. Reaction: Triggered by the condition you pass to it. Needs to be disposed.
3. When: Similar to Reaction but only runs once after condition is met and is disposed automatically.

Observables used after async code wont be tracked.
# Computed
1. Computed values are derivations of the state.
2. They are Similar to Reactions but instead of producing side-effects, the return a value.
3. Computed values that are used in the Reaction function will be cached.
