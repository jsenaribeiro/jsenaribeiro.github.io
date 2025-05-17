<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./styling.css);
</style> 

# Style plus

> module-scoped CSS • component scope CSS • layout props • function decorator • SoC styling • vanilla-like CSS

## Modular-scoped

<a onclick='goto("review/scoping.html#css-transpiler")'>Module-scoped CSS</a> imports (no suport to pseudo-selectors).

<aside cols='2'><section>

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

## Component-scoped

Component-scoped by <a onclick='goto("review/scoping.html#style-decorator")'>function decorator</a> or <a onclick='goto("review/scoping.html#component-classname")'>component CSS className</a>.

```tsx
@style('../styles/hello.css')
export default const Hello = () => <h1>Hello World!</h1>
```

<aside cols='2' style='margin-top: 10px;'>

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


## Styled route

The CSS className `routed` styles the <a onclick='goto("review/scoping.html#styled-route")'>matched routed</a> `[link]` with current route.

```css
button.routed { background: wheat; font-weight: bolder; }
```