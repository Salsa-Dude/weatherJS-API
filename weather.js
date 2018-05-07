
class Weather {
  constructor(city,state) {
    this.apiKey = 'd077e36d3061ce7d';
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from API 
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change Weather Location
  changeLocation(city,state) {
    this.city = city;
    this.state = state;
  }
}