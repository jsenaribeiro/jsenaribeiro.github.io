<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./routing.css);
table {  margin: 0 20px; zoom:0.87 !important }
table th { font-weight:700; border-bottom-style: dashed }
</style> 

# Routing pages

> path routing • route decorator • dynamic route • props routing •  markdown support • lazy components • nested routes

## Folder routing

Easy <a onclick='goto("review/structure.html#folder-routing")'>folder routing</a> with inner fallbacks retries until the root path (/).

| all formats | prefix omission | index omission | nesting routes |
|-|-|-|-|
| html, jsx, tsx, md | /admin.tsx = /admin | /index.html = / | ./c = /a/b/c |

</section>

## Dynamic routes

Function decorator for <a onclick='goto("review/structure.html#dynamic-routes")'>dynamic routing</a> and highest priority routing resolution.

```tsx
@route('/profile/:id')
export async function Profile(props, feeds) {
   return <h1>User id: { feeds.params.id }</h1>
}
```

## Props routing

<a onclick='goto("review/structure.html#props-routing")'>Route props</a> directives with conditional `[route]` and router `[link]`.

```tsx
export default const Menu = props => <>
   <div link='/main'>Main</div>     <!-- clickable router -->   
   <main route='/main'>...</main>   <!-- conditional render -->
</>
```

## Lazy loading

<a onclick='goto("review/structure.html#lazy-loading")'>Lazy import routing</a> with promise extension polyfil named `asLazyComponent`. 

```tsx
const Main = import('./main').asLazyComponent('Sample')

export default const Menu = props => <>
   <a link='/sample'>Sample</a>
   <Main route='/lazy' />
</>
```

