async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "f774cadb670d846724ea498971130da8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      document.getElementById(
        "weather-info"
      ).innerHTML = `<p style="color: #ff4d4d;">${error.message}</p>`;
    }
  }

  function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherInfo = `
            <h2>${name}</h2>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}">
            <p>Temperature: ${main.temp}&#8451;</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Feels Like: ${main.feels_like}&#8451;</p>
            <p>Humidity: ${main.humidity}%</p>
        `;
    document.getElementById("weather-info").innerHTML = weatherInfo;
  }