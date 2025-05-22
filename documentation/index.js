console.log('index.js')

function startup() {   
   createLogo(document)
}

function goto(href) {
   console.log({ href })
   document.querySelector('main[iframe]').hidden = false
   document.querySelector('iframe').src = href
   document.querySelector('main[index]').hidden = true
}

function adjustZoom(content) {
   content.style.zoom = 1.17
   content.style.padding = '50px !important'   
}

function createLink(iframe, content) {
   const links = content.querySelectorAll('[overview] a')
   const found = x => x.href.split('#').at(-1) ?? ''
   const apply = a => iframe.src = `./preview.html#${found(a)}`
   const refix = () => setTimeout(() => adjustZoom(content), 999)
   const click = a => { apply(a); refix(); }

   links.forEach(a => a.onclick = () => click(a))
}