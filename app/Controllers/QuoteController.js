//TODO Create methods for constructor, and rendering the quote to the page



import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";


function _drawQuote() {
  document.getElementById("quote-space").innerHTML = ProxyState.quote.Template
}

export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _drawQuote)
    this.getQuote()
  }

  getQuote() {
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }
}