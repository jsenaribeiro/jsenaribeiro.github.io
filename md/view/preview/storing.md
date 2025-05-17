<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./stouring.css);
</style> 

# Stateful objects

> self-rendering state • stateful proxy object • stateful props • modular state • global state • state handling • dependency injection

## Local props 

Local states with <a onclick='goto("review/stateful.html#stateful-props")'>self-rendering</a> props (all props are converted in stateful objects).

```tsx
const Hello = props => <> Hello { props.name } !
   <input value={props.name} {e => props.name = e.target.value} />
</>
```

## Global store

Injectable <a onclick='goto("review/stateful.html#global-store")'>global store</a> is resolved in component <a onclick='goto("review/injection.html")'>second argument</a> as store object.

```tsx
await server({ store: { name: 'world' } }).render("#root")

const Hello = (props, feeds) => <>
   Hello { feeds.store.name || 'World' } !
   <input value={feeds.store.name} 
            onChange={e => props.name = e.target.value} />
</>
```

## Partial states

The <a onclick='goto("review/stateful.html#partial-states")'>partial states</a> allows multiples shared store with `@client(true)` decorator.

```ts
const guy = useStore({ guid: 0, name: 'john' })

@client(true, guy)
const Hello = props => <> Hello { guy.name } !
   <input value={guy.name} {e => guy.name = e.target.value} />
</>
```