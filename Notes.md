# Introduction
Mobx constitute of following:
1. Observables
2. Actions
3. Computations
4. Reactions

## Observables
Observable is state. It is minimally defined. It should not contain redundant or derivable data.
They can be graphs, contain classes, arrays,  refs etc.

```
 @observable
 todos = [{
   title: 'mobx',
   done: false
   }]
```

**Observables used after async code wont be tracked**

## Actions
Actions are the only means to update the state and may have other side-effects.

```
 @action
 onClick = () => {
   this.props.todo.done = true;
 }
```

**Don't put async code in actions, because the batching will not be efficient**

## Reactions
Reactions react to state change and produce side-effects, like update UI

1. Autorun: Tracks every observable inside it. It needs to be disposed.
2. Reaction: Triggered by the condition you pass to it. Needs to be disposed.
3. When: Similar to Reaction but only runs once after condition is met and is disposed automatically.

## Computed/Computations
Computed values are the values that are derived from the state using a **pure function**.
They are updated by Mobx automatically and are optimized when not used.

```
 @computed
 get completedTodo(){
   return this.todos.filter(todo => todo.done)
 }
```

**They are similar to Reactions but instead of producing side-effects, they return a value**

**Computed values that are used in the Reaction function will be cached**
