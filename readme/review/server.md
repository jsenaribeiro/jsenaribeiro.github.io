<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />

<h1 title> 
   <a href='#' onclick="goto('./overview.html')">overview</a> 
   | <a href='#' onclick="goto('./preview.html#server')">preview</a> 
   | <b>review</b>
</h1>

<header>server-side rendering</header>

> static rendering • dynamic rendering • periodic rendering <br/>react server components • partial hydration • web apis<br/>extended html • error handling • markdown

## Server startup

Reactful starts with a server function in port 3000 (defined in .env file).

```ts
/* define the route folder and customize settings */
server(routes: string = '/routes', settings: { etc... })

/* inject custom props directives (see Binder section) */
inject(directive: Proper)

/* pass the query selector for root element */
render(query: string = "#root")
```

Bellow reactful startup sample with some props directive injections.

```ts
import { server } from 'reactful/server'
import { directive1, directive2 } from './directives'

await server("/routes", { etc... })
     .inject(directive1)
     .inject(directive2)
     .render("#root")
```

## Folder structure

Reactful server works with `/apis`, `/assets`, and `/routes` folders. The /apis folders serve as **'/api'** routes for RESTful APIs as exported functions with HTTP verb names. 

```ts
// file: /apis/sample.ts
// route: http://localhost:3000/api/sample
// warning: route is both resolved as /api and /apis
export const get = (request: Request) => new Response('Hello World!')
```

The **/assets** folder serves all static content as images, styles, sounds, etc. 

```html
<link rel="stylesheet" href="/assets/styles.css" />
```

The **/routes** folder is default routing for routing page components. It supports rendering to JSX, HTML and markdown files and also resolve /name/index.tsx as /name routing. 


```ts
@server('static') export default props => <>Home page</>
```

Conflicting routing resolution will throw an exception in build time.


## Client component

Client components are modelled with @client function decorators. A more component-scope alternative than next.js modular 'use client' and intra-component fetch api extensions. 

```tsx
@client(true)
export default const ClientSideRendered = props => <>...</>
```

## Server component

Static, dynamic and periodic SSR is supported sing @server function decorator as metadata for default exported components. The static SSR is the default rendering model (implicit).

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

Reactful has a default global error component that could by replaced by a custom failure high-order component in reactful settings during server call.

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

Local error handling is covered by `@error` component decorator, passing specific error high-order component for each specific component if there is any exception at rendering.

```tsx
import { error } from '@reactful/client'

// sampling a custom high-order component error
const mySpecificErrorComponent = (status, errors) => <p>
   <h1>My specific error page...</h1>
   <ul>{ errors.map((x,i) => <li key={i}>{ x }</li>) }</ul>
</p>

@error(mySpecificErrorComponent)
export function Sample() { ... }

@error(mySpecificErrorComponent)
export function Example() { ... }
```

## JSX-in-HTML extension

Markdown and HTML support an extended `<link>` tag for JSX import inside HTML. This enables importing React component inside a HTML with server-side static rendering.

```html
<html>
<head><link type="react" href="../components/header.tsx" /></head>
<body><Header title="HTML-X" /></body> <!-- JSX into HTML -->
</html>
```

Use the `rel` attribute in `<link />` to import an exported named component, otherwise, it will import the default component in defined in `href` path to component. 

```html
<!-- default component in /components/header.tsx" -->
<link type="react" href="../components/header.tsx" />

<!-- 'Header' component in /components/header.tsx" -->
<link rel="Header" type="react" href="../components/header.tsx" />
```

<br/>