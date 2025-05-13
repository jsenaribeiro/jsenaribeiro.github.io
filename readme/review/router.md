<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />

<h1 title> 
   <a href='#' onclick="goto('./overview.html')">overview</a> 
   | <a href='#' onclick="goto('./preview.html#router')">preview</a> 
   | <b>review</b>
</h1>

> simple routing • routing decorator • route params<br/>props routing • extended HTML • markdown support<br/>  lazy components • prefetch route • nested routes

<header>routing components</header>

New concepts, behaviors and approachs that keep the code leaner, readable and intuitive, but is slightly differente from popular frameworks.

<section concept>

| CONCEPT               | DESCRIPTION                                                     |
| --------------------- | --------------------------------------------------------------- |
| declarative redirects | Redirect is declarativilly handled with conditional returns.    |
| fullstack routing     | Server routing sends prefetched routes to client-side usage     |
| fallback falts        | Not found route fallbacks to its nearest available route in URL |

</section>

## Folder routing

Static folder routing with no extra naming conventions.

<style>
   table { zoom:0.9; line-height:11px; }
   table tr th { padding-bottom: 10px; color: rgb(96, 164, 216); font-weight:400 !important; }
   table tr:nth-of-type(1) td { padding-top: 10px; }
   table tr td:nth-of-type(3) { color:grey; }
</style>

| DIRECTORY                 | ROUTING                | RESOLUTION          |
| ------------------------- | ---------------------- | ------------------- |
| /routes/index.tsx         | localhost:3000/        | index JSX           |
| /routes/about.tsx         | localhost:3000/about   | filename JSX        |
| /routes/sample.html       | localhost:3000/sample  | filename HTML       |
| /routes/example.md        | localhost:3000/example | filename markdown   |
| /routes/profile/index.tsx | localhost:3000/profile | subfolder index JSX |

**Nesting routes** with dot slash syntax (`./`).

| CONTEXT                | ROUTING   | RESOLUTION            |
| ---------------------- | --------- | --------------------- |
| /                      | ./about   | /about                |
| /admin/system          | ./account | /admin/account        |
| /user/profile/overview | ./details | /user/profile/details |

**Conflicts rules** with build time exception. 

| CONTEXT SAMPLING                             | CONFLICT TYPE                 |
| -------------------------------------------- | ----------------------------- |
| file.tsx, file/index.tsx                     | filename x index              |
| file.html, file.tsx, file.md                 | filename x extensions         |
| file.html, file.tsx, file.md, file/index.tsx | filename x extensions x index |

## Async components

It supports async components and `Suspense` API with awaits props-driven  Suspense alternative.

```tsx
async function Async(props) {
   const text = await fetch('http://www.some-url.com')
   return <h1>awaited content = { text }</h1>
}

const Hello = async props => <>
   <Suspense fallback={<b>loading...</b>}>
      <Async />
   </Suspense>
</>

const Awaits = async props => <>
   <h1 await={Async}>loading...</h1>
</>
```

## Dynamic routes

Functions decorator for dynamic routing (aka parametric route) that overrides default folder routing.

```tsx
import { route } from '@reactful/client'

@route('/whatever/profile/:id')
export default async function Profile(props, { params }) {
   const user = fetch(`${url}/${params.id}`).then(x => x.json())

   return <>
      <h1>Profile</h1>
      <h2>User ID: { params.id }</h2>
      <h3>User name: { user.name }</h3>
   </h1>
}
```

## Props routing

Client-side routing with `[route]` and `[link]` props.

```tsx
export default const Menu = (props) => <>
   <h1>Menu</h1>

   <!-- [link] client-side router -->
   <a link='/main'>Main</a>

   <!-- [route] conditional rendering -->
   <main route='/main'>Main</main>
</!->
```

## Lazy loading

Lazy routing using promise extension `asLazyComponent`.

```tsx
const Sample = import('./main').asLazyComponent('Sample')

export default const Menu = (props) => <>
   <h1>Menu</h1>
   <a link='/sample'>Sample</a>
   <Sample route='/lazy' /> <!-- lazy routing -->
</!->
```

## Style routing

A `routed` className to style `[link]` active element.

```css
button.routed { background: wheat; font-weight: bolder; }
```

As client-side routing, props routing not renders by request or after refresh. When a not found happens, the reactful responde with nearest route available.


<br/><br/>