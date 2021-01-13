
//TODO Create methods for constructor, and rendering the image to the page
import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";


function _drawImages() {
  // TODO need to grab the variable of this.url to plug into this document.getElementById
  document.getElementById("background").style.backgroundImage = `url(${ProxyState.image.url})`
}
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

export default class ImageController {
  constructor() {
    // REVIEW what is "image" refering to exactly on line 16? The appstate?
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