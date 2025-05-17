<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./serving.css);
</style> 

# Server flows

> hybrid rendering • server components • partial hydration • web apis • extended html • error handling • markdown support


## Server launcher

IoC container for <a onclick='goto("review/stateful.html#global-store")'>global store</a>, <a onclick='goto("review/injection.html#error-components")'>error components</a>, <a onclick='goto("review/directive.html#props-directives")'>props directives</a>, <a onclick='goto("review/decorator.html")'>function decorators</a>.

```ts
import { server } from 'reactful/server'
import { directive, decorator } from './directives'

await server({ store: { ok:true } })
     .inject(directive)
     .inject(decorator)
     .render("#root")
```

It also serves <a onclick='goto("review/rendering.html#restful-apis-folder")'>RESTful APIs</a> with exported functions using HTTP verb names in `/apis`. 

```ts
// /apis/sample.ts as http://localhost:3000/api/sample
export const get = request => new Response('Hello World!')
```

## Decorator side

Component bound <a onclick='goto("review/decorator.html")'>function decorators</a> for **SSG**, **SSR** and **ISR** <a onclick='goto("review/hybriding.html")'>rendering</a>.

```tsx
@client(true) export const Hi = props => <>...</>
@server('static') export default const Static = props => <>...</>
@server('dynamic') export default const Dynamic = props => <>...</>
@server('periodic', "36h")  export default const Periodic = props => <>...</>
```

## Multiple supports

It supports <a onclick='goto("review/multiple.html#markdown-support")'>Markdown</a>, <a onclick='goto("review/multiple.html#extended-html")'>extended HTML</a> and <a onclick='goto("review/multiple.html#async-components")'>async components</a>.