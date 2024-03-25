let card_city_name = document.querySelector("#card-city-name");
let weather_img = document.querySelector("#weather-img");
let degree = document.querySelector("#degree");
let weather_in_text = document.querySelector("#weather-in-text");
let humidity = document.querySelector(".humidity .values");
let wind_speed = document.querySelector(".wind-speed .values");

// input values

let inputbox = document.querySelector(".input-feild");
let searchbtn = document.querySelector("#search-icon");


async function getWeather(city){
    const api_key = "MYkey";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(value => value.json());
    if(weather_data.message==="city not found"){
        alert("Wrong input city name!");
        return;
    }
    // console.log(weather_data);
    card_city_name.innerHTML= weather_data.name;
    degree.innerHTML = `${Math.ceil(weather_data.main.temp-275.15)} °C`;
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`;
    weather_in_text.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    weather_img.setAttribute("src",`images/${weather_data.weather[0].description}.png`);


}

searchbtn.addEventListener("click",function(){
    getWeather(inputbox.value);
});
document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        getWeather(inputbox.value);
    }
});
