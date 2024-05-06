<script src='./overview.js'></script>
<style>@import url(./overview.css);</style>

<article overview>
<section menu center menu-top>
   
   [easy](# 'vanilla-like low learning-curve') 
   • [lite](#) 
   • [lean](#) 
   • [fast](#) 
   • [full](#) 
   • [flex](#) 
   • [nice](#)

</section>

# **overview** | <a href='#' onclick='goto("./preview.html")'>preview</a> | <a href='#'>review</a>

> SSR • SEO • scoped CSS • stateful objects • easy routing<br/>API routes • props binding • function decorators<br/>markdown support • RESTful actions

<style>
   [specs] tr td:nth-of-type(3) { zoom:0.9; line-height:15px; }
</style>

<section specs>


<main>

|                                                                |                                                                                       |     |
| :------------------------------------------------------------: | ------------------------------------------------------------------------------------- | --- |
| <a href='#' onclick='goto("./preview.html#server")'>server</a> | full SSR with JSX, markdown and extended HTML support                                 |
| <a href='#' onclick='goto("./preview.html#styler")'>styler</a> | scoped CSS with @style decorator, global className tag, and fixed modular CSS imports |
| <a href='#' onclick='goto("./preview.html#storer")'>storer</a> | stateful handling with proxy objects for local, global and 'orbital' component scope  |
| <a href='#' onclick='goto("./preview.html#ranker")'>ranker</a> | SEO using function decorators with metatags and open graph protocol support           |
| <a href='#' onclick='goto("./preview.html#router")'>router</a> | advanced routing with props, folder and decorator routing declarative approaches      |
| <a href='#' onclick='goto("./preview.html#binder")'>binder</a> | props bindings for simplified controlled and uncontrolled components approach         |
| <a href='#' onclick='goto("./preview.html#helper")'>helper</a> | types, retypes and prototypes extensions for typed and extended resources             |

<main>

<center index style='zoom:0.7'>

# Getting started...

</center>

Creating a new **@reactful** project using `@reactful/create` scaffold binaries.

<aside cols='4:5' style='zoom:0.9; margin-bottom:-15px;'>

```ps
$ bunx @reactful/create@latest

- template? empty|minimal|sampling
- project name? Sample
- vs code IDE? (Y/n) y
- install? yes
```

```c
\apis          # restiful apis      
\assets        # public static files
\builds        # bundle and SSG htmls
\components    # common jsx components
\directives    # custom props directives
\routes        # pages with md, jsx and html
```

</aside>

Starting the **@reactful** server at `/index.ts` and routed client component in `/routes/hello.tsx`

<aside cols='4:5' style='zoom:0.9'>

```typescript
import server from '@reactful/server'

const global = { name: 'World' }

await server("/routes")
     .inject(global)
     .render("#root")
```

```typescript
import { client, useState } from '@reactful'

@client(true)
export const Hello = (props, { store }) => <>
   <label>Hello { store.name }</label>
   <input data={store} bind='name' />
</>
```

<br/>
</aside>
</section>
</article>