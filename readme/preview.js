function onPreview(id) {
   setTimeout(previewing, 111)
   if (id) location.href = `#${id}`
}

function previewing() {
   document.body.style.zoom = 1.2

   document.querySelectorAll('fieldset')
      .forEach(x => x.classList.add('hidden'))

   location.hash && document
      .querySelector(location.hash)
      .classList.remove('hidden')   
   
   // if (!location.hash.trim()) 
   //    document.querySelector('#server')
   //       .classList.remove('hidden') 
}

setTimeout(previewing, 111)