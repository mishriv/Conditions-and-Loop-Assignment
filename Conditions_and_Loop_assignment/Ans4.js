/* 
Q4. Generate numbers between any 2 given numbers.
Ex
const num1 = 10
const num2 = 25;
output: 11, 12, 13, ...., 25
 */

function generateNumbers(num1, num2) {
    if (num1 >= num2) {
        console.log("Invalid input: num1 must be less than num2.");
        return;
    }

    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
}

// chexking the function with num1 = 10 and num2 = 25
const num1 = 10;
const num2 = 25;
console.log(`Numbers between ${num1} and ${num2}:`);
generateNumbers(num1, num2);
