<script src='./default.js'></script>
<style>
   @import url(./default.css);
</style>

<article overview>
<section menu center menu-top>
   
   [easy](# 'vanilla-like low learning-curve') 
   • [lite](#) 
   • [lean](#) 
   • [fast](#) 
   • [full](#) 
   • [bold](#) 
   • [nice](#)

</section>

# **overview** | <a href='#' onclick='onPreview("")'>preview</a> | <a href='#' onclick='onReview("")'>review</a>

> server-side rendering • stateful handling • versatile routing <br/>route authorization • search engine optimization

<style>
   [specs] tr td:nth-of-type(3) { zoom:0.9; line-height:15px; }
</style>

<section specs>

|  | | |
|:-:|-|-|
| <a href='#' onclick='onPreview("server", true)'>server</a> | full static, dynamic and periodic SSR with support to JSX, markdown and extended HTML with link tag for JSX components. | md jsx html <br/> /api /assets /routes <br/> static dynamic periodic |
| <a href='#' onclick='onPreview("styler", true)'>styler</a> | component-scope CSS as @style decorator, global className component tag, and fixed modular CSS imports | @style(url) decorator <br/> .Global className Tag <br/> /module.css imports |
| <a href='#' onclick='onPreview("stater", true)'>stater</a> | stateful proxy objects for easy and leaner functional stateful component handling with multiple scopes. | local stateful props<br/>global injectable object<br/>modular stateful objects  |
| <a href='#' onclick='onPreview("ranker", true)'>ranker</a> | fullstack @seo function decorator for search engine ranking optimization with metatags and title and description overload<br/>  | metatags params<br/>function decorator</br>simple title+description |
| <a href='#' onclick='onPreview("router", true)'>router</a> | easy folder, decorator and props routing with decorator seo, route params, nesting routes, authorization with no wierd conventions | /route @route [route] <br/> ./nest  :param [routed] <br/> @seo  @auth  @error|
| <a href='#' onclick='onPreview("binder", true)'>binder</a> | props bindings for controlled components and uncontrolled forms with restful server actions and vanilla validation api | props directive<br/>[bind] [data] form[data]<br/>action validation authentication  |
| <a href='#' onclick='onPreview("bearer", true)'>bearer</a> | @auth decorator for authorization integrated with 'ajaxness' auth api  lib for simple authentication with jwt bearer and oAuth | authorization: @auth  <br/> authentication: form[onAuth] <br/> session: login logged logout |

<br/>

<aside cols='3:5' style='zoom:0.9'>

```cmd
$ bun create reactive

- empty template? no
- project name? test
- vs code IDE? yes
- install? yes
```

```bash
\apis          # restiful apis      
\assets        # public static files
\builds        # bundle and SSG htmls
\components    # common jsx components
\directives    # custom props directives
\routes        # pages with md, jsx and html
```

</section>
</article>

<article id='preview' preview hidden>
<section menu center menu-top>
   
   [easy](# 'vanilla-like low learning-curve') 
   • [lite](#) 
   • [lean](#) 
   • [fast](#) 
   • [full](#) 
   • [bold](#) 
   • [nice](#)
   
</section>

# <a href='#' onclick='onOverview()'>overview</a> | **preview** | <a href='#' onclick='onReview()'>review</a>

<center style='text-align: center !important'>

> partial hydration • prefetch route • render streaming <br/>render refocus • dependency injection • restiful actions <br/>props directive • function decorators

</center>

<fieldset id='server' onclick='onPreview(this.id)' class='hidden'>
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

Static files is server by /assets and restful apis in /apis folder.

<aside cols='4:5' >

```py
/assets
  /styles.css
  /favicon.ico
  /img/profile.png
```
```tsx
// HTTP verb function naming
export function get(request: Request) {
   return new Response('hello world')
}
```

Click [here](./review/server.html) to learn more about this.

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
<fieldset id ='styler' onclick='onPreview(this.id)' class='hidden'>
<legend><b>STYLER</b> scoping</legend>

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

New easy grid layout style prop directives for lean and fast structuring.

```jsx
const Component = props => <>

   <!-- grid layout props -->
   <section grid cols='2'>
      <aside>cols 1</aside>
      <aside>cols 2</aside>
   </section>
</>
```

Click [here](./review/styler.html) to learn more about this.

</fieldset>

<fieldset id='stater' onclick='onPreview(this.id)' class='hidden'>
<legend><b>STATER</b> handling</legend>

Stateful proxy object with **local** stateful props and **global** state dependency injection.

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

Contextual states is enabled by **modular** stateful objects using createState.

```tsx
import { createState } from 'reactive'

export const modular = createState({ name: 'world' })

const Component = props => <>
   Modular Hello { modular.name } !
   <input value={modular.name} 
      onChange={e => modular.name=e.taget.value} />
</>
```

</fieldset>

<fieldset id='ranker' onclick='onPreview(this.id)' class='hidden'>
<legend><b>RANKER</b> searching</legend>

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

<fieldset id='router' onclick='onPreview(this.id)' class='hidden'>
<legend><b>ROUTER</b> modeling</legend>

Easy routing href with no extra conventions supporting props, folder and decorators.

| | | | |
|-:|-|-|-|
| **JSX** | \ | \route\index.tsx | entry index component |
| **MD** | \example | \routes\example.md | markdown rendering |
| **HTML** | \sample | \routes\sample.html | HTML serving |
| **index** | \about | \routes\about\index.tsx | indexed routing

<style>
   #router table th { font-weight: bolder !important; zoom:1.2 }
   #router table { width: 100%; zoom: 0.75; margin:20px; }
   #router tr td:nth-of-type(4) { opacity: 0.65; }
   #router tr td:nth-of-type(1) { font-weight: 9000 !important; }
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

<fieldset id='binder' onclick='onPreview(this.id)' class='hidden'>
<legend><b>BINDER</b> properting</legend>

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

Custom props directives could be injected in reactive IoC container.

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

<fieldset id='bearer' onclick='onPreview(this.id)' class='hidden'>
<legend><b>BEARER</b> authoring</legend>

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
</article>

<article review>
</article>