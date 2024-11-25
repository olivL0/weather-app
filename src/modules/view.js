const view = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return;

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        cityName.textContent = `${weatherData.cityName}`;
        temperature.textContent = `${weatherData.temperature} °C`;
        feelsLike.textContent = `Feels like: ${weatherData.feelsLike} °C`;
        humidity.textContent = `Humidity: ${weatherData.humidity} %`;
        wind.textContent = `Wind: ${weatherData.windSpeed} m/s`;
    }

    return { setSearchResult };
})();

export default view;