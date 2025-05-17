<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Hybrid rendering

> hybrid rendering • server components • partial hydration • web apis • extended html • error handling • markdown support


## Server starting point

The fluent server function in `'reactful/server'` is the framework starting point to run the application with `"/routes"` and `"#root"` as default values.

```ts
import { server } from 'reactful/server'

await server().render()
await server("/routes").render("#root") 
await server({ routes: "/routes" }).render("#root")
```

All dependency are injected in fluent inject method. To see more details about IoC container goto <a onclick='goto("review/injection.html")'>dependency injection</a> page.

```ts
import { server } from 'reactful/server'
import { directive } from './directives'
import { decorator } from './decorators'

const myStore = { ok: true }

await server({ store: myStore })
     .inject(directive)
     .inject(decorator)
     .render("#root")
```

## Client component

Since the user interation happens in client-side, only client component could be stateful. Here, the client decorator is a more component-scoped than the conventional module-scoped `'use server'` directive. 

```tsx
@client(true) export const Hi = props => <>...</>
```

The `@client(true)` enable the stateful object in the component, where` @client(false)` only works with conventional hooks.

## Server component

Comprehensive support to static (SSG), dynamic (SSR) and periodic (ISR) hybrid rendering using straghtforward function decorators.

```tsx
@server('static') // default
export default const Static = props => <>...</>

@server('dynamic')  
export default const Dynamic = props => <>...</>

@server('periodic', "36h") 
export default const Periodic = props => <>...</>
```

It supports async components with Suspense component API.

```tsx
import { Suspense } from 'react'

export default async function AsyncComponent(props) {
   const user = await fetch(url).then(x => x.json())
   const loading = <h1>loading...</h1>

   return <Suspense fallback={loading}>
      Hello { hello.name }
   </Suspense>
}
```

