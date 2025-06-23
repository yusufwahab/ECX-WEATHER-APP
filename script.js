const apiKey = "b6fe0eaa4dd4abf916d015021b533804";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const city = document.querySelector(".display-h1")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind-speed")
const condition = document.querySelector(".condition")
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".submit-btn")
const span = document.querySelector(".span-other")
const weatherIcon  = document.querySelector(".weather-icon");
const errorMessage = document.querySelector(".error");
const loading = document.querySelector(".loading");

const weatherInfo = document.querySelector(".display");

async function checkWeather(location) {
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);

    if (response.status == 404) {
        
        setTimeout(()=> {
            errorMessage.style.display = "block"
        }, 2000)
        weatherInfo.style.display  = "none"
    } else {
        const data = await response.json();
    console.log(data)

    setTimeout(()=> {
        city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%"; 
    wind.innerHTML = data.wind.speed + "km/h";
    condition.innerHTML  = data.weather[0].main

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear" ) {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain" ) {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle" ) {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist" ) {
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main == "Snow" ) {
        weatherIcon.src = "images/snow.png"
    } else if (data.weather[0].main == "Humidity" ) {
        weatherIcon.src = "images/humidity.png"
    } 
    weatherInfo.style.display = "flex"
    errorMessage.style.display  = "none"
    }, 1000)
    
    }
    
}
 searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
        
        
        if (location === "undefined") {
            `"Weather location unavailable"`
        }

        loading.style.display = "block"
        setTimeout(() => {
            loading.style.display = "none";
        }, 2000);
    })

