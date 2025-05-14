function startup() {
   const frame = document.querySelector("iframe")

   createLinks('overview', document)
   createLinks('preview', document)
   createLinks('review', document)

   createLogo(document)
   resize(frame)
}

function resize(iframe, remake) {
   const repeat = () => resize(iframe, true)   
   const target = iframe.contentWindow.document.body
   const height = target.scrollHeight + 'px'

   iframe.style.height = height

   if (!remake) setTimeout(repeat, 333)
}
 
function createLinks(where, doc) {
   const frame = doc.querySelector("iframe")
   const links = doc.querySelectorAll(`#${where} a`)
   const maker = a => `./src/${where}/${a.id}.html`
   const refix = x => setTimeout(() => resize(x), 111) 
   const apply = a => frame.src = maker(a) 
   const click = a => { apply(a); refix(frame);  }

   links.forEach(a => a.id = a.href.split('#').at(-1) ?? '')
   links.forEach(a => a.onclick = () => click(a))
   links.forEach(a => a.href = '#')

   frame.style.height = 'auto'

   console.log('maker(a)', where, links)

   const route = window.location.pathname
   const query = window.location.search
   const clear = () => history.replaceState(null, '', route + query)
   
   setTimeout(clear, 999)
}
