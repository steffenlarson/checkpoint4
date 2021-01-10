export default class Weather {
  constructor(data) {
    // console.log('[RAW WEATHER API DATA]', data); DONE
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should convert the temperature data to either F or C DONE
    //      check out the other data that comes back and see if there is anything you want to try DONE

    this.city = data.name
    this.kelvin = data.main.temp
    this.far = Math.floor(((data.main.temp) - 273.15) * 9 / 5 + 32) + 'F'
    this.celsius = Math.floor((data.main.temp) - 273.15) + 'C'


    // console.log(this.far)
    // console.log(this.celsius)
  }



  // FIXME add toggle to button
  get Template() {
    return `
    <p>${this.city}: ${this.far} &#176<button onclick="">Toggle Temperature type</button></p>
    `
  }


}



