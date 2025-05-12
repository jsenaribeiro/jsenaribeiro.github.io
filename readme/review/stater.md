<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />
<header>stater handling</header>

> stateful proxy object • stateful props<br/>modular state • global state<br/> OOP state handling

## Self-rendering stateful objects

Stateful proxy object (SRO) is a hookless self-rendering state object concept taht enable simple OOP interation as state, without any extra coding.

## Local props

Stateful props turns native props in self-rendering state.

```tsx
const Hello = props => <>   
   Local Hello { props.name } !
   <input value={props.name} {onChange} />
</>

const onChange = e => props.name = e.taget.value
```

## Global stores

Injectable self-rendering global states as simple objects.

```tsx
import { server } from 'reactful/server'

const user = { name: 'world', now: new Date() } 
const settings = { storage: user }

await server("/routes", settings)
     .render("#root")
```

The injected state in second parameter as store member.

```tsx
const Hello = (props, { store }) => <>   
   Local Hello { store.name } !
   <input value={store.name} {onChange} />
</>

const onChange = e => props.name = e.target.value
```

## Orbital states

Orbital states allows modular semantics with function decorators.

```ts
import { useStore } from '@reactful/web'
export const myStore = useStore({ guid: 0, name: 'john', date: new Date() })
```

```tsx
import { state } from '@reactful/web'
import { myStore } from './stores'

@state(myStore)
const Hello = props => <>   
   Local Hello { store.name } !
   <input value={store.name} {onChange} />
</>

const onChange = e => props.name = e.taget.value
```

<br/><br/>