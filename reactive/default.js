
function onOverview() {
   document.querySelector('article[overview]').hidden = false
   document.querySelector('article[preview]').hidden = true
   document.querySelector('article[review]').hidden = true
}

function onPreview(id, save) {
   const ids = Array.from(document
      .querySelectorAll('[specs] a'))
      .map(x => x.innerHTML.trim())

   const query = ids.map(x => `#${x}`).join(',')

   document.querySelector('article[overview]').hidden = true
   document.querySelector('article[preview]').hidden = false
   document.querySelector('article[review]').hidden = true

   document.querySelectorAll(query).forEach(node => {
      node.classList.add('hidden')
      console.log(node)
   })

   // document.body.style.visibility = 'hidden'
   id && document.querySelector('#' + id).classList.remove('hidden')

   setTimeout(() => {
      location.hash = '#preview'
      document.body.style.visibility = 'visible' }, 99)

   save && history && history.psu
}