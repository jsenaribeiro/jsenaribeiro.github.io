function createLogo(content) {
   const logo = content.querySelector("logo")
   const div1 = document.createElement('div')
   const div2 = document.createElement('div')
   const div3 = document.createElement('div')
   const span = document.createElement('span')
   const divs = [div1, div2, div3, span]

   divs.forEach(x => logo.appendChild(x))


   setInterval(function () {
      const from0To3 = Math.floor(Math.random() * 3)
      const during = 150 + (100 * (from0To3 * 9))

      document.querySelectorAll("logo div")
         .forEach(div => div.style.animationDuration = `${during}ms`)
   }, 3000)
}