// import the convertTemp.js and getDaylight.js scripts with their default export
import changeColor from "./getDaylight.js";
import convertKelvin from "./convertTemp.js";

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click", () => {
    let cityQuery = document.querySelector("#city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=0cbd48f13316e2c77e35baa8bdb5a0bf`)
        .then(res => res.json())
        .then(res => {
            //Store and pass data
            let dataTemp = `${convertKelvin(res.main.temp)} °F`;
            let dataHumid = `${res.main.humidity}%`;
            let dataCond = res.weather[0].main;
            let dataCurTime = (new Date((res.dt - 18000) * 1000).toUTCString().split(" "))[4].split(":").join("");
            let dataSunTime = (new Date((res.sys.sunset - 18000) * 1000).toUTCString().split(" "))[4].split(":").join("");
            displayInfo(dataTemp, dataHumid, dataCond, dataCurTime, dataSunTime);
        })
        .catch(err => console.log(err))
})

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function displayInfo(temper, humid, cond, curTime, sunTime) {
    //Write weather info in DOM
    document.querySelector("#tempData").textContent = temper;
    document.querySelector("#humidData").textContent = humid;
    document.querySelector("#conditionsData").textContent = cond;

    //Change background if after sunset.
    if (curTime >= sunTime) changeColor(true)
    else changeColor(false)
}