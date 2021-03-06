import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data. DONE

//TODO Complete rendering data to the screen DONE


function drawWeather() {
  document.getElementById("weather").innerHTML = ProxyState.weather.Template
  // console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
}


export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  toggleFC() {
    try {
      weatherService.toggleFC()
    } catch (error) {
      console.error(error)
    }
  }
}
