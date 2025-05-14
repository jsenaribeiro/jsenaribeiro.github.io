<style>@import url(./index.css);</style>
<!-- <script src='../../js/steps.js'></script> -->

# Installations

## Requirements

- bun
- node.js
- windows, mac or linux

## Templanting

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

## Bootstraping

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

<!-- ## Next steps...
- [Presentation](#)
- [Conceptions](#)
 -->


