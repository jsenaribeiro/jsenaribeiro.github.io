<script src='./overview.js'></script>
<style>
@import url(./overview.css);

section[features] ul {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
}

section[features] li {
   display: block;
   font-size: 13px;
   padding: 0 10px;
   text-align: center; 
   margin-bottom: 15px;
}

section[features] a {
   display: block;
   font-size: 1.3em;
   text-align: center;
   letter-spacing: 5px;
   margin-bottom: -3px;
}

</style>

<article overview>

# **overview** | <a href='#' onclick='goto("./preview.html")'>preview</a> | <a href='#'>review</a>

> SSR • SEO • scoped CSS • stateful objects • easy routing<br/>API routes • props binding • function decorators<br/>markdown support • RESTful actions

<style>
   [specs] tr td:nth-of-type(3) { zoom:0.9; line-height:15px; }
</style>


<section features>

- <a href='#' onclick='goto("./preview.html#server")'>server</a> full SSR with static, dynamic and periodic rendering
- <a href='#' onclick='goto("./preview.html#styler")'>styler</a> scoped CSS by import, decorator and classNames 
- <a href='#' onclick='goto("./preview.html#storer")'>storer</a> OOP stateful handling as stateful proxy objects
- <a href='#' onclick='goto("./preview.html#ranker")'>ranker</a> SEO by function decorators with metatags types 
- <a href='#' onclick='goto("./preview.html#router")'>router</a>  routing desgined by props, folder and function decorator
- <a href='#' onclick='goto("./preview.html#binder")'>binder</a> props bindings for controlled and uncontrolled components

</section>

<section specs >

<main summary cols='2' style='display:none'>

|                                                                |                                                            |     |
| :------------------------------------------------------------: | ---------------------------------------------------------- | --- |
| <a href='#' onclick='goto("./preview.html#server")'>server</a> | full SSR with static, dynamic and periodic rendering       |
| <a href='#' onclick='goto("./preview.html#styler")'>styler</a> | scoped CSS by import, decorator and classNames             |
| <a href='#' onclick='goto("./preview.html#storer")'>storer</a> | OOP stateful handling with proxy objects        |

|                                                                |                                                            |     |
| :------------------------------------------------------------: | ---------------------------------------------------------- | --- |
| <a href='#' onclick='goto("./preview.html#ranker")'>ranker</a> | SEO by function decorators with metatags types             |
| <a href='#' onclick='goto("./preview.html#router")'>router</a> |  routing by props, folder and decorator designing |
| <a href='#' onclick='goto("./preview.html#binder")'>binder</a> | controlled and uncontrolled props bindings |

</main>

<center index style='zoom:0.7'>

# Getting started...

</center>
<br/>


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