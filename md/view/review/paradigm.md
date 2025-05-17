<script src='../index.js'></script>
<style>@import url(./index.css);</style> 

# Binding paradigm

## Architectural considerations

React is a one-way data binding and Angular has two-way data binding. Reactful stateful objects emulates the two-way data binding in a React application keeping the more performatic React one-way data flow architecture.

## React versus Angular

React and Angular are pretty uncomparable. One is a library, another is a framework. React is easier until starts its state management, but Angular destroy its advantage with its obscure ngModule. The nice simplicity of React functional component is hard to compare the clean organicity of Angular class component. 

So, the trade-offs between React and Angular are close enough to call it a personal choice. Unless Angular discards its ngModule or React evolves its state management to something more like Angular two-way data binding.

Its obvious that evolves a library state management is more feaseable than untangle a framework. And here stats the idea of React stateful object.

## Reactful Dual binding

Reactul dual data binding is a one-way data binding that emulates two-way data binding, using stateful objects and props directives. It is dual because it binds the value and the change event of each writeable HTML element (input, select, etc). There is two type of if: props binding for controlled components and form binding for uncontrolled components. 

| | | |
|-|-|-|
| input | onChange |
| select | onSelect |
| textarea | onChange |

## Props binding

Here an example of stateful props without any props binding with its verbosity using input value and onChange properties to deal with the binding.

```tsx
import { useState } from "react"

export default function Old() {
  const [name, setName] = useState("World")
  const setValue = e => setName(e.target.value)

  return <>
      <h1>Hello, {name}!</h1>
      <input value={name} onChange={setValue) />
   </>
}
```

```tsx
export default const New = props => <>
   <h1>Hello { props.name || 'World' }"</h1>
   <input value={props.name} onChange={e => props.name = e.target.value} />    
</>
```

The `[data]` receiving the object and `[bind]` props maps to its object field, this applies the input value into object field and triggers the component render. 

```tsx
const Hello = props => <>
   <h1>Hello { props.name || 'World' }"</h1>
   <input data={props} bind='name' />    
</>
```

## Form binding

Props binding is a controlled component two-way data binding, but form binding is its uncontrolled component alternative to `[data]` and `[bind]` props directives. 

```tsx
export const Form = props => <>
   <form data={props}>   
      Name: <input bind='name' />
      Mail: <input bind='mail' />    
      <button>Submit</button>
   </form>
</>
```

The self-rendering object is set in `[data]` and its children form elements maps each field with `[bind]`. The render will only be triggered by submit button. The form binding covers multiples inner features, like actions, validation and authentication.

### Form binding: action

Using form binding with action make a JSON serialization of data object, send to server with fetch api. The feeds.await has the boolean pending state. After the response, a new render will be done do update the component.

```tsx

export const Todo = (props, feeds) => <>
   <form data={props} action='http://www.api.com' method='POST' > 
      Task: <input bind='task' />
      Done: <input bind='mail' />    
      <button>Submit</button>
   </form>
   
   { feeds.await & <progress>loading...</progress>  }
</>
```

### Form binding: validation

Form biding validation follows the native HTML `validation API`, injecting its validation errors, joined with HTTP errors, in **feeds.fails** array.

```tsx
export const Todo = (props, feeds) => <>
   <form action='http://www.api.com' method='POST' > 
      Task: <input bind='task' maxlength={20} />
      Done: <input bind='mail' type='email' />    
      <button>Submit</button>
   </form>

   <ul hidden={!feeds.fails.length}>
      <label>Error Summary:</label>
      { feeds.fails.map((x,i) => <li>{ x }</li>) }
   </ul>   

   { feeds.await & <progress>loading...</progress>  }
</>
```

Custom validations is covered by `input[validate]` props, meanwhile `form[onError]` allows intercepts the fails array before the render to monitor, update or insert on it.

```tsx
export const Todo = (props, feeds) => <>
   <form action='http://www.api.com' method='POST' onError={onValidate} > 
      Task: <input bind='task' maxlength={20} />
      Done: <input bind='mail' type='email' validate={validateSpecificEmail} />    
      <button>Submit</button>
   </form>

   <ul hidden={!feeds.fails.length}>
      <label>Error Summary:</label>
      { feeds.fails.map((x,i) => <li>{ x }</li>) }
   </ul>   

   { feeds.await & <progress>loading...</progress>  }
</>

function validateSpecificEmail() {
   // return a non-empty string to invalidate
   return 'example of a custom email error message....'
}

function onValidate(errors: { field, error, value }[]) { 
   /* adding new errors to errors array */ 
   errors.push({ error: 'some custom error message' })
}
```

### Form binding: authentication

Form binding authentication enables JWT bearer authentication algorithm by `[bearer]` props in submit-time. It sets the token name field of response JSON.

<style>
   aside[auth] ul { zoom: 0.95; margin-left: 20px; }
   [auth] ul li:first-of-type { 
      list-style-type: none; 
      letter-spacing: 7px;
      font-weight: bold;
      margin-left:-20px;
      margin-bottom: 5px;
      border-bottom: solid 1px grey;
   }
</style>

<aside auth cols='5:3'>

```tsx
export const Login = (props, { fails }) => <>
   <form action='https://localhost/api/auth'
         method='POST' bearer='access_token'
         data={props}> 

      username: <input bind='username' />
      password: <input bind='password' />
      <button>Submit</button>

      <ul>{ fails.map(...) }</ul>   
   </form>
</>

```
- ALGORITHM
- submit to request
- stop if invalidated
- binding object fields
- object JSON serialization
- [bearer] sets token field
- request was sent to server
- authentication sent response
- ok: 'token' in sessionStorage
- ok: injects in feeds.logon
- err: append in feeds.fails
- err: clear 'token'

</aside>

In succed authentication, the session user and token are persisted in sessionStorage. The logged user could be resolved in any place of application as feeds.logon.

```tsx
// The `sessionStorage.set('logon')` retrives the current logged user
const Home = (props, { logon }) => <h1>username: { logon.name }</h1>
```


