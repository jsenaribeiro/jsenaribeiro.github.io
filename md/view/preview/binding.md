<script src='../index.js'></script>
<style>
@import url(./index.css);
@import url(./binding.css);
</style> 

# Data binding

> props binding • form binding • two-way data binding • declarative actions • validation • authentication

## Props binding

<a onclick='goto("review/paradigm.html#props-binding")'>Props binding</a> is enabled by `[data]` receiving the object and `[bind]` mapping to its field.

```tsx
export const Hello = props => <>
   <h1> Hello { props.name || 'World' }!</h1>
   <input data={props} bind='name' />  
</>
```

## Form binding

<a onclick='goto("review/paradigm.html#props-binding")'>Form binding</a> is a uncontrolled component enabled by `form[data]` and `child[bind]`.

```tsx
export const Form = props => <>
   <form data={props}> 
      Name: <input bind='name' />
      Mail: <input bind='mail'/>    
      <button>Submit</button>
   </form>
</>
```

It supports customizable <a onclick='goto("review/paradigm.html#form-binding-validation")'>validation API</a> with pending states in **feeds.await**, form actions, error handling and `[onFetch]` props handler and <a onclick='goto("review/paradigm.html#form-binding-authentication")'>JWT bearer authentication</a>.

```tsx
export const Form = (props, feeds) => <> 
   { feeds.await & <progress>loading</progress> }

   <form data={props} onError={onValidate}>
      Name: <input bind='name' maxlength={50} />
      Mail: <input bind='mail' validate={validateEmail} />    
      <button>Submit</button>
   </form>

   <ul className='error-summary-block'>
      { feeds.fails.map(x => <li>{ x.message }</li>) }
   </ul>
</>

const validateMe = () => "Is invalidated if return something"
const onValidate = invalids => invalids.errors.push({ error: 'new error' })
async function onPost(response: Response) { /* something... */ }
```

<aside cols='3:5'>

```tsx
const Form = () => <form 
   action='www.api.com' 
   onFetch={onPost}> ...
</form>
```

```ts
async function onPost(response: Response) {
   const data = await response.json()
   // done something...   
}
```

</aside>


