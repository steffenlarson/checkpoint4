//TODO create methods to retrieve data and update the State

import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";



class QuoteService {

  async getQuote() {

    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res.data)
    // console.log(res.data)
  }
}

const quoteService = new QuoteService();
export default quoteService;