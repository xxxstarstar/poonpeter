const fs = require("fs");

const list = fs.readdirSync('./info/assets/img/PPwith/sideWifes/')

list.forEach(f => {
  console.log(`<div class="swiper-slide"><img class="d-block w-100" src="assets/img/PPwith/sideWifes/${f}"/></div>`)
})