<style>@import url(./index.css);</style>

<article onload='reZoom()'>
<section menu center menu-top>
   
   [easy](# 'vanilla-like low learning-curve') 
   • [lite](#) 
   • [lean](#) 
   • [fast](#) 
   • [full](#) 
   • [bold](#) 
   • [nice](#)

</section>

<h1 title> <a href='../main.html#overview'>overview</a> | <a href='../main.html#preview'>preview</a> | <b>review</b> <div title>server-side rendering</div></h1>

> static rendering • dynamic rendering • periodic rendering <br/>function decorator • partial hydration • markdown support<br/>extended html • react server components • restful apis

## Server folder models

Reactive `/apis`, `/assets`, and `/routes`, where **'/api'** servers RESTful APIs with as exported functions. 

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

The **/routes** folder supports JSX, HTML and markdown by filename and folder/index.

```ts
// routing name conflict will throw a build exception 
>> about.md x about.tsx x about.html x about/index.tsx
```


## Client-side components

Client components are modelled with @client function decorators. A more component-scope alternative than next.js modular 'use client' and intra-component fetch api extensions. 

```tsx
@client
export default const ClientSideRendered = props => <>...</>
```

## Server-side components

Static, dynamic and periodic SSR is supported sing @server function decorator as metadata for default exported components. The static SSR is the default rendering model (implicit).

```tsx
@server('static') // default
export default const StaticRendered = props => <>...</>

@server('dynamic')  
export default const DynamicRendered = props => <>...</>

@server('periodic', "36h") 
export default const PeriodicRendered = props => <>...</>
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

## Extended renders

Markdown and HTML are supported a new `<link>` extension for JSX usage inside HTML.

```html
<head>
   <link type="component" href="../components/header.tsx" rel="Header" />
</head>
<body>
   <!-- JSX inside HTML -->
   <Header title="HTML-X" />
</body>
```