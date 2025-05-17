<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Functional decorator

## Motivations

Javascript decorator is class-only. Since React is basically a functional designed coding, native JavaScript decoratores are useless in React. So, to achive function decorators, the Reactful implements a micro-transpiler using Bun. With function decorators, the functional component could deal with some semantics using decorators as metadatas.

## Transpiler

The decorator transpiler uses Bun tools for runtime and build-time transpiler, both time transpiling happens in decorator life-cycle.

## Modelling

The decorator signature is a function that returns an specific signature function with meta and call arguments and call return, as example bellow.

```tsx
export const decorating = args => (meta, call) => call
```

The meta is a ImportMeta type with import metadata, and call is any kind of function, like ReactFunctionComponent or just RFC. A decorator could intercepts each functional component. 

```tsx
export function decorating(args: string): Decorator<RFC> {   
   return function (meta: ImportMeta, call: RFC) {
      // TODO...
      return call
   }
}
```

A decorator is activated by dependency injection in server starter of Reactful framework using inject fluent method as bellow.

```tsx
import { server } from 'reactful/server'
import { decorating } from './decorators'

await server("/routes")
     .inject(decorating)
     .render("#root")
```

## Limitations

Custom decorators has no support to imports, it means that it could be imported, but it cannot import anything itself. If it this happens, the app will crash.