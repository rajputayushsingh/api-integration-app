async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const weatherCard = document.getElementById("weatherCard");

    if (!city) {
        error.textContent = "Please enter a city name.";
        weatherCard.style.display = "none";
        return;
    }

    loading.textContent = "Loading weather data...";
    error.textContent = "";
    weatherCard.style.display = "none";

    try {

        const response = await fetch(
            `/api/weather?city=${encodeURIComponent(city)}`
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.message || "Something went wrong");
        }

        document.getElementById("cityName").textContent =
            `${data.city}, ${data.country}`;

        document.getElementById("temperature").textContent =
            `${Math.round(data.temperature)}°C`;

        document.getElementById("description").textContent =
            data.description;

        document.getElementById("humidity").textContent =
            `${data.humidity}%`;

        document.getElementById("windSpeed").textContent =
            `${data.windSpeed} m/s`;

        document.getElementById("feelsLike").textContent =
            `${Math.round(data.feelsLike)}°C`;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

        weatherCard.style.display = "block";

    } catch (err) {

        error.textContent = err.message;

        weatherCard.style.display = "none";

    } finally {

        loading.textContent = "";
    }
}

document.getElementById("cityInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});