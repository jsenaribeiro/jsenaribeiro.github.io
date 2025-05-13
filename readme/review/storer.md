<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />

<h1 title> 
   <a href='#' onclick="goto('./overview.html')">overview</a> 
   | <a href='#' onclick="goto('./preview.html#storer')">preview</a> 
   | <b>review</b>
</h1>

> stateful proxy object • stateful props<br/>modular state • global state<br/> OOP state handling

<header>OOP state handling</header>

Stateful objects brings is a hookless concept for state handling with functional components. It uses performatic **delayed render** algorithm that enables that batchies successives changes (0.1 second range).

## Local states 

Local states is handled as self-rendering stateful props.

```tsx
const Hello = props => <>   
   Hello { props.name } !
   <input value={props.name} {onChange} />
</>

const onChange = e => props.name = e.taget.value
```

## Global stores

Global store shares state in all application by injection in Reactful server and been resolved as second argument.

<aside cols='4:5'>

```tsx
import server from '@reactful/server'

const user = { name: 'world' } 
const settings = { storage: user }

await server("/routes", settings)
     .render("#root")
```

```tsx
function Hello(p, { store }) {
   const on = e => p.name = e.target.value

   return <>   
      Hello { store.name } !
      <input value={store.name} onChange={on} />
   </>
}
```

</aside>

This is the second argument Feed interface.

```ts
interface Feeds {
   param: record    // route params
   store: record    // global state
   logon: record    // logged user
   await: boolean   // pending fetch
   fails: Invalid[] // fetch errors
   ref: any         // forwardRef (React 19)
}
```

The ref is realocated as ref field inside feeds object.

```tsx
const React19s = (props, ref) => <>...etc</>
const Reactful = (props, { ref }) => <>...etc</>
```

## Orbital states

States shared between modulesa and handled as second argument of @client(true) function decorator.

```ts
export const myStore = useStore({ guid: 0, name: 'john', date: new Date() })
```

```tsx
import { client } from '@reactful/client'
import { myStore } from './stores'

@client(true, myStore)
const Hello = props => <>   
   Hello { store.name } !
   <input value={store.name} {onChange} />
</>

const onChange = e => props.name = e.taget.value
```

<br/><br/>