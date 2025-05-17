<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Dependency Injection

## Architectural motivation

To deal with directives and global store, Reactful framework uses a IoC container to inject the global store and the custom directives.

## IoC Container

The Reactful IoC container handles <a onclick='goto("review/stateful.html")'>global state</a>, <a href='#error-handling'>error components<a>, <a onclick='goto("review/directive.html")'>props directives</a> and <a onclick='goto("review/decorator.html")'>function decorators</a>. As a unique global state, it is injected in second parameter, the settings object, in storage field. Directives are injected in fluent inject function.

```ts
import { server } from 'reactful/server'
import { directive } from './directives'
import { decorator } from './decorators'

const store = { name: 'john', date: '0001-01-01' }

await server({ store })
     .inject(directive)
     .inject(decorator)
     .render("#root")
```

The server parameter is typed by Settings interface

```ts
interface Settings<T = any>  {
   store: T          // global state  (default: undefined)
   route: string     // component page folder (default: '/routes')
   query: string     // query selector for root HTML (default: '#root')
}
```

## Resolution approach

The Reacful dependency resolution uses the useless second parameter of a functional component in React, named as feeds. All application dependencies are injected and resolved in this object.

```ts
function Component(props, feeds) {
   const isPending = feeds.awaits
   const globalState = feeds.store
}
```

So, in framework life-cycle, this second argument receives a Feed interface with multiple.

```ts
interface Feeds {
   param: record    // route params of dynamic routing
   store: record    // custom global store by DI
   logon: record    // current logged user by Reactful auth
   await: boolean   // global pending fetch for loading spine
   fails: Invalid[] // current fetch errors
}
```


## Error components

The error component is a high-order component that receives an HTTP status code with an error array based in exception throws or HTTP response.

```tsx
const errorComponent = (status, errors) => <p>
   <h1>My custom error component...</h1>
   { errors.map((e,i) => <p key={i}>{ e }</p>) }
</p>
```

The error component uses dependency injection of global error handling for automatic redirect when exception throws. 

```tsx
await server({ error: errorComponent }).render("#root")
```
For specific error component in special case, the `@error(component)` component allows to bind an specific error component with an specific component.

```tsx
// specific error handling
@error(customFailureHOC)
export function SomeComponent() { ... }

const customFailureHOC = (status, errors) => <p>
   <h1>My custom error component...</h1>
   { errors.map((e,i) => <p key={i}>{ e }</p>) }
</p>
```

## Conflits with React 19

THe canary React 19 is using this component second parameter as server component context. If this will release, the Feeds interface will add him as serve field.

```ts
interface Feeds {
   serve: Context
   ...,
}
```