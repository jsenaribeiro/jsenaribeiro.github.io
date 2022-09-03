## Concept

Please, check this links bellow to framework introduction.

#### [Overview](https://github.com/jsenaribeiro/react-evo/blob/default/doc/overview.md) | [Preview](https://github.com/jsenaribeiro/react-evo/blob/default/doc/preview.md) |  [Review](https://github.com/jsenaribeiro/react-evo/blob/default/doc/review.md)

## Usage

With npm installed, type the command bellow with npm (or yarn).

```console
> npm i react-evo --save
> yarn add react-evo
```

Replace ReactDOM pelo ReactEVO as bellow.

```tsx
ReactEVO.createRoot(true, "#root", <App />, context)
```

And that is: state management and two-way data binding within a full declarative component.

```tsx
export const HelloWorld = () => <>
   <h1>Hello, {store.user.name} !</h1>
   Name: <input bind="user.name"} /> 
</>

const Hello = (props, state) => <>
   <h1>Hello, { state.hello }</h1>
   <input onInput={e => state.hello = e.target.value}
          value={state.hello} />
</>

import { synchornizer } from 'react-evo'

export default synchornizer({
   url: "http://sample/hello",
   get: (s: store) => s.hello,
   set: (s: store, v: any) => s.hello = v
})

export default [pt, en]

```

## Features

The React EVO framework features covers:

* declarative style
* self-rendering state
* two-way data binding
* remote state synchronizers
* cache, retries and pooling
* attribute programming
* component-scoped CSS
* property routing

## TODO

* two-data binding for checkbox, radio, etc
* performance (profiling)
* mover para o limite
* optional parameters router
* package modularation

## BUGS

* form two-way data binding (test)
