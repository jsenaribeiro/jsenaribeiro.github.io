function startup() {
   // setTimeout(interval, 333)
   createLinks('overview', document)
   createLogo(document)
   resizeIframe()
}

function interval() {
   var overview = document.getElementById('overview')
   console.log({ overview, document })
   overview.focus()
}

function resizeIframe() {
   const iframe = document.querySelector("iframe");
   const total = iframe.contentWindow.document.body.scrollHeight + 50
   iframe.style.height = total + "px";
}
 
function adjustZoom(content) {
   // content.style.zoom = 1.17
   // content.style.padding = '50px !important'
}

function createLinks(where, content) {
   const frame = content.querySelector("iframe")
   const links = content.querySelectorAll(`#${where} a`)
   const maker = a => `./src/${where}/${a.id}.html`
   const refix = _ => setTimeout(adjustZoom, 999)
   const apply = a => frame.src = maker(a)
   const click = a => { apply(a); refix(); }

   links.forEach(a => a.id = a.href.split('#').at(-1) ?? '')
   links.forEach(a => a.onclick = () => click(a))
   links.forEach(a => a.href = '#')

   const route = window.location.pathname
   const query = window.location.search
   const clear = () => history.replaceState(null, '', route + query)
   setTimeout(clear, 999)
}
