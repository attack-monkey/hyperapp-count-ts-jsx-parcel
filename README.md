# Hyperapp - Counter App (typescript / parcel / jsx)

> Hyperapp's counter app modularised and typed using parcel.js (bundler) and typescript.

## Install

Install parcel.js globally (This is the bundler)

```

npm install -g parcel-bundler

```

Install dependencies

```

npm install

```

## Start

```

npm start

```

## Immutable Update

This app uses iu-ts (immutable update - typescript) to immutably update deep nested objects.  

**Declarative actions are still recommended**, however using iu-ts removes the need to nest actions (allowing for easier refactor).

eg.

```tsx

// The following immutably increments state.counter.count using iu

<button onclick={() => actions.counterUp(1))}>-</button>


```

```ts

export const actions: Actions = {
    counterUp: value => state => iu(state, 'counter/count', state.counter.count + value),
    counterDown: value => state => iu(state, 'counter/count', state.counter.count - value)
}

```


## Dir Structure

```

- index.html
- index.tsx
- src
    - actions
    - components
        - main (entry component)
            - main.component.tsx
            - *Next component down - etc.*
        - shared (shared components)
    - state
    - utils

```