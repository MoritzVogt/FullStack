var city = "Stuttgart"

const temp = document.querySelector(".temperature")
var userInput = document.querySelector("#iUserInput");
if (!userInput.value) {
    userInput.value = city;
    setInterval(getWeather, 10000);
}

const img = document.querySelector("img")
const currTime = document.querySelector(".time")

async function getWeather(){
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(city) + "&appid=94f71069f647fb7800be2f7f846f4db0" + "&units=metric");
    const data = await result.json()

    console.log(data);

    let tempValue = Math.round(data.main.temp *10) / 10
    tempValue = tempValue.toFixed(1)
    tempValue = Number(tempValue)
    temp.innerHTML = tempValue.toLocaleString('DE-de');

    const timeElapsed = Date.now()

    const today = new Date(data.dt * 1000)
    currTime.innerText = today.toString();

}

document.getElementById("iUserInput").addEventListener('keydown', function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        city = event.target.value
        console.log(city);
    }
})
console.log(city);