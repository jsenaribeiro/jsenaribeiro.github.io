<style>@import url(./overview.css);</style>
<script src='./overview.js'></script>
<article overview>

<title>REACTFUL</title>
<center style='zoom:0.7'>

# **overview** | <a href='#' onclick='goto("./preview.html")'>preview</a>

</center>

> A react framework with function decorators, stateful objects, data binding, advanced routing, props directives, compreensive SSR, scoped CSS and SEO support.

<center index style='margin-top:-10px'>

# project structure

Some default folders has semantic rule in framework.

</center><center cols='2'><aside style='justify-self: end;'>

|                                                                     |                        |
| ------------------------------------------------------------------- | ---------------------- |
| <a href='#' onclick='goto("./preview.html#server")'>/apis</a>       | RESTful requests       |
| <a href='#' onclick=''>/assets</a>     | static contents |
| <a href='#' onclick='goto("./preview.html#router")'>/routes</a>     | page components        |
| <a href='#' onclick=''>/controls</a>   | control components     |
| <a href='#' onclick='goto("./preview.html#binder")'>/directives</a> | custom props handlers  |

</aside><aside style='justify-self: start;'>

|                 |                   |
| --------------- | ----------------- |
| [.env](#)       | Environment file  |
| [.ignore](#)    | Git ignored files |
| [index.ts](#)   | Startup HTML      |
| [index.html](#) | Startup HTML      |

</aside>
</center>

<section specs >

<center index>

# getting started

Create a new project with use reactful template creator using bunx.

</center>

<aside cols='4:5' style='zoom:0.9; margin-bottom:-15px;'>

```ps
$ bunx @reactful/create@latest
- template? empty|minimal|sampling
- project name? MyProjectName
- is vsCode IDE? (Y/n) y
- install? (Y/n) y
- serve? (Y/n) y
- installing...
- serving...

running at localhost:3000
```

```typescript
import { server } from '@reactful/server'
import { client } from '@reactful'

await server("/routes").render("#root")

@client(true)
export const Hello = props => <>
   <label>Hello { props.name }</label>
   <input data={props} bind='name' />
</>
```

</aside>
</section>

<br/>

Go to <a href='#' onclick='goto("./preview.html")'>preview</a> page to get more details about the framework capabilities and resources.

<center links>
<a href='#' onclick='goto("./preview.html#server")'>server</a> | <a href='#' onclick='goto("./preview.html#styler")'>styler</a> | <a href='#' onclick='goto("./preview.html#storer")'>storer</a> | <a href='#' onclick='goto("./preview.html#ranker")'>ranker</a> 
| <a href='#' onclick='goto("./preview.html#router")'>router</a> | <a href='#' onclick='goto("./preview.html#binder")'>binder</a> 
</center>

</article>

<style>   
   [title] { margin: -9px 0 -25px 0 !important; }
   [title] h1 { letter-spacing: 13px !important; }
   table tr:last-of-type td {
      border-bottom: 0 !important
   }

   table td {
      padding: 3px;
      font-size: 0.9em !important;
      border-bottom: grey solid 1px !important;
   }
</style>