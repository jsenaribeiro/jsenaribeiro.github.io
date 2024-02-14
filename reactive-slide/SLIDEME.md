---
marp: true
theme: default
transition: fade 1s
class:
  - invert
---

<style scoped>
   section { text-align:center; }
</style>

<img src='./img/reactive.png' />

# reactive.**js**
less is **more**


<!-- transition: swap 1500ms -->
---

<center>

# OVERVIEW

Introduction, challenges and proposal

</center>

<style scoped>{ filter:invert(0.1) }</style>
---
<!-- transition: coverflow -->


## INTRODUCTION

- React is more than 80% frontend development
- React recommends its use throuth frameworks
- Next.js is the most popular React framework

---
<!-- transition: coverflow -->


<style>
@import url('https://fonts.cdnfonts.com/css/agave');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=family=Quicksand:wght@300;400;500;600;700&display=swap');

body, section { 
   font-family: 'fira sans'; 
   font-weight: 300; 
   color: #EEE;
}

[text] { padding-right:20px; }

strong { color: #E3E3E3; }

[cols] { display:grid }
[cols='2'] { grid-template-columns: 1fr 1fr; }
[cols='2:5'] { grid-template-columns: 2fr 5fr; }
[cols='3:5'] { grid-template-columns: 3fr 5fr; }
[cols='4:5'] { grid-template-columns: 4fr 5fr; }

img[src$='reactive.png'] { width:100px; margin:0 auto; }

h1 { font-size: 3em; color: wheat; font-weight:100 }

H2 { font-weight: 100; font-size: 1.6em; color: wheat;  }
h2:before, h3:before { content:'' }
code { font-family: 'agave' }
h2 code { 
   color: wheat;
   background: transparent;
   font-size: 1.1em !important; 
   padding: 0 !important;
}

h3 { font-weight:100; font-size: 1.3em; }
h3 code { background:transparent; font-size:1.1em; }
h3 code { padding: 0; color:wheat; }

p, li { color: silver; }

strong { font-weight:500; }

</style>

## CHALLENGES

<aside right cols='3:5'>
<section>

### `react`.js issues

- **scopeless CSS**
- hard state handling
- context API overnesting

</section>

```tsx
// this import will ovehides global CSS
// instead to be applied in components 
// declared in this current module

import './app.css'
```

<!-- transition: fade -->
---

## CHALLENGES

<aside right cols='3:5'>
<section>

### `react`.js issues

- scopeless CSS
- **hard state handling**
- context API overnesting

</section>

```tsx
function Example() {
   const [count, setCount] = useState(0)
   const changeTitle = n => document.title = 'counter:${n}'
   const increment = () => setCount(value => value+1)

   useEffect(() => { changeTitle(count) }, [count])

   // useMemo, usCallback, useReducer, etc...

   return <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
   </>
};
```

---

## CHALLENGES |`react`.js

<aside right cols='3:5'>
<section>

### `react`.js issues

- scopeless CSS
- hard state handling
- **context API overnesting**

</section>

```tsx
const Overnesting = () => <Router>
   <RouterContext.Provider value={Router}>
      <LanguageContext.Provider value={{ language, setLanguage }}>         
         <ThemeContext.Provider value={{ theme, setTheme }}>
            <QueryClientProvider client={queryClient}>
               <I18nextProvider i18n={i18n}>
                  <h1>pyramid of doom...</h1>
               </I18nextProvider>
            </QueryClientProvider>
         </ThemeContext.Provider>
      </LanguageContext.Provider>
   </RouterContext.Provider>
</Router>
```

<!-- transition: coverflow -->
---

## CHALLENGES

<aside right cols='3:5'>
<section>

### `next`.js flaws

- **unsolved react issues**
- overhead conventions 
- lack of metadata scope 
  
</section>

```ts
UNSOLVED ISSUES
= scopeless css
= hard state handling
= context api overnesting

NEXT.JS CLONES
- gatsby: no ssr
- fresh: no ssr
- remix: nor ssg, or isr
```

</aside>

<!-- transition: fade -->
---

## CHALLENGES

<aside right cols='3:5'>

<section>

### `next`.js flaws

- unsolved react issues
- **overhead conventions**
- lack of metadata scope 
  
</section>

```ts
FILE NAME CONVENTIONS 
layout, loading, error, page

FOLDER NAME CONVENTIONS
folder, [dynamic], (group)

PROPRIETARY CONVENTIONS
non-stardard JS solutions
```

</aside>

---

## CHALLENGES

<aside right cols='3:5'>

<section>

### `next`.js flaws

- unsolved react issues
- overhead conventions
- **lack of metadata scope**
  
</section>

```ts
"use client" // outer scope for 'use side'

function Component() { 

   // inner scope for rendering model
   fetch({ cache: { next: revalidate:10 }})
}
```

</aside>

<!-- transition: coverflow -->
---

## APROACHES

<style>
   table th { border:0; color:wheat; }
   table th { font-weight:100; font-size: 1.3em; }
   table th { border-bottom-color:white; }
   table tr td:not(:first-of-type) { font-weight:100 }
   table td, table tr { border:0 }
   table * { background-color: transparent !important }
   aside p { padding-right: 50px; }
</style>

<style scoped>
   table { margin-top: -80px; }
   h2 { border-bottom: solid 1px }
</style>

<aside cols='4:5'>

A standard vanilla-like approach that intruces new features like function decorators, data binding, props directive, among others.

| PROBLEM | SOLUTION |
|-:|:-|
| scopeless CSS | modular CSS plugin |
| hard state handling | stateful proxy objects |
| context API overnesting | dependency injection |
| overhead conventions | standard ecmascript |
| lack of metadata scope | function decorators |

</aside>

---

## PROPOSAL


+ **full SSR**: static, dynamic and periodic rendering 
+ **flex render**: support to JSX, HTML and markdown
+ **lean states**: simplified states with stateful objects
+ **versatile routing**: decorator, folder and props routing 
+ **props binding**: controlled/uncontrolled component props 
+ **scoped CSS**: modular CSS imports with component-scope CSS

<!-- transition: fade -->
--- 

## INNOVATIONS 

<aside cols='2:5'>

- **IoC container** 
- props directive
- stateful object
- data binding

Introduces a new dependency injection system to handle global states, props directives, error handling and overall settings for server-side rendering.

</aside>


--- 

## INNOVATIONS 

<aside cols='2:5'>

- IoC container 
- **props directive**
- stateful object
- data binding

Props directive enables an injectable standalone props into JSX elements (avoiding over-componentization), similar to Angular attribute directive. It is widely use by reactive framework and support custom props directive.

</aside>

--- 

## INNOVATIONS 

<aside cols='2:5'>

- IoC container 
- props directive
- **stateful object**
- data binding

Stateful object deeply simplifies functional components state handling with OOP. It encapsulates an useState state hooks that triigers render when object is changed. It has a performatic delay render algorithm and allow multiple states as simpple object member fields.

</aside>

--- 

## INNOVATIONS 

<aside cols='2:5'>

- IoC container 
- props directive
- stateful object
- **data binding**

Reactive data binding simplifies controlled and uncontrolled components with a data props that receives a stateful object, and a bind props that get its field name, mapping in background the value and event fields.

</aside>

<br/>


<!-- transition: swap 1500ms -->
---

<center>

## PREVIEW

<section preview>

Samples from framework features

</center>

<style scoped>
   section { filter:invert(0.1) }
</style>

---
<!-- transition: coverflow -->

### `create` tool

<main cols='3:5'><div text>

CLI project setup starter with scafold template using vite

</div><div>

```tsx
bun create reactive@latest
```
```sh
- template? empty | minimal | sampling
- project name? my-project
- vs code IDE? [Y/n] y
- install? yes
```

</div></main>


---

### `server` rendering

<main cols='3:5'><div text>

Server startup root for SSR with high-order component error handling with support to JSX, HTML and markdown.
</div><div>

```tsx
import { server } from 'reactive/server'

const failure = (status, errors) => <>...</>

await server('/routes', { failure }).render("#root")
```

</div></main>

---

### `styler` plugin

<main cols='3:5'><div text>

Fixed CSS imports adding a className component and @style decorator for component-scoped CSS.

</div><div>

```tsx
import './module.css' // only applied here!

@style('./component.css')
const App = props => <h1>Only here</h1>
```

```css
/* 'automatic' className component tag */
button.App { background-color: 'yellow' } 
```

</div></main>

---

### `stater` handling

<main cols='3:5'><div text>

Stateful proxy object for local (stateful props), global (by DI) and orbital states for regional subtree sharing data.

</div><div>

```tsx
import share from './store'

const Component = (props, { store }) => <>
   <input value={props.name} onChange={on(props)} />
   <input value={store.name} onChange={on(store)} />
   <input value={share.name} onChange={on(share)} />
</>

const on = state => e => state.name = e.target.value
```

</div></main>

---

### `ranker` engine

<main cols='2:5'><div text>

Seach Engine Optimization (SEO) is handled by function decorators with full metatags object model.

</div><div>

```tsx
import { seo, MetaTags } from 'reactive'

// title + description
@seo('Home', 'A home page...')
export function Home() { return <>...</> }

// title + full metatags object
@seo('About', { charset: 'UTF-8', keywords: 'about,etc' })
export function About() { return <>...</> }
```

</div></main>

---

### `router` modelling

<main cols='3:5'><div text>

Reactive support folder routing (for static route with no extra conventions), decorator routing for dynamic routes, and props routing for client-side (with lazy import).

</div><div>

```tsx
const Hello = import('./hello')
   .asLazyComponent('Sample')

@route('/whatever/params/:id')
const Sample(props, { params }) => 
   <h1>ID: { params.id }</h1>

export const Menu = (props, { route }) => <>
   <a link='/hello'>Hello</a>
   <a link='/about'>About</a>

   <Hello route='/hello' >
   <label route='/about'>About...</label>
</>
```

</div></main>

---

### `binder` properties

<main cols='2:5'><div text>

Binding props simplifies controlled and uncontrolled component integrated with validation API and server actions.

</div><div>

```jsx
const Hello = props => <input data={props} bind='name' /> 
```

```tsx
const Form = (props, { errors }) => <>
   <form data={props} {onSubmit} {onValidate}
      method="post" action="http://api.sample.com"> 
      Name: <input bind='name' maxlength={50} /> 
      <button>Submit</button>
   </form>
</>

function onSubmit(data) { /* handling data */ }
function onValidate(errs) { /* handling errs */ }
```

</div></main>



<!-- transition: swap 1500ms -->

---

<center>

## REVIEW

Reviewin features, concepts and design principles.

</center>

<style scoped>{ filter:invert(0.1) }</style>

---

<!-- transition: coverflow -->

</center>

## HIGHLIGHTS

* **SOLVES** | react.js complexity, verbosity and modular issues
* **REDUCES** | boilerplate code with stateful objects props binding
* **PREVENTS** | extra learning curve with no proprietary conventions

<style scoped>
   li strong { color:wheat; }
   li strong { font-size: 1.3rem; }
   li { 
      font-size: 1.1rem;
      list-style-type: none  
   }
   h2 { color:wheat; }
</style>

</center>

---

<center>

# `THANKS!` 

working in progress...


<style scoped>
   section { filter:invert(0.1) }
   h1 { font-size:3rem !important }
</style>


</center>