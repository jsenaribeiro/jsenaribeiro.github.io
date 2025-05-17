<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./structure.css);
</style> 

# Routing architecture

## Folder routing

Static folder routing has no extra naming conventions (like in next.js). Its routing fallbacks retries into nearest inner route until achieve the root path (/).

| DIRECTORY                 | ROUTING                | RESOLUTION          |
| ------------------------- | ---------------------- | ------------------- |
| /routes/index.tsx         | localhost:3000/        | index JSX           |
| /routes/about.tsx         | localhost:3000/about   | filename JSX        |
| /routes/sample.html       | localhost:3000/sample  | filename HTML       |
| /routes/example.md        | localhost:3000/example | filename markdown   |
| /routes/profile/index.tsx | localhost:3000/profile | subfolder index JSX |

## Nesting routes

Nesting routes uses dot slash syntax for relative routing based on current file path.

| CONTEXT                | ROUTING   | RESOLUTION            |
| ---------------------- | --------- | --------------------- |
| /                      | ./about   | /about                |
| /admin/system          | ./account | /admin/account        |
| /user/profile/overview | ./details | /user/profile/details |

## Conflicts rules

Considering the index and extension supression, there is some conflict cases listed below. All routing conflits throws exception in build time exception. 

| CONTEXT SAMPLING                             | CONFLICT TYPE                 |
| -------------------------------------------- | ----------------------------- |
| file.tsx, file/index.tsx                     | filename x index              |
| file.html, file.tsx, file.md                 | filename x extensions         |
| file.html, file.tsx, file.md, file/index.tsx | filename x extensions x index |

## Dynamic routes

Dynamic routing (aka parametric route) handled by functions decorator. If there are conflits with folder routing, the routing decorator will overrides it as superior priority.

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

A declarativerouting with `[route]` that renders when it matches with current route, meanwhile `[link]` adds a clickable behavior into its host element to switch routes.

```tsx
export default const Menu = props => <>
   <h1>Menu</h1>   
   <a link='/main'>Main</a>         <!-- clicable router -->   
   <main route='/main'>Main</main>  <!-- conditional rendering -->
</>
```

## Lazy loading

Lazy routing only import the lazy component when it is matched by route props. It is enabled by import using a promise extension polyfill called `asLazyComponent`. Then, the component imported with asLazyComponent and uset with route props, will only be importing in moment that is routed to its target route.

```tsx
const MyLazyComponent = import('./main').asLazyComponent('Sample')

export const Menu = (props, feeds) => <>
   <h1>Menu</h1>
   <a link='/sample'>Sample</a>
   <MyLazyComponent route='/lazy' /> 
   { feeds.await && <p>importing component...</>}
</>
```

## Async components

Async components is supported with React `Suspense API`.

```tsx
async function Async(props) {
   const text = await fetch('http://www.url.com').then(x => x.text())
   return <h1>awaited content = { text }</h1>
}

const Hello = async props => <>
   <Suspense fallback={<b>loading...</b>}>
      <Async />
   </Suspense>
</>
```

## Await props alternative

Await props directives is an alternative to Suspense API where the fallback is a children content and the async component is on `[await]` props directive.

```tsx
const Hello = async props => <p await={Async}><b>loading...</b></p>
```

