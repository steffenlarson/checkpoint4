
//TODO Create methods for constructor, and rendering the image to the page

import { ProxyState } from "../AppState.js";


function _drawImages() {

}


//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {

    ProxyState.on("images", _drawImages())
  }


  getImage() {


  }

}