let input = parseInt(prompt("Input the number"), 10);
let sum = 0;
for (let i = 1; i <= input; i++) {
    sum += i;
}
document.write("The sum of the first " + input + " numbers is " + sum);