var city = "Stuttgart"
var iconUrl = "http://openweathermap.org/img/wn/04n@2x.png"
const temp = document.querySelector(".temperature")
const feelslike = document.getElementById("feelslike")
const weatherIconDiv = document.getElementById("weatherIcon")
var iconCode = "";

var userInput = document.querySelector("#iUserInput");
if (!userInput.value) {
    userInput.value = city;
}

const img = document.querySelector("img")
const currTime = document.querySelector(".time")
userInput.focus();
async function getWeather(){
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(city) + "&appid=94f71069f647fb7800be2f7f846f4db0" + "&units=metric");
    const data = await result.json()
    console.log(data);
    console.log(data.weather[0])
    iconCode = data.weather[0].icon
    if(iconCode != "" || null){
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }
    document.getElementById("iWeatherImg").src = iconUrl;
    document.getElementById("iWeatherDesc").innerHTML = data.weather[0].description
    let tempValue = Math.round(data.main.temp *10) / 10
    let feelsLike = Math.round(data.main.feels_like *10) / 10
    console.log(tempValue)
    tempValue = tempValue.toString()
    feelsLike = feelsLike.toString()
    tempValue = Number(tempValue)
    feelsLike = Number(feelsLike)
    temp.innerHTML = tempValue.toLocaleString('DE-de')
    feelslike.innerHTML = feelsLike.toLocaleString('DE-de')

    const timeElapsed = Date.now()

    const today = new Date(data.dt * 1000)
    currTime.innerHTML = today.toString();

}

document.getElementById("iUserInput").addEventListener('keydown', function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        city = event.target.value
        getWeather();
        console.log(city);
        setInterval(getWeather, 10000);
    }
})
console.log(city);