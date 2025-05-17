<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Property directives

## Angular directives

Directives are a core concept in Angular. The kind of Angular-like directive emulated by props directive in Reactful is the attribute directive. With attribute directive is possible to create a attribute that you can shared between multiple components.

## Reactful directives

Reactful directives are built-in props directives that appends new attributes in HTML elements, enabling data binding, style extensions, etc.

## Props directives

Directives injects props into HTML elements, allowing shareed behaviors between elements without any related component, working like a property transformers.

<section cols='5:4'>

```tsx
// decorator producer
const decorator = props => { ...props }
```

```html
<!-- decorator consumer -->
<element decorator='done' />
```

</section>

## Custom directives

Custom directives are registered injecting it in the server IoC container, above an example of how to create, register and use a function decorator.

```tsx
import { server } from '@reactful/client'

// 1. create a function that receives and returns a props 
const shown = props => ({ ...props, hidden: !props.shown })

// 2. inject the function into server IoC container
await server("/routes").inject([ shown ]).render("#root")

// 3. declare in module "react" to enable intellisense
declare module "react" { interface HTMLAttribute { show?:boolean }}

// 4. just the props directive in elements
export const Ok = prop => <div shown={true}>Show me!</div>
```

## Performance issues

Directives are processed in rendering time for each element. In general, it has negligenciable impact in performance, but a large number of it could has somo significant performance impact to application. So, be aware of this.

## Utility concern

Directives are very powerful and versartile feature, but its probably more useful as native framework directive, specially for enabling routing and binding.
