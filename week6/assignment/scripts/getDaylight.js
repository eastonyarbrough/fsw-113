// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
export default function changeColor(dark) {
    if (dark == true) {
        document.querySelector(".weatherWrapper").setAttribute("style", "background-color: black; color: white; border-radius: 8px;");
    }
    else {
        document.querySelector(".weatherWrapper").setAttribute("style", "background-color: blue; color: white; border-radius: 8px;");
    }
}