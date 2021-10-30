// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)
class Student {
    constructor(name, course, scores, maxScores) {
        this.name = name;
        this.course = course;
        this.scores = scores;
        this.maxScores = maxScores;
    }

    getName() {
        return this.name;
    }

    getCourse() {
        return this.course;
    }

    sumScores() {
        return this.scores.reduce((p, c) => (p + c));
    }

    possScores() {
        return this.maxScores.reduce((p, c) => (p + c));
    }

    ltrGrade() {
        let totalScore = (this.sumScores()/this.possScores()) * 100
        if (totalScore >= 90) return "A";
        if (totalScore >= 80) return "B";
        if (totalScore >= 70) return "C";
        if (totalScore >= 60) return "D";
        else return "F";
    }
}