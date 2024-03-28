#! /usr/bin/env node
//imports inquirer from node_modules
import inquirer from "inquirer";
// Declares the variables;
let myBalance = 100000; //Dollar
let myPin = 141255;
//Take input from the account holder
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code :",
        type: "number",
    }
]);
//Conditional Statement
if (pinAnswer.pin == myPin) {
    console.log("Correct Pin Code!!!!");
}
else {
    console.log("Incorrect Pin Number");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select option :",
        type: "list",
        choices: ["Withdraw", "Check Balance", "Fast Cash"],
    }
]);
if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your desired amount: ",
            type: "number",
        }
    ]);
    // Check the withdraw amount 
    if (amountAns.amount <= myBalance) {
        // Assignment Operators = , +=, -=
        myBalance -= amountAns.amount;
        console.log("Transaction Completed");
        console.log("Please take your cash and card");
        //Template Literal Format
        console.log(`Your remianing Account Balance is : ${myBalance}`);
    }
    else {
        console.log("Amount Exceeded, Please enter the correct amount :");
    }
}
else if (operationAns.operation === "Check Balance") {
    console.log(`Your current account balance is : ${myBalance}`);
}
if (operationAns.operation === "Fast Cash") {
    let Cash = await inquirer.prompt([
        {
            name: "FastCash",
            message: "Enter your desired amount: ",
            type: "list",
            choices: ["5000", "10000", "20000", "50000"]
        }
    ]);
    // Check the withdraw amount 
    if (Cash.FastCash == "5000") {
        // Assignment Operators = , +=, -=
        myBalance -= Cash.FastCash;
        //Template Literal Format
        console.log("Transaction Completed");
        console.log("Please take your cash and card");
        console.log(`Your remianing Account Balance is : ${myBalance}`);
    }
    else if (Cash.FastCash == "10000") {
        // Assignment Operators = , +=, -=
        myBalance -= Cash.FastCash;
        //Template Literal Format
        console.log("Transaction Completed");
        console.log("Please take your cash and card");
        console.log(`Your remianing Account Balance is : ${myBalance}`);
    }
    else if (Cash.FastCash == "20000") {
        // Assignment Operators = , +=, -=
        myBalance -= Cash.FastCash;
        //Template Literal Format
        console.log("Transaction Completed");
        console.log("Please take your cash and card");
        console.log(`Your remianing Account Balance is : ${myBalance}`);
    }
    else if (Cash.FastCash == "50000") {
        // Assignment Operators = , +=, -=
        myBalance -= Cash.FastCash;
        //Template Literal Format
        console.log("Transaction Completed");
        console.log("Please take your cash and card");
        console.log(`Your remianing Account Balance is : ${myBalance}`);
    }
}
