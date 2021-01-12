import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {

  async getWeather() {
    // console.log("Calling the Weatherman");

    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

  toggleFC() {
    let displayF = ProxyState.weather.displayF
    // debugger
    if (displayF == true) {
      ProxyState.weather.displayF = false
    } else if (displayF == false) {
      ProxyState.weather.displayF = true
    }
    ProxyState.weather = ProxyState.weather
  }
}


const weatherService = new WeatherService();
export default weatherService;






