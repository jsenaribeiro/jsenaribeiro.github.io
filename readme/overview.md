<style>
   [index] h1 { margin-bottom:0; font-size: 1.3em !important; }
   table tr:last-of-type td { border-bottom:0 !important }
   table td {
      padding: 3px;
      font-size: 0.9em !important;
      border-bottom: grey solid 1px !important;
   }
</style>

<script src='./overview.js'></script>
<style>@import url(./overview.css);</style>
<article overview>
<title>REACTFUL</title>

<center style='margin-bottom:-5px; font-size: 1.1em; margin-top:5px;'>
<a href='#' onclick='goto("./preview.html#server")'>server</a> | <a href='#' onclick='goto("./preview.html#styler")'>styler</a> | <a href='#' onclick='goto("./preview.html#storer")'>storer</a> | <a href='#' onclick='goto("./preview.html#ranker")'>ranker</a> 
| <a href='#' onclick='goto("./preview.html#router")'>router</a> | <a href='#' onclick='goto("./preview.html#binder")'>binder</a> 
</center>

<section title>

# **overview** 

> A minimalist stateful react framework with stateful objects, full SSR, scoped CSS, stateful object, versatile routing and data binding.

</section>


<center index>

# project structure

Some default folders has semantic rule in framework.

</center>
<center cols='2'>
<aside>

|                  |                        |
| ---------------- | ---------------------- |
| [/apis](#)       | RESTful requests       |
| [/assets](#)     | public static contents |
| [/routes](#)     | page components        |
| [/controls](#)   | control components     |
| [/directives](#) | custom props handlers  |

</aside><aside>

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
</article>