export function requestApi(city) {
  return fetch(`
    http://api.openweathermap.org/data/2.5/weather?q=${city}
    &APPID=5e429eedeec5221805a8a1e0186eb3e3
    `)
    .then(response => response.json())
    .then((data) => {
      if (data.name && data.name.toLowerCase() === city.toLowerCase() && city.length) {
        return data;
      }
      return 'not found';
    })
    .catch(error => console.log('Request failed', error)
    );
}

export function getCurrentWeather() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
    fetch(`
        http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=5e429eedeec5221805a8a1e0186eb3e3
        `)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
      });
  });
}
