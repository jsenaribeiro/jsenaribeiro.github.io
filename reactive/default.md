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

<aside cols='4:5' style='zoom:0.9'>

```cmd
$ bun create reactive

- template? empty | minimal | sampling
- project name? my-project
- vs code IDE? [Y/n] y
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
<a href="./lib/server.html" review> ( + )</a>

Full server-side rendering with simple function @decorators.

<aside cols='2' >

```tsx
@server('dynamic')  
const About = props => <>...</>
```
```tsx
@server('periodic', "36h") 
const Sample = props => <>...</>
```

</aside>

Static files is server by /assets and restful apis in /apis folder.

<aside cols='4:5' >

```py
/assets
  /styles.css
  /favicon.ico
```
```ts
// exported as HTTP verb method naming
export const get = (request: Request) =>
   new Response('hello world')
```

</aside>

Exceptions are handled by local @error decorator and global component injection.

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

Go to [review](./lib/server.html) section for more details.

</fieldset>

<fieldset id ='styler' onclick='onPreview(this.id)' class='hidden'>
<legend><b>STYLER</b> scoping</legend>
<a href="./lib/styler.html" review> ( + )</a>

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
const Grid = props => <p grid cols='2'><div>cols 1</div><div>cols 2</div></p>
```

Go to [review](./lib/styler.html) section for more details.

</fieldset>

<fieldset id='stater' onclick='onPreview(this.id)' class='hidden'>
<legend><b>STATER</b> handling</legend>
<a href="./lib/stater.html" review> ( + )</a>

Stateful proxy object with **local** (stateful props), **global** and **contextual** scope.

```tsx
import sharing from './store'

const Component = (props, ({ stores: global })) => <>
   <input value={props.name} onChange={e => props.name=e.taget.value} />
   <input value={global.name} onChange={e => global.name=e.taget.value} />
   <input value={sharing.name} onChange={e => sharing.name=e.taget.value} />
</>
```

Global states are injectables, meanwhile createState generates the modular states.

<aside cols='2'>

```tsx
await server("#root")
  .inject({ global: { name:'word' }})
  .render()
```

```tsx
import { createState } from 'reactive'
const store = { name: 'world' }
export default createState(store)
```

</aside>


Go to [review](./lib/stater.html) section for more details.

</fieldset>

<fieldset id='ranker' onclick='onPreview(this.id)' class='hidden'>
<legend><b>RANKER</b> mechanism</legend>
<a href="./lib/ranker.html" review> ( + )</a>

Simple SEO using function decorators by @seo decorator with metatags support.

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

Go to [review](./lib/ranker.html) section for more details.

</fieldset>

<fieldset id='router' onclick='onPreview(this.id)' class='hidden'>
<legend><b>ROUTER</b> modeling</legend>
<a href="./lib/router.html" review> ( + )</a>

The `@route` decorator enables params (dynamic routes) by dependency injection.

```ts
@route('/whatever-route-you-want/params/:id')
const Params(props, { params }) => <h1>ID: { params.id }</h1>
```

Routing props enable componented layouts, nested routes (`./`) and lazy routing.

```tsx
const Sample = import('./main').asLazyComponent('Sample')

const Menu = (props) => <>
   <h1>Menu</h1>
   <a href='/main'>Main</a>
   <a href='/main/lazy'>Lazy</a>   
   <main route='/main'>Main</main>  <!-- conditional rendering -->   
   <Sample route='./lazy' />        <!-- lazy component routing -->
</!->
```
</aside>

Go to [review](./lib/router.html) section for more details.

</fieldset>

<fieldset id='binder' onclick='onPreview(this.id)' class='hidden'>
<legend><b>BINDER</b> properting</legend>
<a href="./lib/binder.html" review> ( + )</a>

Controlled component **props binding** with `[data]` and `[bind]` props.

```tsx
const Hello = props => <input data={props} bind='name' /> 
```

Uncontroled component `form[data]` with actions, validation, and authentication.

```tsx
const Form = (props, { errors }) => <form data={props} 
   method="post" action="http://api.sample.com"> 
   Name: <input bind='name' maxlength={50} /> 
   <button>Submit</button>
</form>
```

It is possible custom props directives by dependency injection.

```tsx
import { server } from 'reactive'
const shown = props => ({ ...props, hidden: !props.shown })
await server("#container").inject([ shown ]).render()
```
```ts
export const Sample = prop => <div show={false}>sampling...</div>
declare module "react" { interface HTMLAttribute { show?: boolean }}
```

Go to [review](./lib/binder.html) section for more details.

</fieldset>

<fieldset id='bearer' onclick='onPreview(this.id)' class='hidden'>
<legend><b>BEARER</b> authentication</legend>
<a href="./lib/bearer.html" review> ( + )</a>

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

Go to [review](./lib/bearer.html) section for more details.

</fieldset>
</article>
<br/>