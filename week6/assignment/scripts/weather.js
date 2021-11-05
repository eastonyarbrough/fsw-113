// import the convertTemp.js and getDaylight.js scripts with their default export
import changeColor from "./getDaylight.js";
import convertKelvin from "./convertTemp.js";

// declare any variables needed
let data;

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click", () => {
    runRequest();
})

function runRequest() {
    getData()
        .then((data) => {
            apiQuery(data);
        })
        .catch(err => console.error(err));
}

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
async function getData() {
    let cityQuery = document.querySelector("#city").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=0cbd48f13316e2c77e35baa8bdb5a0bf`)
    data = await response.json();
    return data;
}

// use an asynchronous call that fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
function apiQuery(info){
    //Store and pass data
    let dataTemp = convertKelvin(info.main.temp, info.sys.country);
    let dataHumid = `${info.main.humidity}%`;
    let dataCond = info.weather[0].main;
    let dataCurTime = (new Date((info.dt + info.timezone) * 1000).toUTCString().split(" "))[4].split(":").join("");
    let dataSunRiseTime = (new Date((info.sys.sunrise + info.timezone) * 1000).toUTCString().split(" "))[4].split(":").join("");
    let dataSunSetTime = (new Date((info.sys.sunset + info.timezone) * 1000).toUTCString().split(" "))[4].split(":").join("");
    displayInfo(dataTemp, dataHumid, dataCond, dataCurTime, dataSunRiseTime, dataSunSetTime);
}

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function displayInfo(temper, humid, cond, curTime, sunRiseTime, sunSetTime) {
    //Write weather info in DOM
    document.querySelector("#tempData").textContent = temper;
    document.querySelector("#humidData").textContent = humid;
    document.querySelector("#conditionsData").textContent = cond;

    //Change background if after sunset.
    if (curTime > sunRiseTime && curTime < sunSetTime) {
        document.querySelector(".weatherWrapper").setAttribute("style", `background-color: ${changeColor(false)}; color: white; border-radius: 8px;`);
    }
    else {
        document.querySelector(".weatherWrapper").setAttribute("style", `background-color: ${changeColor(true)}; color: white; border-radius: 8px;`);
    }
}