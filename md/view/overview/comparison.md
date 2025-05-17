<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./comparison.css);
</style> 

# Comparison

Reactful is a high performance framework with embbed delayed render algorithm for its state management and all hybrid rendering strategies. Here is just a brief maintenability comparisons between Reactful and some others frameworks.  

| feature | next.js | reactful |
|-|-|-|
| routing | static routing with contra-intuitive, non-practical and verbose name conventions | simple static routing with path and decorators | 
| styling | scoped CSS with external libs as styledComponent and moduleCSS | native scoped CSS by module or component |   
| serving | 'use server' for server-side component in all module components | decorators can mark to an specific component |   
| routing | folder routing with counter-intuitive file name conventions for dynamic routes | use decorators to handle dynamic routes |
| storing | no improvement for state management, just reuse others libs and React hooks | it introduces the new stateful object |

| feature | angular                            | reactful                                |
| ------- | --------------------------------- | --------------------------------------- |
| binding | extensive data binding, but with peformance issues | new stateful object as reactive data binding  
| injecting | complex framework IoC container with multiple dependency injections | minimalist IoC for global state and props directives |
| directives | attribute directive is one of core exclusive Angular concepts | props directive version with minimalist coding |  
| moduling | double modular system with javascript modules and ngModules | as React framework, has a unified modular system |   

<br />