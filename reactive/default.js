function delay(timeout, fn) { setTimeout(fn, timeout) }

delay(999, function() {
   console.log('location.hash !!!!!', location)
   if (location.hash == '#preview')
      onPreview('')
})

function onOverview() {
   document.querySelector('article[overview]').hidden = false
   document.querySelector('article[preview]').hidden = true
}

function onPreview(id, save) {
   const ids = Array.from(document
      .querySelectorAll('[specs] a'))
      .map(x => x.innerHTML.trim())

   const query = ids.map(x => `#${x}`).join(',')

   document.querySelector('article[overview]').hidden = true
   document.querySelector('article[preview]').hidden = false

   document.querySelectorAll(query).forEach(x => x.classList.add('hidden'))

   id && document.querySelector('#' + id).classList.remove('hidden')

   const queryLib = `[href*='lib/${id}']`
   
   document.querySelectorAll(`[href*='/lib/']`).forEach(x => x.style.display='none')
   document.querySelectorAll(queryLib).forEach(x => x.style.display='inline-block')

   setTimeout(() => {
      location.hash = id ? `#${id}` : '#preview'
      document.body.style.visibility = 'visible' }, 99)

   save && history && history.psu
}