<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />

<h1 title> 
   <a href='#' onclick="goto('./overview.html')">overview</a> 
   | <a href='#' onclick="goto('./preview.html#styler')">preview</a> 
   | <b>review</b>
</h1>

> module scope CSS • component scope CSS • layout props <br/>function decorator • SoC styling • vanilla-like CSS

<header>CSS style scoping</header>

## Modular CSS import
Reactful fixes global CSS leaking in CSS imports, applying CSS imports only in module components. Notice that this kind of CSS has no support for pseudo-selectors (:hover, :active, etc).


<aside cols='2'>
<section>

```tsx
import './hello.css'
export const Hello = () => 
   <h1>Hello World!</h1>
```

</section><section>

```css
/* modular css sample */
/* file: ./hello.css */
h1 { color: black; }
```

</section></aside>


## Component style decorator

A component-scope CSS could be achived by `@style` decorator with a function component, refering a path file CSS as argument to a related function component.

```tsx
@style('./hello.css')
export default const Hello = () => <h1>Hello World!</h1>
```

## Component CSS className

A component-scope CSS also could be achived within a global CSS just using the function component name as className tag in a global CSS.

<aside cols='2'>

```tsx
import './hello.css'

function Hello() {
   return <h1>Hello World!</h1>
}
```

```css
button.Hello { 
   color: green;
   padding: 10px 20px;
   background-color: silver;
}
```

</aside>

## New layout CSS props

New style props directive, enable easy grid layout with `[grid]` setting `display:grid` and `[cols]` enabling equal spliting size with number or string grid-column-template syntax.

<aside cols='2'>

```tsx
// cols = number
const Table = props =>  <>
   <section grid cols={2}>
      <div>Column 1</div>
      <div>Column 2</div>
   </section>   
</>
```

```tsx
// cols = grid-column-template
const Table = props =>  <>
   <section grid cols='1fr 1fr'>
      <div>Column 1</div>
      <div>Column 2</div>
   </section>   
</>
```
</aside>

The `[gaps]` props sets the both or vertical-horizontal margin between columns.

<aside cols='2'>

```tsx
// cols = number
const Table = props =>  <>
   <section grid cols={2} gaps='10px 10px'>
      <div>Column 1</div>
      <div>Column 2</div>
   </section>   
</>
```

```tsx
// cols = grid-column-template
const Table = props =>  <>
   <section grid cols='1fr 1fr' gaps='10px'>
      <div>Column 1</div>
      <div>Column 2</div>
   </section>   
</>
```
</aside>


<br/>
