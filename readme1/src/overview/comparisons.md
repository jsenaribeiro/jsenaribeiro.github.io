<style>
@import url(./index.css);
@import url(./comparisons.css);
</style> 

# Comparisons

Reactful support all main performance resources, as  hybrid rendering, server component support, resource, etc, also implement delayed render algorithm in its stateful object concept. Here has some comparison considering agility, productivity and learnability issues.  

Reactful is a minimalist next.js alternative with covers all its resources and with some exclusive angular framework features ported to React, as data binding and attribute directives. And implement function decorator transpiler, allowing decorators with function components. 

## Reactful vs Next.js

| feature | nextjs | reactful |
|-|-|-|
| routing | static routing with contra-intuitive, non-practical and verbose name conventions | simple static routing with path and decorators |
| styling | scoped CSS with external libs as styledComponent and moduleCSS | native scoped CSS by module or component |  

## Reactful vs Angular

| feature | nextjs                            | reactful                                |
| ------- | --------------------------------- | --------------------------------------- |
| binding | extensive data binding, but with peformance issues | new stateful object as reactive data binding  
| injecting | built-in framework IoC for extensive and multiple dependency injections | minimalist IoC for state and props directives |
| directives | core concept where attribute directive is exclusive Angular resource | props directive version with minimalist coding |   