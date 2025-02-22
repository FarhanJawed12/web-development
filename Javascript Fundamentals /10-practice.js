// write a code which can give grades to student a/c to their scores:
let score = 112;
let grade;
if (score > 100 || score < 0) {
    console.log("invalid number"); 
}
if (score >= 90 && score <= 100) {
    grade = "A";
}
else if (score >= 70 && score <= 89) {
    grade = "B";
}
else if (score >= 60 && score <= 69) {
    grade = "C";
}
else if (score >= 50 && score <= 59) {
    grade = "D";
}
else if (score >= 0 && score <= 49) {
    grade = "F";
}

console.log("Your Grade is:", grade);