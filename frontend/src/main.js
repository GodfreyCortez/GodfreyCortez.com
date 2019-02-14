const $ = require('jquery')
require('bootstrap')

// Image URLs
const headerImages = [
  '/resources/jabez-samuel-1091148-unsplash-min.jpg',
  '/resources/marcus-dall-col-1321486-unsplash-min.jpg',
  '/resources/gaspar-zaldo-1362111-unsplash-min.jpg'
]

$(document).ready(() => {
  let imageCounter = 0
  const changeImage = () => {
    imageCounter = (imageCounter === headerImages.length - 1) ? 0 : imageCounter + 1
    $('.jumbotron').css('background-image', `url("${headerImages[imageCounter]}"`)
  }

  setInterval(changeImage, 3000)
})
