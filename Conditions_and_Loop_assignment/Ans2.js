/* Q2. Write a program that grades students based on their marks
 If greter than 90 then A Grade
 If between 70 and 90 then a B grade
 If between 50 and 70 then a C grade
 below 50 then an F grade  */


 function gradeStudents(marks) {
    let grade;
    if (marks > 90) {
        grade = 'A';
    } else if (marks >= 70 && marks <= 90) {
        grade = 'B';
    } else if (marks >= 50 && marks < 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    return grade;
}

// Testing the function with different marks
console.log("Marks: 95, Grade:", gradeStudents(95)); 
console.log("Marks: 80, Grade:", gradeStudents(80)); 
console.log("Marks: 60, Grade:", gradeStudents(60));
console.log("Marks: 40, Grade:", gradeStudents(40)); 
