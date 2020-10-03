# Actions

1. Dont put async code in actions, because the batching will not be efficient

# Reactions

1. Autorun: Tracks every observable inside it. It needs to be disposed.
2. Reaction: Triggered by the condition you pass to it. Needs to be disposed.
3. When: Similar to Reaction but only runs once after condition is met and is disposed automatically.

Observables used after async code wont be tracked.
