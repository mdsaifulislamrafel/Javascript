/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
function score(n) {
    if (n >= 90 && n <= 100) {
        return 'A';
    } else if (n >= 80 && n <= 89) {
        return 'B';
    } else if (n >= 70 && n <= 79) {
        return 'C';
    } else if (n >= 60 && n <= 69) {
        return 'D';
    } else if (n >= 0 && n <= 59) {
        return 'F';
    } else {
        return 'Your student not exam attend';
    }
}

const result = score(90);
console.log(result);