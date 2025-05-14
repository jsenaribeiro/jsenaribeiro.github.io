function startup() {
   createLinks('overview', document)
   createLogo(document)
   resize(document)
}

function interval() {
   var overview = document.getElementById('overview')
   console.log({ overview, document })
   overview.focus()
}

function resize(doc) {
   const iframe = doc.querySelector("iframe");
   const target = iframe.contentWindow.document.documentElement
   const height = target.scrollHeight + 'px'

   iframe.style.height = height

   console.log('rezise', { height })

   // window.addEventListener('resize', () =>  resize(iframe));
}
 
function createLinks(where, doc) {
   const frame = doc.querySelector("iframe")
   const links = doc.querySelectorAll(`#${where} a`)
   const maker = a => `./src/${where}/${a.id}.html`
   const refix = _ => setTimeout(adjustZoom, 999)
   const apply = a => frame.src = maker(a)
   const fresh = x => setTimeout(() => resize(x), 1999)
   const click = a => { apply(a); refix();  }

   links.forEach(a => a.id = a.href.split('#').at(-1) ?? '')
   links.forEach(a => a.onclick = () => click(a))
   links.forEach(a => a.href = '#')

   const route = window.location.pathname
   const query = window.location.search
   const clear = () => history.replaceState(null, '', route + query)
   setTimeout(clear, 999)
}
