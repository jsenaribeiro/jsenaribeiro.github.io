<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Self rendering 

## Self rendering state

Self rendering states is a concept that avoid any extra boilerplate code to handle states in react. It is a classless and hoockless solution fully based in objects. 

## Stateful object concept

Any object is, by definition, stateful. But in React context, something stateful is a more specific domain. The concept of a stateful object is a way to deal simples object that tiggers the render when it is changed. 

Technically, a stateful object is a javascript proxy object that encapsulate the original object and state hooks. A proxy object can intercept each set and get behavior in object fields, and, this enable to triggers the render when the object field is changed, or and field in its inner objects.

## Stateful props 

The most basic state in React is the useState hook. In example bellow, is the lesser boilerplate code you will deal handling states in React.

```tsx
import React, { useState } from 'react';

function Hello() {
  const [name, setName] = useState('');
  const onName = e => setName(e.target.value)

  return <>
      <h1>Hello, {name || 'World'}!</h1>
      <input value={name} onChange={onName} />
   </>
}
```

The local states is handled by props itself, all props are self-rendering objects in Reacful, with no imports, no hooks, just props.

```tsx
const Hello = props => <>   
   <h1>Hello, { props.name } !</h1>
   <input value={props.name} 
      onChange={e => props.name = e.target.value} />
</>
```

With <a onclick="review/paradigm.html#props-binding">props binding</a>, the code is even cleaner.

```tsx
const Hello = props => <>   
   <h1>Hello, { props.name } !</h1>
   <input data={props} bind='name' />
</>
```

All the follow examples will use dual binding.

## Global store

Global store follows the principle of unique source of thuth, so it is the unique self-rendering for all application that you need inject in server startup function.

```tsx
const myStore = { name: 'world' }
await server({ store: myStore }).render()
``` 

After injected in Reactful IoC container, it is available as feeds.store in component second argument, with no extra import.

```tsx
const Hi = (props, { store }) => <>   
   <h1>Hi, { store.name } !</h1>
   <input data={store} bind='name' />
</>

const Hello = (props, { store }) => <>   
   <h1>Hello, { store.name } !</h1>
   <input data={store} bind='name' />
</>
```

## Partial states

Partial states allows multiple modular shared stores. First step, you need to creat explicitly a store by useStore function.

```ts
import { useStore } from '@reactful/client'

export const person = useStore({ guid: 0, name: 'john' })
```

After, you need to import your store and binding it into a component using `@client(true, state=null)` decorator second parameter

```tsx
import { client } from '@reactful/client'
import { person } from './stores'

@client(true, person)
const Hello = props => <>   
   Hello { person.name } !
   <input data={person} bind='name' />
</>
```

## Performatic algorithm

The Reactful implements an delayed render algorithm (or batching algoritm) that waits 0.5s between changes to trigger the render. This avoid a component over-rendering that impacts its performance, at same time, is short enough not be perceivable to user.

## Deconstruction limitation

Since self-rendering states are objects, it means that if the object is deconstructed into fields, it will loss its self-rendering behavior. Bellow, the name is not self-rendering, since it is not more a field in a object, but just a value (string).

```tsx
const Hello = ({ name }) => <>   
   <h1>Hello { name } !</h1> <!-- no self-rendering here -->
   <input value={name} onChange={e => name = e.target.value} />
</>
```