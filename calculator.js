var input = require('readline-sync');
var a = input.questionInt('enter your 1st no.:  ');
var b = input.questionInt('Enter your 2nd no:  ');

var operation = input.question('which operation do you want ? :  ');

if (operation == "+") {
    console.log(a+b)
    } else if (operation == "-") {
    console.log(a-b)
    } else if (operation == "*") {
    console.log(a*b)
    } else if (operation == "/") {
        console.log(a/b) }