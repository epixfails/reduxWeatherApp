
function requestApi(city) {
  return fetch(`
    http://api.openweathermap.org/data/2.5/weather?q=${city}
    &APPID=5e429eedeec5221805a8a1e0186eb3e3
    `)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      city = city.toLowerCase();
      if (data.name.toLowerCase() === city) {
        return data;
      }
      return 'not found';
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
}

export default requestApi;
