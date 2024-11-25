const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: { temp: temperature, feels_like: feelsLike, humidity },
            wind: { speed: windSpeed },
        } = data;
        return { cityName, temperature, feelsLike, humidity, windSpeed };
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=965491d20393dd9397c201ec2d7638cd`;
    try {
        const response = await fetch(endpoint, { mode: "cors"});
        if (!response.ok) throw new Error(`City ${city} not found`);
        const data = convertData(await response.json());
        return data;
    } catch (error) {
        alert(error);
        return null;
    }
}
    return { getData };
})();

export default weather;