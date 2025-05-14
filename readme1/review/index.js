function goto(href) {
   console.log('review goto', { href })
   window.parent.parent.document.querySelector('iframe').src = href
}

function delay(timeout, fn) { setTimeout(fn, timeout) }

delay(99, () => document.body.style.zoom = 1.25)