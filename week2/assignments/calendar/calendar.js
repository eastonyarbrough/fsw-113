// modify this script to populate the month select you create in the HTML page from an array of month names
const myMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let selectMonth = document.querySelector("#monthSelect");
let goBtn = document.querySelector("#btnGo");
let userYear = document.querySelector("#yearInput");

// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12
window.addEventListener("load", function() {
    for (i=0; i<myMonths.length; i++)
    {
        let popMonth = document.createElement("option");
        popMonth.setAttribute("value", myMonths[i]);
        popMonth.textContent = myMonths[i];
        selectMonth.appendChild(popMonth);
    }
});

// modify this script to run a function called printCalendar() when the user clicks the "Go" button
function printCalendar() {
    // modify this script to use the first day of the month the user selects in place of the const today
    const today = new Date(`${selectMonth.value}/1/${userYear.value}`)
    const month = today.getMonth()
    let days
    switch (month) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10:
            days = 30
            break
        default:
            days = 31
    }

    document.getElementById('calendarDays').innerHTML = ""
        
    let x
    const weekday = today.getDay()
    for (x = 0; x < weekday; x++){
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    }

    let dt = 0
    do {
        dt++
        document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
    } while ( dt < days)

    const remainder = (7 - ((x + dt) % 7))
    let y = 0
    while ( y < remainder) {
        document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        y++
    }
}

goBtn.addEventListener("click", printCalendar);