// Declare any necessary variables.
let score;
let maxScore;
// Add an evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", newStudent)

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector("#reset").addEventListener("click", () => {
    let formElements = [...document.querySelectorAll("input")];
    let certElements = [...document.querySelectorAll(".cert-data")]

    formElements.forEach((e, i) => {
        formElements[i].value = "";
    })

    certElements.forEach((e, i) => {
        certElements[i].textContent = "";
    })
})

// Create a function that instantiates a new student object with the input from the HTML form.
function newStudent() {
    let currentStudent = new Student();
    printCert(currentStudent);
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function printCert(cs) {
    document.querySelector("#certStudentName").textContent = cs.name;
    document.querySelector("#certClassName").textContent = cs.course;
    cs.sumScores();
    cs.possScores();
    cs.ltrGrade(score, maxScore);
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function convertToNum(arr) {
    arr.forEach((e, i) => (arr[i] = Number(arr[i])));
}