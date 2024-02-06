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

Server-side rendering improves performance by reducing rendering time and bundle size. Client-side component is keep minimal, only in use cases that demands user interation.

## server folder models

Reactive has three special serving folder: `/apis`, `/assets`, and `/routes`. The **/apis** serves restiful APIs with exported named method with HTTP verb. 

```ts
// file: /apis/sample.ts
// route: http://localhost:3000/api/sample
// warning: route is both resolved as /api and /apis
export const get = (request: Request) => new Response('Hello World!')
```

The **/assets** folder serves all static content as images, styles, sounds, etc. It is not served with '/' root, since it requires '/assets' prefix in url to be served properly.

```
// route: /assets/styles.css
```

The **/routes** folder serves all the routed content, supporting JSX, HTML and markdown. It resolves with filename and folder/index, conflicts resolutions will throw an exception.

```ts
// routing conflict range by filetypes and by folder/index
// about.md x about.tsx x about.html x about/index.tsx
```


## client-side components

Client components is easily modeled using function decorators. A more component-scope alternative to next.js modular 'use' directives and intra-component fetch api extensions. 

```tsx
@client
export default const ClientSideRendered = props => <>...</>
```

## server-side components

Reactive supports server-components with static, dynamic and periodic SSR by function decorator, where static SSR are defaul, so `@server('static')` are optional/implicit. As in another React SSR frameworks, routed components need to be exported as default.

```tsx
@server('static')  // default ()
export default const StaticRendered = props => <>...</>

@server('dynamic')  
export default const DynamicRendered = props => <>...</>

@server('periodic', "36h") 
export default const PeriodicRendered = props => <>...</>
```

React server component enables async components that simplifies fetching data in React. It is integrated with Suspense component api support as bellow.

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

## extended routing renders

Markdown and pure HTML are supported as routed component, where the HTML is extended by a new `<link>` extension that enable JSX component in a HTML.

```html
<head>
   <link type="component" href="../components/header.tsx" rel="Header" />
</head>
<body>
   <!-- JSX inside HTML -->
   <Header title="HTML-X" />
</body>
```