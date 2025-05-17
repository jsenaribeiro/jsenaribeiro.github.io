<script src='../index.js'></script>
<style>@import url(./index.css);</style>
<!-- <script src='../../js/steps.js'></script> -->

# Introduction

> bun • templates • cli • server • script • typescript

## Creating a new project

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

## Running application

```ps
$ bun run start # running at locahost:3000
```

## Starting code

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


