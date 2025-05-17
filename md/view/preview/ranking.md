<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./ranking.css);
</style> 

# Ranking Engine

> automatic sitemap • seo decorator • open graph protocol metatags • robot multple environments

## Automatic SEO

It support robot.txt and sitemap.xml auto-generation based on project routes.

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