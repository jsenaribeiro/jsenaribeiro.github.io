<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />

<h1 title> 
   <a href='#' onclick="goto('./overview.html')">overview</a> 
   | <a href='#' onclick="goto('./preview.html#ranker')">preview</a> 
   | <b>review</b>
</h1>

> search engine optimization • metatag args<br/>function decorator • html metatags

<header>search engine optimization</header>

It supports static and dynamic SEO using built-in function decorators with client-side and server-side approaches.

## SEO decorator

Function decorator with title and description.

```tsx
import { seo, MetaTag } from '@reactful/client'

@seo('title', 'description')
export function Hi(props) {
   return <>Hi...</>
}

const metatags: MetaTag = { 
   chartset: 'UTF-8', 
   keywords: 'key1, key2' 
}

@seo('title', metatags) 
const About = props => <>etc...</> 
```

## Open Graph Protocol

It also supports Open Graph Protocol metatags.

```tsx
import { seo, ImageMetaTagOG } from '@reactful/client'

const metatags: ImageMetaTagOG = { 
   chartset: 'UTF-8', 
   keywords: 'key1, key2' 
   og: {
      description: 'bla bla',
      alt: 'bla bla bla bla'
   }
}

@seo('Blah', metatags)
async function Blah(props) {
   const url = `${url}/${props.id}`
   const todo = fetch(url).then(x => x.json())

   return <>
      <title>{ todo.task }</title>
      <meta property='og:title' content='bla bla' />
      <h1>{ todo.task }</title>      
   </h1>
}
```

<br/>