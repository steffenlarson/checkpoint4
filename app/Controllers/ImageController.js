
//TODO Create methods for constructor, and rendering the image to the page
import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";


function _drawImages() {
  // TODO need to grab the variable of this.url to plug into this document.getElementById


  // let images = ProxyState.image
  // let template = ''
  // template += Image.Template
  document.getElementById("background").style.backgroundImage = "url(https://w.wallhaven.cc/full/72/wallhaven-7232p9.jpg)"
}


//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {

    ProxyState.on("image", _drawImages)
    this.getImage()
  }


  getImage() {

    try {
      imageService.getImage()
    }
    catch (error) {
      console.error(error)
    }

  }

}