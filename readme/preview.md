<style>@import url(./preview.css);</style>
<script src='./overview.js'></script>
<script src='./preview.js'></script>

<article id='preview' preview>
<section menu center menu-top hidden>
   
   [easy](# 'vanilla-like low learning-curve') 
   • [lite](#) 
   • [lean](#) 
   • [fast](#) 
   • [full](#) 
   • [flex](#) 
   • [nice](#)
   
</section>

<title>REACTFUL</title>

# <a href='#' onclick='goto("./overview.html")'>overview</a> | **preview**

> SSR • SEO • scoped CSS • stateful objects • routing<br/>API routes • props binding • function decorators<br/>RESTful actions • markdown * JSX-in-HTML

<fieldset id='server' onclick='onPreview(this.id)'>
<legend><b>SERVE</b> rendering</legend>

Comprehensive server-side render support.

```ts
@server('static') const About = props => <>...</>
@server('dynamic') const About = props => <>...</>
@server('Periodic', '1h') const About = props => <>...</>
```

Component-driven error handling by dependency injection.

<aside cols='4:5'>

```tsx
// by component decorator (local)
@error(<h1>Custom error...</h1>)
export function Sample() { ... }
```

```tsx
// by dependency injection (global)
const failure = (status, errors) => <>...</>
await server("/routes", { failure }).render()
```

</aside>

Go to <a href='#' onclick='goto("./review/server.html")'>review</a> section for more details.

</fieldset>

<fieldset id ='styler' onclick='onPreview(this.id)'>
<legend><b>STYLE</b> scoping</legend>

Modular and component-scoped CSS resources.

<aside cols='2'><div>

```css
/* file: module.css */
h1 { color:green }
```
```css
/* file: styles.css (global) */
button.ComponentA { color:blue }
```

</div><div>

```tsx
import 'module.css'

@style('./component.css')
const ComponentA = () => <>
   <h1>Hello World!</h1>
   <button>Ok</button>
</>
```

</div></aside>

<style>pre { margin: 7px 0px; }</style>

Go to <a href='#' onclick='goto("./review/styler.html")'>review</a> section for more details.

</fieldset>

<fieldset id='storer' onclick='onPreview(this.id)'>
<legend><b>STATE</b> handling</legend>

Stateful objects for **local**, **global** and **partial** scope.

```ts
@client(true) const Local = props => 
   <input value={props.name} onChange={on(props)} />

@client(true) const Global = (props, { store }) => 
   <input value={store.name} onChange={on(store)} />

@client(true, partial) const Partial = props => 
   <input value={share.name} onChange={on(share)} />
```

Go to <a href='#' onclick='goto("./review/storer.html")'>review</a> section for more details.

</fieldset>

<fieldset id='ranker' onclick='onPreview(this.id)'>
<legend><b>INDEX</b> ranking</legend>

SEO support with metatag object and function decorators.

<aside cols=2>

```tsx
import { seo } from '@reactful/client'

@seo('Home', 'A home page...')
export function Home() { ... }

@seo('About', 'A about page...')
export function About() { ... }
```

```tsx
const metatags = { 
   charset:'UTF-8', 
   keywords: 'test, sample'
}

@seo('Example', metatags)
export function Example() { ... }
```
</aside>

Go to <a href='#' onclick='goto("./review/ranker.html")'>review</a> section for more details.

</fieldset>

<fieldset id='binder' onclick='onPreview(this.id)'>
<legend><b>PROPS</b> binding  </legend>

Data binding with props `[data]` and `[bind]` controlled components, and for for uncontroled component as `form[data]` with actions, validation and authentication.

```tsx
const Controlled = props => <input data={props} bind='name' /> 

const Uncontrolled = (props, { errors }) => <>
   <form data={props} method="post" action="www.api.com"> 
      Name: <input bind='name' maxlength={50} /> 
      <button>Submit</button>
   </form>
</>
```


Go to <a href='#' onclick='goto("./review/binder.html")'>review</a> section for more details.

</fieldset>

<fieldset id='router' onclick='onPreview(this.id)'>
<legend><b>ROUTE</b> design</legend>

Dynamic routing with function decourators.

```ts
@route('/whatever-route-you-want/params/:id')
const Params(props, { params }) => <h1>ID: { params.id }</h1>
```

Routing props with nested routes (`./`) and lazy routing.

```tsx
const Sample = import('./main').asLazyComponent('Sample')

const Menu = (props) => <>
   <h1>Menu</h1>
   <a href='/main'>Main</a>
   <a href='/main/lazy'>Lazy</a>   
   <main route='/main'>Main</main>  <!-- props rendering -->   
   <Sample route='./lazy' />        <!-- lazy routing -->
</!->
```
</aside>

Go to <a href='#' onclick='goto("./review/router.html")'>review</a> section for more details.

</fieldset>

<fieldset id='helper' onclick='onPreview(this.id)'>
<legend><b>HELPER</b> utilities</legend>

Type, retype and prototypes are available with `@reactful/extensions` npm package.

```ts
import `@reactful/extensions`
   
interface Function { isAsync() }
interface JSON     { scriptify(object) }
interface Promise  { asLazyComponent(member: string) }
interface Object   { valueOf(field: string, value?: any) }
interface Number   { format(commas: boolean, digits: number) }
interface String   { toArray(), toObject(), toNumber() }
interface Array    { distinct(), first(), pairs(), Array.range() }
```

Go to <a href='#' onclick='goto("./review/helper.html")'>review</a> section for more details.

</fieldset>
</article>

<br/><br/>