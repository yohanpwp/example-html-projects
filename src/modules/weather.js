
const onKeyDown = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    return getGeocodingService();
  }
};

async function getGeocodingService(value) {
  const geoweatherHost =  'https://api.openweathermap.org/geo/1.0/direct?q='
  const apiKey = '9166f0f6b2d5e2829728b30cf1d2a389'
  value = await document.getElementById('city').value
  if (!value) {
    alert('City name is required');
    return;
  } else {
    let url = geoweatherHost.concat(value,'&limit=1&appid=',apiKey)
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  const data = await fetch(url, requestOptions)
  .then((response) => {return response.json()})
  .catch((error) => {
    console.log(error);
  });

  async function getWeatherData(data) {
    const weatherHost = 'https://api.openweathermap.org/data/2.5/weather?lat='
    let weatherUrl = weatherHost.concat(data[0].lat,'&lon=',data[0].lon,'&appid=',apiKey)
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    const weatherData = await fetch(weatherUrl, requestOptions)
    .then((response) => {return response.json()})
    .catch((error) => {
      console.log(error);
    });
    return weatherData;
  }

  function getTemperatureData(weatherData) {
    console.log(weatherData)
    let temperature = Math.floor(weatherData.main.temp - 273.15);
    return temperature;
  }

  function getWindSpeedData(weatherData) {
    let windSpeed = Math.floor(weatherData.wind.speed/0.2778);
    return windSpeed;
  }



  const weatherData = await getWeatherData(data)
  const temperatureData = getTemperatureData(weatherData);
  const windspeedData = getWindSpeedData(weatherData);
  // นำข้อมูลที่่ได้จาก api มาแสดงผล
  document.getElementById('temperature').innerHTML = temperatureData+' °C'
  document.getElementById('location').innerHTML = value
  document.getElementById('humidity').innerHTML = weatherData.main.humidity+' %'
  document.getElementById('windspeed').innerHTML = windspeedData+'km/hr'
}
};
