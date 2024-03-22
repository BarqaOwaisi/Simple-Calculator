import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { mesage: "Enter first number ", type: "Number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform the action",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
//conditional statement
if (answer.operator === "+") {
    console.log(Number(answer.firstNumber) + Number(answer.secondNumber));
}
else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log('Please select a valid operator');
}
