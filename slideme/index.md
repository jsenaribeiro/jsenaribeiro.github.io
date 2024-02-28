---
marp: true
theme: default
transition: fade 1s
class:
  - invert
---

<style>@import url(index.css);</style>

<style scoped>
   section { text-align:center; }
   img { margin: 0 auto; }
</style>

<img src='../img/reactful.png' width='150px' />

# reactful.**js**
fullstack react framework


<!-- transition: swap 1500ms -->
---

<center>

## OVERVIEW

Introduction, challenges and proposal

</center>

<style scoped>{ filter:invert(0.1) }</style>
---
<!-- transition: coverflow -->


## CONTEXTUALIZATION


- React is more than 80% of frontend development
- React docs recommends be used only by frameworks
- Next.js is the most popular React framework

---
<!-- transition: coverflow -->

## CHALLENGES

<style scoped>
   [vertical] {  
      zoom: 0.9;
      display: flex;
      align-items: center;
   }   
   aside[right] { padding-top: 30px; }
</style>

<aside right cols='3:5'>
<section vertical>

- **boilerplate code**
-  pyramid of doom
- counter-intuitive rules

</section>

```tsx
import React from 'react'

function Example() {
   const [count, setCount] = useState(0)
   const on = () => setCount(count + 1)

   return <>
      <h1>Counter: {count}</h1>
      <button onClick={on}>+</button>
   </>
};
```

---
## CHALLENGES


<style scoped>
   [vertical] {  
      zoom: 0.9;
      display: flex;
      align-items: center;
   }   
   aside[right] { padding-top: 30px; }
</style>

<aside right cols='3:5'>
<section vertical>

- boilerplate code
- **pyramid of doom**
- counter-intuitive rules

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

---

## CHALLENGES

<style scoped>
   [vertical] {  
      zoom: 0.9;
      display: flex;
      align-items: center;
   }   
   aside[right] { padding-top: 30px; }
</style>

<aside right cols='3:5'>
<section vertical>

- boilerplate code
- pyramid of doom
- **counter-intuitive rules**

</section>

```
Some Hook rules and concerns:

- Don't call inside loops
- Don't call inside conditions
- Don't call inside nested functions
- Don't call after a return statements
- Must keep same order in every render cycle
- Must be called in top-level functional components
- Asynchronous states requires useState + useEffect
- Manual risk management of useEffect endless loops
- Risk of low-performance (useMemo + useCallback)
```


<!-- transition: coverflow -->
---

## PROPOSAL

A stateful handling using javascript Proxy object that encapsulates a `useState` hook within a server-side rendering framework to maximize its performance.
<br/>

* **stateful objects**: reactive self-rendering objects (during changes)
* **relayed render**: batching render algorithm for stateful objects 
* **stateful props**: component props to handle local states 
* **state injection**: global states handled by framework IoC container
* **orbital states**: shared states within a component tree (context API)


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

<main cols='3:5'><div text>

### `local` stateful props

Stateful props is the framework transformation of all component props in stateful objects made by Reactful framework, unifying the React concepts of props and states. With the new binding props the code is even leaner.

</div><div>

```tsx
import React from 'react'

function React(props) {
   const [name, setName] = React.useState('')
   const onName = e => state.name = e.target.value
   return <input value={name} onChange={onName(props)} />
}
```
```tsx
// Reactful: stateful props
const Reactful = props => <input value={props.name} 
   onChange={e => props.name = e.target.value} />
```
```tsx
// Reactful: stateful props + binding props
const Reactful = props => <input bind='name' />
```

</div></main>

---

<main cols='3:5'><div text>

### `global` state injection

There is no global state properly in React, but just a contextual state that is generally put into root component (then the state works like a global one). In Reactful offers a global state as stateful object with dependency injection and framework IoC.

</div><div>

```tsx
import server from '@reactful/server'

const myGlobalState = { name: 'world' } 
const settings = { storage:myGlobalState }

// injecting a global state into IoC container
await server("/routes", settings).render("#root")
```
```tsx
// DI with 2nd argument destructring
function Hello(p, { store }) {
   const on = e => p.name = e.target.value
   return <> Hello { store.name } !
      <input value={store.name} onChange={on} />
   </>
}
```

</div></main>

---

<main cols='4:5'><div text>

### `orbital` module state

**React alternative**

Reactful orbital state covers the React context API use case that demands:

- export createContext object
- useContext component wrap
- put useStates inside context
- import createContext object
- extract injected useStates
- useState normal usage

</div><div>

```tsx
import React, { useContext } from 'react'

const ThemeContext = React.createContext('light')

function App() {   
   const [theme, setTheme] = useState('light')
   return <ThemeContext.Provider {value}>
      <Sub />
   </ThemeContext.Provider>
}

function Sub() {
   const { theme } = useContext(ThemeContext)
   return <p>Theme = {theme}</p>
}
```

</div></main>

---

<main cols='4:5'><div text>

### `orbital` module state
**reactful alternative**

Reactful orbital state works creating a stateful object with useStore function and associating this stateful object in component that want to be bound using a function decorator @state.

- instantiate a useStore object
- associated by @state decorator
- bound-only reactive components 


</div><div>

```tsx
import { useStore, state } from '@reactful/web'

const theme = useStore({ mode:'light' })

const App = () => <Child />

@state(theme) 
const Sub = () => <p>Theme = {theme.mode}</p>
```

</div></main>

---

<style scoped>
   th { 
      font-family: quicksand;
      font-weight: 700 !important; 
      font-size: 1rem;
   }
</style>

### `orbital` module state
**shared state comparisons**

<br/>

| React | Reactful |
|-|-|
| It renders all component subtree wrapped by context API. So, when the shared state is changed, all component inside of wrapped subtree will render. | It renders within bound components with @state associated with specific state. So, when the related stateful object is changed, it will only render the bound component and its children. |


<!-- transition: swap 1500ms -->

---

<center>

## REVIEW

advantages, innovations and highlights.

</center>

<style scoped>{ filter:invert(0.1) }</style>

---

## ADVANTAGES

* `FULL` SSR with SSG and ISR
* `FAST` rendering with bun.js + SSR
* `LITE` bundle with partial hydration
* `LEAN` state handling with stateful objects
* `FLEX` routing by props, folder and decorator
* `NICE` devex with cleaner and clearer code
* `EASY` SEO with function decorators

<!-- transition: coverflow -->

---

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

check out our documentation
[jsenaribeiro.github.com/reactful](#)


<style scoped>
   section { filter:invert(0.1) }
   h1 { font-size:3rem !important }
</style>


</center>