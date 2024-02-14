<script src='./index.js'></script>
<style>@import url(./index.css);</style>

<article>
<embed type='text/html' src='./header.html' />
<header>helper prototyping</header>

<h1>work in progres...</h1>

> authentication • authorization<br/>jwt bearer • oAuth

## Auth definition

The Reactive is well integrated for bearer authentications as JWT bearer and oAuth protocol using the minimalist `ajaxness` Auth API.

```tsx
import { auth } from 'ajaxness'

// creating a login/logout object
export const session = auth()
   .fetch("http://www.api/login")
   .catch(x => "Fails", "/login")
   .match(x => x.access, "/")

// injecting session into server settings
await server('#id', { session }).render("#root")
```

## Session instance


Session object has login and logout methods with its related custom routes.

```tsx
import { session } from './my-session'

const onLogin = props => () => session
   .login(props.user, props.pass)

const Login= ({ usr, pwd }) => <>
   <h1>Account Login</h1>
   <input data={props} bind='user' />
   <input data={props} bind='pass' />
   <a onClick={onLogin(props)}>Login</a>
</>
```

## oAuth integration

With ajaxness Auth api, oAuth providers is easily integrates by OAuth interface.

```ts
const googleAuth: OAuth = {
   scopings: "public_profile,email,openid",
   tokenURL: "https://accounts.google.com/o/oauth2/auth",   
   guestURL: "https://www.googleapis.com/oauth2/v1/userinfo",
   clientId: "12345678901234567890.apps.googleusercontent.com",
   secretId: "abcdefghijklmnopqrstuvwxyz1234567890",
}

interface Profile { name: string, email: string }

export const session = auth<Profile>(googleAuth)
   .catch("/auth", x => "Authentatication fails")
   .match("/home", x => x.access_token)
```

## Authorization decorator


Simple full stack authorization by @auth decorator with regex inspection.

```tsx
@auth({ role: "user" }) function Profile() { ... }

@auth({ role: "user|admin" }) function Profile() { ... }

@auth({ role: "dev.+?|test" }) function Profile() { ... }
```

<br/>