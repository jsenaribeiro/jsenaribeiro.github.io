<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />

<h1 title> 
   <a href='#' onclick="goto('./overview.html')">overview</a> 
   | <a href='#' onclick="goto('./preview.html#server')">preview</a> 
   | <b>review</b>
</h1>

> static rendering • dynamic rendering • periodic rendering <br/>react server components • partial hydration • web apis<br/>extended html • error handling • markdown

<header>server-side rendering</header>

## Server startup

Startup sample with some injected props directives.

```ts
import { server } from 'reactful/server'
import { directive1, directive2 } from './directives'

await server("/routes", { etc... })
     .inject(directive1)
     .inject(directive2)
     .render("#root")
```

## RESTful apis

The `/apis` folders enables RESTful APIs with exported functions using HTTP verb names. 

```ts
// file: /apis/sample.ts
// route: http://localhost:3000/api/sample
// warning: route is both resolved as /api and /apis
export const get = request => new Response('Hello World!')
```

## Client component

Client-component function decorators as component-scope alternative to modular `'use client'` conventional soluction.

```tsx
@client(true)
export const Hi = props => <>...</>
```

## Server component

Static, dynamic and periodic server-side rendering (SSR) by function decorators.

```tsx
@server('static') // default
export default const Static = props => <>...</>

@server('dynamic')  
export default const Dynamic = props => <>...</>

@server('periodic', "36h") 
export default const Periodic = props => <>...</>
```

React server component enables async components, supporting Suspense component API.

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

## Error component

Component-driven global error handling using high-order component.

```tsx
import { server } from 'reactful/server'

// sampling a custom high-order component error
const myCustomErrorComponent = (status, errors) => <p>
   <h1>My generic error page...</h1>
   <ul>{ errors.map((x,i) => <li key={i}>{ x }</li>) }</ul>
</p>

// replacing default failure HOC for error handling
const settings = { failure: myCustomErrorComponent }

// starting reactful server with custom error component
await server("#root", settings).render("#root")
```

Local specific error handling with function decorator.

```tsx
import { error } from '@reactful/client'

// sampling a custom high-order component error
const mySpecificErrorComponent = (status, errors) => <p>
   <h1>My specific error page...</h1>
   <ul>{ errors.map((x,i) => <li key={i}>{ x }</li>) }</ul>
</p>

@error(mySpecificErrorComponent)
export function Example() { ... }
```

## HTML extension

Extended `<link>` tag for default JSX import inside HTML.

```html
<html>
<head><link type="react" href="../components/header.tsx" /></head>
<body><Header title="HTML-X" /></body> <!-- JSX into HTML -->
</html>
```

Use `rel` enables to import named component. 

```html
<!-- 'Header' component in /etc/header.tsx" -->
<link rel="Header" type="react" href="../etc/header.tsx" />
```

<br/>