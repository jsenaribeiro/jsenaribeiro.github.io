<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Extended CSS

## Fake CSS imports

All CSS imported in React is leaked to global scope. Even importing in a given module, the CSS import is completelly fake in its sematics. It is the same to import a CSS using link[href] in HTML. So, CSS imports in React are useless and error phrone.

```tsx
import 'my.css' // global, not modular
```

## Alternative solutions

There is two major library alternatives to deal with this React structural bug: "CSS modules", that uses naming conventions in CSS filename to achive module-scope, and styled component, where components is creating not in CSS, but inside typescript. Both fails to just deliver a CSS import that works as it expected.

```tsx
// css-module library approach using 'module.css' suffix convention
import cssModule from './blog.module.css' 

// styled-component library approach using special into script
const styledComponent = styled.section`padding: 4em; background: papayawhip;`;
```

## CSS transpiler

To fix this, Reacftul create a micro-transpiler with Bun that manages all CSS imports in javascript module in a way that it work as it is expected. So, 

```tsx
import 'my.css' // only applied into intra-module components
```

## Transpiler limitations

This transpiler not work yet with pseudo-selector, so, for CSS with :first-of-type, :before, :hover, and others pseudo-selectors, the Reactful modular CSS will not work.
 
## Style decorator

The `@style('path')` function decorator enables a component-scoped CSS in script-side, binding a CSS path file to an specific functional component.

```tsx
@style('../styles/hello.css')
export default const Hello = () => <h1>Hello World!</h1>
```

## Component className

All inner elements in a component has added the component name as CSS className, allowing a CSS side way to style to an specific component.

<aside cols='2'>

```tsx
import './hello.css'
function Hello() {
   return <h1>Hello!</h1>
}
```

```css
h1.Hello { 
   color: red;
   padding: 20px;
}
```

</aside>

## Grid layout props

Built-in props directives for CSS grid layout with `[grid]`, `[cols]` and `[gaps]`, allowing an easy and clear way to layout directally in HTML.

```tsx
const original = `gap:10px; display:grid; grid-template-columns:1fr 1fr`
```

<aside cols='4:5'>

```tsx
const Before = props => <>
   <p style={original}>
      <div>Column 1</div>
      <div>Column 2</div>
   </p>   
</>
```

```tsx
const After = props =>  <>
   <p grid gaps='10px' cols='1fr 1fr'>
      <div>Column 1</div>
      <div>Column 2</div>
   </p>   
</>
```
</aside>

## Styled route

The `.routed` is a CSS className that allows to style the current route link `[link]` that matches to current route, to style its a toggle state as active. So, all elements with `[link]` that matches the route that is mapped for, it will apply the `.routed` CSS class.

```css
button.routed { background: wheat; font-weight: bolder; }
```
