<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Multiple server

## Semantic folders

Each default framework folder has a special responsability in project lyfe-cicle allowing multiple server features, like routing, apis, etc.

<iframe id='folder' src='../folder.html' ></iframe>

## RESTful apis 

The `/apis` folder serves webapis by `/api` route in URL address. The framework uses the HTTP verb names for semantic conventions to expose RESTful apis. Important to notice that where the folder is `'/apis'`, in url it works as `'/api'` for semantic reasons.

```ts
// warning: /api/ folder, but /api route
// routing: http://localhost:3000/api/sample
export const get = request => new Response('Hello World!')
```

## Markdown support

Reactful has a built-in markdown render with fully customized CSS by HTML inspection. It follows all routing rules, beeing exposed to conflicting name by others file extension variations. For example, if there is a about.md and a about.tsx in same folder, this will throws a build-time exception.

## Extended HTML

Reactful not only serves HTML, but also extends `<link>` tag with `type="react"`, allowing JSX imports. The default component assumes the filename as component, and named component are imported by `rel` attribute.

```html
<link type="react" href="./general.tsx" />   
<link type="react" rel="Special" href="./etc.tsx" />
```

So, the component could be used as normal element inside the HTML document.

```html
<html>
<head>
   <link type="react" href="./general.tsx" />   
   <link type="react" rel="Special" href="./etc.tsx" />
</head>
<body>
   <General /> <!-- default JSX into HTML -->
   <Special /> <!-- named JSX into HTML -->
</body> 
</html>
```


## Async components

The Reactful server async components with `Suspense API`. The await **props directive** offers an  alternative to `Suspense API`.

```tsx
async function AsyncSample(props) {
   const text = await fetch('www.api.com/text').then(x => x.text());
   return <section>content response: { text }</section>
}
```

<section cols='2' style='margin-top: 10px'>

```tsx
const SuspenseAlt = async _ => <>
   <Suspense fallback={<Loading/>}>
      <AsyncSample />
   </Suspense>
</>
```

```tsx
const AwaitAlt = async _ => <>
   <p await={AsyncSample}>
      <Loading/>
   </p>
</>
```

</section>
