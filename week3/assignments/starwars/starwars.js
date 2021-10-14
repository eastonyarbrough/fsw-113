// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'
function fetchData() {
    queryType = document.querySelector("#queryType").value;
    itemID = document.querySelector("#itemID").value;
    console.log(getFromSWAPI());
}

function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

function updateInfo(data) {
    if (queryType == "people")
    {
        document.querySelector("#dataLabel1").textContent = "Name: ";
        document.querySelector("#dataLabel2").textContent = "Hair Color: "
        document.querySelector("#dataValue1").textContent = data.name;
        document.querySelector("#dataValue2").textContent = data.hair_color;
    }
    else if (queryType == "planets")
    {
        document.querySelector("#dataLabel1").textContent = "Name: ";
        document.querySelector("#dataLabel2").textContent = "Diameter: "
        document.querySelector("#dataValue1").textContent = data.name;
        document.querySelector("#dataValue2").textContent = data.diameter;
    }
    else if (queryType == "starships")
    {
        document.querySelector("#dataLabel1").textContent = "Name: ";
        document.querySelector("#dataLabel2").textContent = "Cost in Credits: "
        document.querySelector("#dataValue1").textContent = data.name;
        document.querySelector("#dataValue2").textContent = data.cost_in_credits;
    }
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.