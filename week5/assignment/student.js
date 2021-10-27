// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
class Student {
    constructor() {
        this.name = document.querySelector("#studentName").value;
        this.course = document.querySelector("#className").value;
        this.scores = document.querySelector("#studentScores").value.split(",");
        this.maxScores = document.querySelector("#possibleScores").value.split(",");
    }

    sumScores() {
        convertToNum(this.scores);
        score = this.scores.reduce((p, c) => (p + c));
    }

    possScores() {
        convertToNum(this.maxScores);
        maxScore = this.maxScores.reduce((p, c) => (p + c));
    }

    ltrGrade(stuScore, topScore) {
        if (((stuScore / topScore) * 100) >= 100) {
            document.querySelector("#certGrade").textContent = "A+";
        }
        else if (((stuScore / topScore) * 100) < 100 && ((stuScore / topScore) * 100) >= 95) {
            document.querySelector("#certGrade").textContent = "A-";
        }
        else if (((stuScore / topScore) * 100) < 95 && ((stuScore / topScore) * 100) >= 90) {
            document.querySelector("#certGrade").textContent = "B+";
        }
        else if (((stuScore / topScore) * 100) < 90 && ((stuScore / topScore) * 100) >= 85) {
            document.querySelector("#certGrade").textContent = "B-";
        }
        else if (((stuScore / topScore) * 100) < 85 && ((stuScore / topScore) * 100) >= 80) {
            document.querySelector("#certGrade").textContent = "C+";
        }
        else if (((stuScore / topScore) * 100) < 80 && ((stuScore / topScore) * 100) >= 75) {
            document.querySelector("#certGrade").textContent = "C-";
        }
        else if (((stuScore / topScore) * 100) < 75 && ((stuScore / topScore) * 100) >= 70) {
            document.querySelector("#certGrade").textContent = "D+";
        }
        else if (((stuScore / topScore) * 100) < 70 && ((stuScore / topScore) * 100) >= 65) {
            document.querySelector("#certGrade").textContent = "D-";
        }
        else if (((stuScore / topScore) * 100) < 65) {
            document.querySelector("#certGrade").textContent = "F";
        }
    }
}