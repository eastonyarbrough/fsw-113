// Declare any necessary variables.

// Add an evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector("#print").addEventListener("click", () => printCert(newStudent()))

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector("#reset").addEventListener("click", () => {
    [...document.querySelectorAll("input")].forEach(e => e.value = "");
    [...document.querySelectorAll(".cert-data")].forEach(e => e.textContent = "");
})

// Create a function that instantiates a new student object with the input from the HTML form.
function newStudent() {
    let stuName = document.querySelector("#studentName").value;
    let courseName = document.querySelector("#className").value;
    let stuScores = convertToNum(document.querySelector("#studentScores").value);
    let possScores = convertToNum(document.querySelector("#possibleScores").value);
    return new Student(stuName, courseName, stuScores, possScores);
}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function printCert(cs) {
    document.querySelector("#certStudentName").textContent = cs.getName();
    document.querySelector("#certClassName").textContent = cs.getCourse();
    document.querySelector("#certGrade").textContent = cs.ltrGrade();
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function convertToNum(arr) {
    return arr.split(",").map(e => parseInt(e));
}