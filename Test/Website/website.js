var city = "Stuttgart"
var iconUrl = "http://openweathermap.org/img/wn/04n@2x.png"
const temp = document.querySelector(".temperature")
const feelslike = document.getElementById("feelslike")
const weatherIconDiv = document.getElementById("weatherIcon")
var iconCode = "";

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("ready");
    getTableBody();
});
async function getTableBody() {
    const table = document.getElementById("jsonTable");
    const testImg = document.getElementById("testPb");
    // Extract headers from the table
    const headers = Array.from(table.querySelectorAll("th")).map(th => th.textContent);

    // Reference to the table body
    const tableBody = table.querySelector("tbody");

    // Iterate over JSON data and create table rows
    jsonData.forEach((item, index) => {
        const row = document.createElement("tr");

        headers.forEach(header => {
            const cell = document.createElement("td");
            if(header == "Avatar" && item.Avatar != null){
                const imgTag = document.createElement("img");
                imgTag.src = "https://cdn.discordapp.com/avatars/"+item.DiscordID+"/"+item.Avatar+".png"
                cell.appendChild(imgTag);
            }else{
                cell.textContent = item[header] !== undefined ? item[header] : "";
            }
            
            row.appendChild(cell);
        });
        row.addEventListener('click', () => openModal(item));
        tableBody.appendChild(row);
    });
    // Modal handling
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const modalBody = document.getElementById("modalBody");

    function openModal(item) {
        modalBody.innerHTML = ""; // Clear previous content
        for (const key in item) {
            const p = document.createElement("p");
            p.textContent = `${key}: ${item[key]}`;
            modalBody.appendChild(p);
        }
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if(jsonData.DiscordID != null){

    }
}

//var userInput = document.querySelector("#iUserInput");
//if (!userInput.value) {
//    userInput.value = city;
//}
//
//const img = document.querySelector("img")
//const currTime = document.querySelector(".time")
//userInput.focus();
//async function getWeather(){
//    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(city) + "&appid=94f71069f647fb7800be2f7f846f4db0" + "&units=metric");
//    const data = await result.json()
//    console.log(data);
//    console.log(data.weather[0])
//    iconCode = data.weather[0].icon
//    if(iconCode != "" || null){
//        iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
//    }
//    document.getElementById("iWeatherImg").src = iconUrl;
//    document.getElementById("iWeatherDesc").innerHTML = data.weather[0].description
//    let tempValue = Math.round(data.main.temp *10) / 10
//    let feelsLike = Math.round(data.main.feels_like *10) / 10
//    console.log(tempValue)
//    tempValue = tempValue.toString()
//    feelsLike = feelsLike.toString()
//    tempValue = Number(tempValue)
//    feelsLike = Number(feelsLike)
//    temp.innerHTML = tempValue.toLocaleString('DE-de')
//    feelslike.innerHTML = feelsLike.toLocaleString('DE-de')
//
//    const timeElapsed = Date.now()
//
//    const today = new Date(data.dt * 1000)
//    currTime.innerHTML = today.toString();
//
//}
//
//document.getElementById("iUserInput").addEventListener('keydown', function (event) {
//    if (event.key === "Enter" || event.keyCode === 13) {
//        city = event.target.value
//        getWeather();
//        console.log(city);
//        setInterval(getWeather, 10000);
//    }
//})
//console.log(city);