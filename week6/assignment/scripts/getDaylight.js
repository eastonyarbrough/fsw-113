// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=0cbd48f13316e2c77e35baa8bdb5a0bf

// //TEST
// console.log(new Date(1635899732));

export default function changeColor(dark) {
    if (dark == true) {
        document.querySelector(".weatherWrapper").setAttribute("style", "background-color: blue");
    }
    else {
        document.querySelector(".weatherWrapper").setAttribute("style", "background-color: blue");
    }
}