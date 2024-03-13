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
    const api_key = "adfb7cb06794efbc748243714c739abe";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(value => value.json());
    // console.log(weather_data);
}

searchbtn.addEventListener("click",function(){
    getWeather(inputbox.value);
});
