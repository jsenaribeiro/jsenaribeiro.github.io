const delay = (timeout, action) => setTimeout(action, timeout)

function startup() {
   const frame = document.querySelector("iframe")

   createLinks('overview')
   createLinks('preview')
   createLinks('review')

   createLogo(document)
   resize(frame)
}

function resize(iframe, remake) {
   const repeat = () => resize(iframe, true)   
   const target = iframe.contentWindow.document.body
   const height = target?.scrollHeight + 'px'

   if (!height) return
   else iframe.style.height = height
   if (!remake) setTimeout(repeat, 333)
}
 
function createLinks(where) {
   const links = document.querySelectorAll(`#${where} a`)
   const mount = uid => `./src/${where}/${uid}.html`
   const click = elm => goto(mount(elm.id), true)  

   links.forEach(a => a.id = a.href.split('#').at(-1) ?? '')
   links.forEach(a => a.onclick = () => click(a))
   links.forEach(a => a.href = '#')

   clearHash()
}

function goto(url, focused) {
   document.querySelectorAll('.active')
      .forEach(x => x.classList.remove('active'))
   
   const iframe = document.querySelector('iframe')
   iframe.style.height = 'auto'
   iframe.src = url

   delay(111, () => resize(iframe))

   if (focused) return

   const label = url.split('/').at(-1).split('.')[0]
   const child = document.querySelector(`#${label}`)
   child.classList.add('active')

   const hash = url.split('#').at(-1).trim()
   if (!hash) return   
   console.log({hash})

   delay(999, () => gotoHash(iframe, hash))
}

function gotoHash(iframe, hash) {
   const target = iframe.contentWindow
      .document.querySelector('#' + hash);

   if (target) target.scrollIntoView({ behavior: 'smooth' });

   console.log({target}) 
}

function clearHash() {
   const route = window.location.pathname
   const query = window.location.search
   const value = route + query
   const clear = () => history.replaceState(null, '', value)

   delay(999, clear)   
}
