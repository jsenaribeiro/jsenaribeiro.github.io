<script src='./overview.js'></script>
<style>@import url(./overview.css);</style>

<article overview>

<title>REACTFUL</title>

<section title>

# **overview** 

</section>

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

<section>

# getting started

<section concept>

| | |
|-|-|
| **routes** | static routing folder |
| **routes** | static routing folder |

</section>

</section>

<section specs hidden>

<center index style='zoom:0.7' >

# getting started
<br/>

</center>

<aside cols='4:5' style='zoom:0.9; margin-bottom:-15px;'>

```ps
$ bunx @reactful/create@latest
- template? empty|minimal|sampling
- project name? Sample
- vs code IDE? (Y/n) y
- install? yes

$ bun start
- building...
- bundling...
- serving...
```

```typescript
import { server } from '@reactful/server'
import { client, useState } from '@reactful'

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
