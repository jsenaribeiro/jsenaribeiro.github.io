<style>@import url(./index.css);</style>

<article onload='reZoom()'>
<section menu center menu-top>
   
   [easy](# 'vanilla-like low learning-curve') 
   • [lite](#) 
   • [lean](#) 
   • [fast](#) 
   • [full](#) 
   • [bold](#) 
   • [nice](#)

</section>

<h1 title> <a href='../main.html#overview'>overview</a> | <a href='../main.html#preview'>preview</a> | <b>review</b> <div title>styler scope improvements</div></h1>

> module scope CSS • component scope CSS • grid layout props <br/>function decorator • SoC styling • vanilla-like CSS

Reactive styler extensions fixes CSS scoping in react development, allowing vanilla-like SoC between styling and structuring. It is an oposite CSS approach to tailwind.css, reducing boilerplate styling code in component modelling as vanilla-like SoC.

## module scope import CSS

Reactive framework fixes the modular import CSS issue in react, avoiding global CSS leaking in import CSS. So, CSS imports is only applied in current module components.


<aside cols='2'>
<section>

```tsx
export const About = () => 
   <h1>About Hello!</h1>
```

```tsx
import './hello.css'
export const Hello = () => 
   <h1>Hello World!</h1>
```

</section><section>

```css
/* global.css */
h1 { color: blue; }
```

```css
/* modular css sample */
/* file: ./hello.css */
h1 { color: black; }
```

</section>
</aside>

## component scope CSS

The `@style` decorator enables component-scope CSS programmatically in JSX.

```tsx
@style('./hello.css')
export default const Hello = () => <h1>Hello World!</h1>
```

In global CSS is also possible achive component-scope CSS using component name as className CSS. Reactive transform all component name as className CSS for its children.

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

## grid layout prop directives

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
   <section grid cols={2} gaps='10px'>
      <div>Column 1</div>
      <div>Column 2</div>
   </section>   
</>
```

```tsx
// cols = grid-column-template
const Table = props =>  <>
   <section grid cols='1fr 1fr' gaps='10px 10px'>
      <div>Column 1</div>
      <div>Column 2</div>
   </section>   
</>
```
</aside>


<br/><br/><br/>
