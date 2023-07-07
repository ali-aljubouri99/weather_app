let box = document.querySelector(".box");
let inputName = document.querySelector("form input");
let searchBtn = document.querySelector("i");
let enter = document.querySelector(".box .enter");
let imageWeather = document.querySelector(".weatherBox img");
let temp = document.querySelector(".weatherBox h2");
let nameCity = document.querySelector(".weatherBox h4");
let humidityDeg = document.querySelector(".info .hum-info span");
let speedDeg = document.querySelector(".info .wind-info span")
let imageHum = document.querySelector(".humidity img");
let titleHum = document.querySelector(".humidity p");
let imageSpeed = document.querySelector(".wind-speed img");
let titleSpeed = document.querySelector(".wind-speed p");

searchBtn.addEventListener("click", function() {
    if (inputName.value !== "") {
        box.classList.add("active");
        enter.classList.add("hid");
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputName.value}&appid=e780f2e64632324fd35964a1e35fe4e4&units=metric`).then(
            (resolve) => resolve.json()
        ).then(
            (data) => {
                imageWeather.src = `./image/${data.weather["0"].main}.png`;
                temp.innerHTML = `${Math.round(data.main.temp)}°C`;
                nameCity.innerHTML = data.name;
                humidityDeg.innerHTML = `${data.main.humidity}%`;
                speedDeg.innerHTML = `${data.wind.speed} km/h`;

                imageHum.setAttribute("src", "./image/humidity.png");
                imageHum.style.width = "30px";

                titleHum.innerHTML = "humidity"

                imageSpeed.setAttribute("src", "./image/wind.png");
                imageSpeed.style.width = "30px";

                titleSpeed.innerHTML = "wind speed";

                document.querySelector(".error").innerHTML = "";
            }
        ).catch(
            (reject) => {
                console.log(`Rejected: ${reject}`)
                document.querySelector(".error").innerHTML = "The name of this city is not correct";
            }
        )
    } else {
        enter.classList.remove("hid");
        document.querySelector(".error").innerHTML = ""
    }
})





// Key Api = > e780f2e64632324fd35964a1e35fe4e4
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=(Name City)&appid=e780f2e64632324fd35964a1e35fe4e4&units=metric

// api for youtube watch
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=iraq&appid=e780f2e64632324fd35964a1e35fe4e4