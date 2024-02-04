<style>
@import url(./main.css);
[cols] { margin-top:-10px; }
/* fieldset.hidden *:not(legend,b,:checked) { display: none } */
</style>

<article overview>
<section menu center style='margin-bottom:-25px'>

[easy](# 'vanilla-like low learning-curve') 
| [lite](#) 
| [lean](#) 
| [fast](#) 
| [full](#) 
| [bold](#) 
| [nice](#)

</section>

# overview

<style>
   [specs] tr td:nth-of-type(3) { zoom:0.9; line-height:15px; }
</style>

<section specs>

|  | | |
|:-:|-|-|
| <a href='#' onclick='onShow("ranker", true)'>ranker</a> | fullstack @seo function decorator for search engine ranking optimization with metatags and title and description overload<br/>  | metatags params<br/>function decorator</br>simple title+description |
| <a href='#' onclick='onShow("server", true)'>server</a> | Full static, dynamic and periodic SSR with support to JSX, markdown and extended HTML with link tag for JSX components. | md jsx html <br/> /api /assets /routes <br/> static dynamic periodic |
| <a href='#' onclick='onShow("router", true)'>router</a> | easy folder, decorator and props routing with decorator seo, route params, nesting routes, authorization with no wierd conventions | /route @route [route] <br/> ./nest  :param [routed] <br/> @seo  @auth  @error|
| <a href='#' onclick='onShow("stater", true)'>stater</a> | stateful proxy objects for easy and leaner functional stateful component handling with multiple scopes. | local stateful props<br/>global injectable object<br/>modular stateful objects  |
| <a href='#' onclick='onShow("binder", true)'>binder</a> | props bindings for controlled components and uncontrolled forms with restful server actions and vanilla validation api | props directive<br/>[bind] [data] form[data]<br/>action validation authentication  |
| <a href='#' onclick='onShow("styler", true)'>styler</a> | component-scope CSS as @style decorator, global className component tag, and fixed modular CSS imports | @style(url) decorator <br/> .Global className Tag <br/> /module.css imports
| <a href='#' onclick='onShow("seeder", true)'>seeder</a> | DI seeding with second function component argument resolution for global states, props directives and exception components | global states <br/> props directives <br/> exception components |
| <a href='#' onclick='onShow("auther", true)'>auther</a> | @auth decorator for authorization integrated with 'ajaxness' auth api  lib for simple authentication with jwt bearer and oAuth | authorization: @auth  <br/> authentication: form[onAuth] <br/> session: login logged logout |

</section>

</article>
<article preview >

# preview

<center style='text-align: center !important'>

> bun-based • partial hydration • prefetch-routing <br/>render refocus • JSX streaming • dependency injection <br/>props directive • function decorators

</center>

<fieldset id='ranker' onclick='onShow(this.id)' class='hidden'>
<legend><b>RANKER</b> engine</legend>

Easy SEO with new function decorators by @seo decorator, with basic title and description overload, and also metatags object overload.

<aside cols=2>

```tsx
import { seo } from 'reactive'

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
</fieldset>

<fieldset id='server' onclick='onShow(this.id)' class='hidden'>
<legend><b>SERVER</b> rendering</legend>

Full server-side rendering with simple function @decorators.

```tsx
@server('static')  // default
export default const StaticRendered = props => <>...</>

@server('dynamic')  
export default const DynamicRendered = props => <>...</>

@server('periodic', "36h") 
export default const PeriodicRendered = props => <>...</>

@client
export default const ClientSideRendered = props => <>...</>
```

It also serves restful services in /api and static contents in /assets.

<aside cols='4:5' >

```py
# route: /assets/favicon.ico
/assets
  /styles.css
  /favicon.ico
  /img/profile.png
```
```tsx
// route: /api/hello
// local: /apis/hello.tsx

export const get = request =>
   new Response('hello world')
```

</aside>

<style>   
   #router th { font-weight:400 !important;  }
   #router tr th { border-bottom:solid 1px dimgrey !important; }
   #router table td { line-height: 15px; }
   #router table {
      margin-top: 10px;
      margin-bottom: 15px;
   }
</style>

</fieldset>
<fieldset id='router' onclick='onShow(this.id)' class='hidden'>
<legend><b>ROUTER</b> handling</legend>

Easy routing href with no extra conventions supporting props, folder and decorators.

| ROUTE | DIRECTORY | DESCRIPTION |
|-|-|-|
| \ | \route\index.tsx | entry index component |
| \example | \routes\example.md | markdown rendering |
| \sample | \routes\sample.html | HTML serving |
| \about | \routes\about\index.tsx | indexed routing

<style>
   #router table th { font-weight: bolder !important; zoom:1.2 }
   #router table { width: 100%; zoom: 0.75; margin:20px; }
   #router tr td:nth-of-type(3) { opacity: 0.65; }
</style>

The `@route` decorator support params (dynamic routes) with explicit component route.

```ts
@route('/any/route/params/:id')
function Params(props, { params }) {
   return <h1>ID: { params.id }</h1>
}
```

Routing props enable layout componentization with nested routes (`./`) and lazy routing

```tsx
const Sample = import('./main').asLazy('Sample')

export default const Menu = (props) => <>
   <h1>Menu</h1>
   <a href='/main'>Main</a>
   <a href='/main/lazy'>Lazy</a>

   <!-- conditional rendering -->
   <main route='/main'>Main</main>

   <!-- lazy routing -->
   <Sample route='./lazy' />
</!->
```

Generic errors is inject within index, where @error decorator handles specifics.

<aside cols='4:5'>

```tsx
@error(<h1>Custom error...</h1>)
export function Sample() { ... }
```
```tsx
await server("#root").inject(Error).render()
const Error = (status, errors) => <>...</>
```

</aside>

</fieldset>
<fieldset id='stater' onclick='onShow(this.id)' class='hidden'>
<legend><b>STATE</b> handling</legend>

Hookless OOP state handling alterantive for useState and context api.

```tsx
obj.name = 'new name' // changed object triggers the render
```

Stateful props for **local** states and **global** states from dependency injection.

```tsx
const Component = (props, ({ stores: global })) => <>
   Local Hello { props.name } !
   <input value={props.name} onChange={e => props.name=e.taget.value} />

   Global Hello { global.name } !
   <input value={global.name} onChange={e => global.name=e.taget.value} />
</>
```

```tsx
const global = { name: 'world', now: new Date() } 

await Reactive.server("#root").inject({ global }).render()
```

The **modular** states enable shared states by import and export semantics.

```tsx
import { createState } from 'reactive'

export const modular = createState({ name: 'world' })

const Component = props => <>
   Modular Hello { modular.name } !
   <input value={modular.name} 
      onChange={e => modular.name=e.taget.value} />
</>
```


<fieldset id='binder' onclick='onShow(this.id)' class='hidden'>
<legend><b>BINDER</b> extending</legend>


Controlled component **props binding** with [data] and [bind] props.

```tsx
const Component = (props, { stores: hello }) => <>
   Local Hello { props.name }! <input data={props} bind='name' /> 
   Global Hello { hello.name }! <input data={hello} bind='name' />
</>
```

Uncontroled components **form binding** as form[data] and input[bind] with support to  validation api, restful server actions and embbed authentication.

```tsx
const Component = (props, { errors }) => <>
   <form data={props} method="post" type='json'
      action="http://api.example.com/signup"
      onAuth={parseJwt}> <!-- jwt bearer -->

      Name: <input bind='name' maxlength={50} />
      Mail: <input bind='mail' pattern="\w+@\w+\.\w+" />    

      <button>Submit</button>
   </form>
</>
```

</fieldset>
<fieldset id ='styler' onclick='onShow(this.id)' class='hidden'>
<legend><b>STYLER</b> improving</legend>

Fixed modular CSS with component-scoped by decorators or className tag.

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

Grid layout style props with conditional rendering with media query directly in JSX/HTML.

```jsx
const Component = props => <>

   <!-- grid layout props -->
   <section grid cols='2'>
      <aside>cols 1</aside>
      <aside>cols 2</aside>

      <!-- conditional rendering with dark mode -->
      <button theme='dark'>Ok</button>

      <!-- conditional rendering with min-max width -->
      <button range={[1025, 1280]}>Validate</button>

      <!-- conditional rendering with full custom media query -->
      <button query='(min-width: 1025px) and (max-width: 1280px)'>cancel</button>
   </section>
</!->
```

</fieldset>

<fieldset id='seeder' onclick='onShow(this.id)' class='hidden'>
<legend><b>SEEDER</b> container</legend>

IoC container for dependency injection for global states and props directive.

```tsx
import { server } from 'reactive'

const hello = { name:'john' }
const failure = ({ status, error }) => <h1>failed!</h1>
const shown = props => ({ ...props, hidden: !props.shown })
const jwtBearer = new JwtAuth(1000, x => x.access_token)

await server("#root", { failure })
   .inject({ hello })
   .inject([ shown ])
   .render()
```

This `shown` implements a props injections as property mixing (aka props directive). It also requires module declaration to avoid typescript warnings in React.

```ts
// testing the new injected props 
const Example = prop => <div show={false}>...</div>

// declaring new props in react module to avoid warnings in typescript
declare module "react" { interface HTMLAttribute { show?: boolean }}
```

</fieldset>


<fieldset id='auther' onclick='onShow(this.id)' class='hidden'>
<legend><b>AUTHER</b> algorithm</legend>

Authorization is covered by @auth decorator with regex inspection.

```tsx
@auth({ role: "user|admin" }) function Profile() { ... }
```

The authentication uses ajaxness 'auth api' lib for easy JWT and oAuth authentication.

<aside cols='4:5'>

```tsx
import { auth } from 'ajaxness'

export const session = auth()
   .fetch("http://www.api/login")
   .catch(x => "Fails", "/login")
   .match(x => x.access, "/")

const opts = { session }

await server('#id',opts).render()
```

```tsx
import { session } from '.'

const onLogin = props => () => session
   .login(props.user, props.pass)

const Login= ({ usr, pwd }) => <>
   <h1>Account Login</h1>
   <input data={props} bind='user' />
   <input data={props} bind='pass' />
   <a onClick={onLogin(props)}>Login</a>
</>
```

</aside>

Ajaxness auth api easily integrates with any oAuth provider by OAuth interface.

```ts
const googleAuth: OAuth = {
   scopings:"public_profile,email,fullname",
   clientId:"asdfasfsadfasdfasdfasdfasfsadfasdfasdf",
   secretId:"asdfasdfasdfasdfasdasdfasdfasdfasdfasd",
}

interface Profile { iat:number, name:string, exp:number }

const session = auth<Profile>(googleAuth)
   .fetch("http://www.google.com/api2/oauth")
   .catch(x => "Authentatication fails", "/login")
   .match<Token>(x => x.token, "/home")
```
</fieldset>

<br/><br/><br/>

<script>
   function onShow(id, save) {
      const ids = Array.from(document.querySelectorAll('[specs] a'))
         .map(x => x.innerHTML.trim())

      const refer = '#' + id
      const query = ids.map(x => `#${x}`).join(',')

      document.querySelector('article[overview]').hidden = true
      document.querySelector('article[preview]').hidden = false

      document.querySelectorAll(query).forEach(node => {
         node.classList.add('hidden')
         console.log(node)
      })

      document.body.style.visibility = 'hidden'
      document.querySelector(refer).classList.remove('hidden')

      setTimeout(() => {
         location.hash = refer
         document.body.style.visibility = 'visible'
      }, 99)

      save && history && history.psu
   }
</script>

</article>