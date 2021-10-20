const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
document.querySelector("#submit").addEventListener("click", function() {
    fullArr = [
    ...document.querySelector('#lang0').value.split(" "),
    ...document.querySelector('#lang1').value.split(" "),
    ...document.querySelector('#lang2').value.split(" "),
    ...document.querySelector('#lang3').value.split(" "),
    ...document.querySelector('#lang4').value.split(" "),
    ...document.querySelector('#lang5').value.split(" "),
    ...document.querySelector('#lang6').value.split(" "),
    ...document.querySelector('#lang7').value.split(" "),
    ]
    chkLang(fullArr);
});

function chkLang(langs) {
    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
    let myCheck = langs.some((e, i) => (langs[i] == lang));

    if (myCheck == true){
        result = true;
    }

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}