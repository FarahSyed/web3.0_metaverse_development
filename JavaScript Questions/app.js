// -------------------------------- Chapter 1 - Alerts --------------------------------

// // 1. Alert these following (individually):
// // I. First Name
// // II. Last Name
// // III. Email
// // IV. Phone Number
// // V. Password
// alert("First Name");
// alert("Last Name");
// alert("Email");
// alert("Phone Number");
// alert("Password");


// // 2. Correct this statement: alert"You're learning JavaScript!";
// alert("You're learning JavaScript!");


// // 3. Code an alert statement displaying any message you like.
// alert("If we don't work hard, we will be left behind!");






// -------------------------------- Chapter 2 - Variables for String --------------------------------

// // 1. Declare any variable in the camelCase format.
// var myVar = "Hello";


// // 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
// var myVar;
// myVar = "String Variable";


// // 3. Declare the variable teamName and Alert your Team name
// var teamName = "Tech Buddies";
// alert(teamName);


// // 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
// var bestMan = "Charlie";
// bestMan = "Muhammad";






// -------------------------------- Chapter 3 - Variables for Numbers --------------------------------

// // 1. Declare a variable “caseQty”.
// var caseQty;


// // 2. Assign to the variable caseQty, which has already been declared,
// // the value 144.
// caseQty = 144;


// // 3. Rewrite this statement so the variable can be used in a math operation. 
// var num = 9;


// // 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
// var sum;
// sum = 7 + 2;


// // 5. What is the value of orderTotal?
// // var merchTotal = 100;
// // var shippingCharge = 10;
// // var orderTotal = merchTotal + shippingCharge;
// // Try it yourself.
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// alert("The value of orderTotal is " + orderTotal);


// // 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
// var num = 10;
// num = num + 2;






// -------------------------------- Chapter 4 - Variable names Legal and Illegal --------------------------------

// // 1. Correct this statement.
// // var product cost = 3.45;
// var productCost = 3.45;


// // 2. Rewrite this using camelCase.
// // var Nameofband;
// var nameOfBand;


// // 3. In a single statement declare a legally-named variable and assign a number to it.
// var num = 4;


// // 4. Declare a variable that is a combination of your first and last names. Use camelCase.
// var fullName = "Farah Syed";


// // 5. List the legal and Illegal Variables.
// // Legal Variables:
// var myVar;  // A variable can contain keywords.
// var $myVar = "Hi";    // A variable name can contain only letters, numbers, dollar signs, and underscores.
// var _myVar = "Hi";
// var myVar3 = "Hi";

// // Illegal Variables:
// var My var;   // A variable can't contain any spaces.
// var if = "Illegal Variable"; // A variable name can't be any of JavaScript's keywords.
// var my.var;      // A variable name can contain only letters, numbers, dollar signs, and underscores.
// var 2myVar;
// var my*var;
// var my-var;






// -------------------------------- Chapter 5 - Math Expression I --------------------------------

// // 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
// // Name: Modulus, Symbol: %


// // 2. What is the value of num?
// var num = 20 % 6;   // Answer is 2
// console.log("The value of num is " + num);


// // 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
// var largeNum = 1000 * 2000;
// console.log(largeNum);


// // 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable
// var num1 = 20;
// var num2 = 10;
// var result = num1 - num2;


// // 5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
// var remainder = 40 % 6;
// console.log("The remainder is " + remainder);


// // 6. Code an alert that displays the result of a multiplication on 2 numbers.
// var number1 = 20;
// var number2 = 10;
// var result = number1 * number2;
// alert("The multiplication of " + number1 + " and " + number2 + " is " + result);






// -------------------------------- Chapter 6 - Math Expression II --------------------------------

// // 1. Code a short form of x = x + 1; Use either of the two legal expressions.
// var x = 6;
// x += 1;


// // 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
// var x = 100;
// x-= 1;
// console.log(x);


// // 3. var x = 50;
// // var y = x++;
// // What is the value of y?
// var x = 50;
// var y = x++;
// // console.log("The value of y = " + y); // 50 Because it is a post-increment


// // 4. var y = 50;
// // var z = --y;
// // What is the value of z?
// var y = 50;
// var z = --y;
// console.log("The value of z = " + z); // 49 Because it is a pre-increment


// // 5. In a single statement, decrement num and assign its original value to newNum.
// var newNum = num--;


// // 6. In a single statement add 1 to a variable and assign its original value to another variable.
// var newNum = num++;


// // 7. Assign a number value to a variable. Increment the variable. Display the new value in an alert
// var num = 55;
// num++;
// alert(num);






// -------------------------------- Chapter 7 - Math Expression III --------------------------------

// // 1. var calculatedNum = 2 + (2 * 6);
// // What is the value of calculatedNum?
// // Answer: 14


// // 2. var calculatedNum = (2 + 2) * 6;
// // What is the value of calculatedNum?
// // Answer: 24


// // 3. var calculatedNum = (2 + 2) * (4 + 2);
// // What is the value of calculatedNum?
// // Answer: 24


// // 4. var calculatedNum = ((2 + 2) * 4) + 2;
// // What is the value of calculatedNum?
// // Answer: 18


// // 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
// var result = (2 + 2) * (4 + 10);


// // 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
// var result = 2 + 2 * 4 + 10;


// // 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
// var result = 4 / (2 * 4);   // it's result is 0.5






// -------------------------------- Chapter 8 - Concatenating Text Strings --------------------------------

// // 1. var num = "2" + "2";
// // What is the value of num? Include quotation marks.
// // Answer: 22


// // 2. message = ("Hello," + "Dolly");
// // What is the value of message? (Include the quotation marks.)
// // Alert the statement.
// var message = ("Hello," + "Dolly");
// alert(message);


// // 3. alert("33" + 3);
// // What message displays in the alert box?
// // Answer: 333


// // 4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
// var country = "Pakistan";
// var longLive = "Zindabad";
// alert(country + " " + longLive);


// // 5. Write a statement that assigns to a variable the concatenation of a string with a number
// var string = "Page No";
// var num = 4;
// var pageNo = string + " " + num;


// // 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
// var str = "Hi, I am";
// var myName = "Farah";
// var intro = str + " " + myName;






// -------------------------------- Chapter 9 - Prompts --------------------------------

// // 1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
// var firstName = prompt("Enter first name");


// // 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
// var country = prompt("Country?", "China");


// // 3. Correct this statement var yourName = prompt(Enter Your Name");
// var yourName = prompt("Enter Your Name");


// // 4. Code a prompt that specifies a string as the message Include a default input.
// var message = prompt("Message", "Write your message");


// // 5. Assign strings to two variables. Code a prompt specifying the first
// // variable as the message and the second variable as the default
// // response. Assign the user's response to a third variable.
// var message = "Message";
// var defaultResponse = "This is a default Response";
// var userResponse = prompt(message, defaultResponse);


// // 6. Display a prompt, including both a message and a default response. Display the user's response in an alert.
// var userRes = prompt("Message", "Default Response");
// alert(userRes);






// -------------------------------- Chapter 10 - If Statments --------------------------------

// // 1. var city = "Karachi"
// // if (city = "Karachi") {
// // console.log("The City OF Lights")
// // Correct the above statement:
// // Also try this statement by yourself
// var city = "Karachi";
// if (city = "Karachi") {
//     console.log("The City of Lights");
// }


// // 2. This is the first line of an if statement:
// // if (x === y) {
// // Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
// var x = 1;
// var y = 1;
// if (x === y) {
//     var valueOfZ = prompt("What is the value of z");
//     console.log(valueOfZ);
// }


// // 3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")
// var zipCode = +prompt("Enter your Zip Code");
// if (zipCode === 10010) {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }


// // 4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;
// var x = 4;
// if (x === 4) {
//     x = 1;
// }






// -------------------------------- Chapter 11 - Comparison Operators --------------------------------

// // 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)
// var num1 = 2;
// var num2 = 4;
// if (num1 !== num2) {}


// // 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.
// var firstNum = 4;
// var secondNum = 4;
// if (firstNum >= secondNum) {}


// // 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
// var num = 2;
// if (num !== 4) {
//     num = 4;
// }


// // 4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.
// if(0 !== 1) {
//     alert("Congratulations");
// }


// // 5. Code a prompt asking for your first name.
// // Code an if statement that tests whether the name you entered
// // is unequal to another name.
// // If the condition is true (it will be), display an alert that says "No match"

// var firstName = prompt("Enter your First Name");
// if (firstName !== "NoName") {
//     alert("No Match");
// }






// -------------------------------- Chapter 12 - if…else and else if statements --------------------------------

// // 1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
// var val1 = 6;
// var val2 = 5;
// if (val1 >= val2) {
//     alert(val1 + " is greater than or equal to " + val2);
// } else {
//     alert(val1 + " is not greater than or equal to " + val2);
// }


// // 2. Write a program using if else and else if statement which take
// // marks from user. And the program will calculate your percentage
// // and give you grade A/C to Your percentage. (MARKSHEET)
// var eng = +prompt("Enter your marks obtained in English out of 100");
// var urdu = +prompt("Enter your marks obtained in Urdu out of 100");
// var maths = +prompt("Enter your marks obtained in Maths out of 100");
// var isl = +prompt("Enter your marks obtained in Islamiat out of 100");
// var sports = +prompt("Enter your marks obtained in Sports out of 100");
// var science = +prompt("Enter your marks obtained in Science out of 100");
// var socialStudies = +prompt("Enter your marks obtained in Social Studies out of 100");

// if(eng <= 100 && urdu <= 100 && maths <= 100 && isl <= 100 && sports <= 100 && science <= 100 && socialStudies <= 100) {
    
//     var obtainedMarks = eng + urdu + maths + isl + sports + science + socialStudies;
//     var totalMarks = 700;
//     console.log("Your obtained Marks is " + obtainedMarks);
    
//     var percentage = (obtainedMarks / totalMarks) * 100;
//     console.log("Your Percentage is " + percentage + "%");
    
// } else {
//     alert("Your obtained marks cannot be greater than 100 as this is the total marks");
// }    


// // 3. This is the if statement that begins the code.
// // if (a === 10) {
// //  alert("a is 10");
// // }
// // If a isn't 10, display an alert that says The correct value of a is
// // ____
// // Note: Try this by yourself
// var a = 11;
// if (a === 10) {
//     alert("a is 10");
// } else {
//     alert("The correct value of a is " + a);
// }


// // 4. Prompt the user to enter a city. If the city is Karachi, display an alert acknowledging it is Karachi. If not, check to see if it's Lahore. If it is, display an alert acknowledging it's Lahore. Otherwise, display a different alert.
// var city = prompt("Enter your City").toLowerCase();

// if (city === "karachi") {
//     alert("It's Karachi");
// } else if (city === "lahore") {
//     alert("It's Lahore");
// } else {
//     alert("Your city is " + city);
// }






// -------------------------------- Chapter 13 - Testing sets of conditions --------------------------------

// // 1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.
// var a = 2;
// var b = 2;
// var c = 2;
// var d = 2;
// if (a === b && c === d) {}


// // 2. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.
// var a = 2;
// var b = 2;
// var c = 2;
// var d = 2;
// if (a === b || c !== d) {}


// // 3. Code the first line of an if statement that tests whether
// // I. name is either "Hamza" or "Arsalan".
// // II. age is Less than 60.
// var name = "Hamza";
// var age = 60;
// if (name === "Hamza" || "Arsalan" || age < 60) {}


// // 4. Declare two variables and assign them number values.
// // If the first variable is less than the second variable or greater than
// // the second variable, display an alert.
// var num1 = 9;
// var num2 = 2;
// if (num1 > num2) {
//     alert(num1 + " is greater than " + num2);
// } else if (num1 < num2) {
//     alert(num1 + " is less than " + num2);
// } else {
//     alert(num1 + " is equal to " + num2);
// }


// // 5. Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name. If your answers match the two variables, display an alert.

// var firstName = "Farah";
// var lastName = "Syed";
// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");

// if (firstName === fName && lastName === lName) {
//     alert("Congratulations! You are identified");
// }






// -------------------------------- Chapter 14 - Nested if statements --------------------------------

// // 1. Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5 , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".
// var password = prompt("Enter your password");
// if (password.length > 0) {

//     if(password < 5) {
//         alert("Password must be greater than 5");
//     } else {
//         alert("OK");
//     }
// } else {
//     alert("You left the password field blank");
// };


// // 2. Try this statement by yourself
// // if (a === 1) {
// // if (c === "Max") {
// //  alert("OK");
// //  }
// // }
// var a = 1;
// var c = "Max";
// if (a === 1) {
// if (c === "Max") {
//  alert("OK");
//  }
// }


// // 3. Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
// // if (a === 1) {
// //     if (c === "Max") {
// //         alert("OK");
// //     }
// // }

// if (a === 1 && c === "Max") {
//     alert("OK");
// }


// // 4. Declare two variables and assign them the same number value.
// // Test two conditions, using nested if statements. Test whether the
// // first variable equals the second variable and also whether it is less
// // than or equal to the second variable. If the test passes—and it
// // will—display an alert message.
// var num1 = 2;
// var num2 = 2;
// if (num1 === num2) {
//     if (num1 <= num2) {
//         alert("The variable test is passed");
//     }
// }






// -------------------------------- Chapter 15 - Array I --------------------------------

// // 1. Declare an empty array.
// var emptyArr = [];


// // 2. Code an array with 1 string element
// var strArr = ["Water"];


// // 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index.
// var alphabet = ["h","i","j","k"];
// alert(alphabet[2]);


// // 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
// var alphabet=["h", "i", "j", "k", "l", "m", "n", "o"];

// alert(alphabet.length);


// // 5. Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.
// var fruits = ["apple"];
// fruits[1] = "banana";
// alert(fruits[1]);






// -------------------------------- Chapter 16 - Array II --------------------------------

// // 1. Code an array with 1 string element. Add an additional element to the array using push. Create an alert whose message is the last element.
// var sports = ["soccer"];
// sports.push("surfing");
// var lastElement = sports.slice(-1);
// alert(lastElement);


// // 2. var Alphabet=["h","i","j","k"]
// // Remove the last element from the array Alphabet
// var alphabet=["h", "i", "j", "k"];
// alphabet.pop();


// // 3. var Alphabet=["h","i","j","k"]
// // Add a new element, a number, to the end of an array.
// var alphabet=["h", "i", "j", "k"];
// alphabet.push(3);
// console.log(alphabet);






// -------------------------------- Chapter 16 - Array III --------------------------------

// // 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// // Remove the first element of an array.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);


// // 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// // Add three number elements to the beginning of an array.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes);


// // 3. Declare an array with one element. Add a second element to the beginning of the array.
// // Create an alert whose message is the new first element.
// var colors = ["white"];
// colors.unshift("black");
// alert(colors.slice(0, 1));


// // 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// // Insert "L" into the array between "M" and "XL".
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes);


// // 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// // Copy the first 3 sizes of the array and put them into a new array, regSizes.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes);


// // 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// // Add 2 elements after "dog" and remove "cat", "ox", and "duck"
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "horse", "camel");
// console.log(pets);


// // 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// // Remove "cat" and "ox".
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2);
// console.log(pets);


// // 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// // Reduce it to "duck" and "frog" using slice.
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// // pets.slice(3, 5);






// -------------------------------- Chapter 17 - 20 - For Loops --------------------------------

// // 1. Write a statement in which loop is to run 10 times.
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }


// // 2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.
// for (var i = 0; i <= 11; i++) {
//     console.log(i);
// }


// // 3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
// // for var i = 0 i <= 4 i++
// // Note: Complete this statement by yourself
// for (var i = 0; i <= 4; i++) {}


// // 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
// for (let ind = 0; ind < 100; ind++) {
//     console.log(ind);
// }


// // 5. Code the first line of a for loop with the usual counter and the
// // usual starting value. Run it 3 times using > to specify how many
// // loops. Decrement it with each iteration.
// for (var ind = 3; ind > 0; ind--) {
//     console.log(ind);
// }


// // 6. The statement assigns the number of elements in the array to the variable.
// var subjects = ["mathematics", "computer", "physics"];
// var noOfElements = subjects.length;
// console.log(noOfElements);


// // 7. Set a variable named “flag” with an initial Boolean value of your choice.
// var flag = false;


// // 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// for (var ind = 0; ind < pets.length; ind++) {
//     console.log(ind);
// }


// // 9. Coding Exercise:
// // Set a for loop to run 10 iterations. On the second iteration, display the counter in an alert. (It should be 1.) Break out of the loop.
// for (var ind = 0; ind < 10; ind++) {
//     if(ind === 1) {
//         alert(ind);
//         break;
//     }
//     console.log(ind);
// }


// // 10. Create an array which contains user names Code a prompt with the message "Enter first name". The user's response is assigned to firstName. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names. Code an if statement that tests the presense of (user name) in an array.
// var userNames = ["anna", "blair", "elenor"];
// var firstName = prompt("Enter first name").toLowerCase();
// for (let ind = 0; ind < userNames.length; ind++) {
//     var element = userNames[ind];
//     if (firstName === element) {
//         alert("User found");
//         break;
//     } else {
//         alert ("Please write correct user name");
//         break;
//     }
// }


// // 11. Complete this code to display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     } else {
//         alert("Match not found");
//     }
// };


// // 12. var firstArr = ["a", "b", "c", "d", "e", "f"];
// // var secondArr = [1, 2, 3, 4, 5, 6];
// // Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr. In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.
// // After that concatenate the both loops. Expected Output:
// // a1
// // a2
// // a3
// // a4
// // …
// // f6
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < firstArr.length; i++) {
//     var alphabet = firstArr[i];
//     for (let j = 0; j < secondArr.length; j++) {
//         var num = secondArr[j];
//         console.log(alphabet + num);
//     }   
// }






// -------------------------------- Chapter 21 - Changing Case --------------------------------

// // // 1. Type the characters that are missing from this code. var allLower = userInput.toLowerCase; Note: Correct this statement by yourself
// // var allLower = userInput.toLowerCase();


// // 2. Convert the string represented by x to lower-case and assign the result to the same variable.
// var x = "STRING";
// x = x.toLowerCase();


// // 3. Convert the string represented by y to upper-case and assign the result to the same variable.
// var y = "string";
// y = y.toUpperCase();


// // 4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
// var a = "Book";
// var b = a.toLowerCase();


// // 5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
// var flowers = ["Daisy", "Tulip", "Lily", "Jasmine", "Rose" ];
// var flower1 = flowers[0].toLowerCase();


// // 6. Display in an alert the upper-case version of the string represented by a variable.
// flower1 = flowers[0].toUpperCase();
// console.log(flower1);


// // 7. var cityName = “kaRacHi”;
// // Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
// var cityName = "kaRacHi";
// cityName = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();






// -------------------------------- Chapter 22-25 - Strings --------------------------------

// // 1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
// var sameWords = "captain";
// var sliceSameWords = sameWords.slice(1, 3);


// // 2. The number of characters in the string will be assigned to the variable.
// var sameWords = "captain";
// var sameWordsLength = sameWords.length;


// // 3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.
// var animal = "elephant";
// var seg = animal.slice(2, 6);


// // 4. Find the number of characters in the string represented by a variable and assign the number to a second variable.
// var healthyDrink = "Water";
// var noOfChar = healthyDrink.length;


// // 5. In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.
// var language = "JavaScript";
// var noOfChar = language.length;
// var characters = language.slice(1, -3);


// // 6. var text = "To be or not to be.";
// // var indx = text.indexOf("be");
// // What is the value of indx?
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// // Answer: 3 ----- Because it only counts the index of the first matching string.


// // 7. var text = "To be or not to be.";
// // var indx = text.lastIndexOf("be");
// // What is the value of indx?
// // Note: Try the above both examples by yourself.
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// // Answer: 16 ----- Because it only counts the index of the last matching string.


// // 8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
// var indx = text.lastIndexOf("go");


// // 9. Code the first line of an if statement that tests whether a segment
// // with an index represented by indexNum exists in a string.
// if (indexNum !== -1) {}


// // 10. In this string "abcde", what character is at index 2? (Use charAt)
// var str = "abcde";
// var char = str.charAt(2);


// // 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
// var text = "Abbreviation";
// var cha = text.charAt(10);


// // 12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
// var str = "Spectacular";
// var x = str.charAt(str.length - 1);


// // 13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
// var input = "Table";
// var cha = input.charAt(4);


// // 14. Code the first line of an if statement that tests whether the
// // 3rd character of a string represented by a variable is a particular character.
// var string = "Electronics";
// var char = string.charAt(2);
// if (char === "e") {}


// // 15. Code a for loop that cycles through all the characters of a
// // string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
// var alphabets = [];
// var str = "abcdef";
// for (var i = 0; i < str.length; i++) {
//     alphabets[i] = str[i];
// }


// // In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.
// var reply = "no";
// var revisedReply = reply.replace("no", "yes");


// // 16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
// var str = "1 word";
// var newStr = str.replace("1", "one");


// // 17. If you want all instances replaced, enter 3 characters that need to appear in this statement.
// // var y = x.replace("a", "z");
// var y = x.replace(/a/g, "z");






// -------------------------------- Chapter 26 - Rounding Numbers --------------------------------

// // 1. Form a statement that rounds a number to the nearest integer.
// var roundedNum = Math.round(3.499);


// // 2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// var origNum = 65.334;
// var roundNum = Math.ceil(origNum);


// // 3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// var origNum = 65.334;
// var roundNum = Math.floor(origNum);


// // 4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
// var num = 65.334;
// var roundedNo = Math.round(num);


// // 5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
// var originalNum = .5;
// var roundedNum = Math.floor(originalNum);





// -------------------------------- Chapter 27 - Random Numbers --------------------------------

// // 1. Convert a random number generated by JavaScript to a number in the range 1 to 50
// var randomNo = Math.floor(Math.random() * 50) + 1;


// // 2. Generate a random number and assign it to a variable that hasn't been declared beforehand.
// var randomNum = Math.floor(Math.random() * 100) + 1;


// // 3. You have to create a dice in JavaScript with the use of pseudo-random number.
// var diceNum = Math.floor(Math.random() * 6) + 1;
// console.log("The dice num is " + diceNum);


// // 4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
// var toss = Math.floor(Math.random() * 2) + 1;
// if (toss === 1) {
//     console.log("It's a head");
// } else {
//     console.log("It's a tail");
// }






// -------------------------------- Chapter 28-29 - Converting Strings --------------------------------

// // 1. How do you convert a string to an integer in JavaScript?
// // Answer: Using parseInt() method e.g. parseInt("34").


// // 2. Write a JavaScript function to convert the string "123" to an integer.
// var string = "123";
// var int = parseInt(string);


// // 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
// var string = "1.23";
// var floatingPointsNum = parseFloat(string);


// // 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
// // Answer:
// // You can match the given value with the RegEx in the following function: 
// function isInterger(value) {
//     if(value.match(/^[0-9]+([.][0-9]+)?$/)) {   // OR  value.match(/^\d*\.?\d*$/)
//         return true;
//     } else {
//         return false;
//   }
// }
// console.log(isInterger('.76'));  //  returns true
// console.log(isInterger("76.9238"));  //  returns true
// console.log(isInterger('3abc'));  //  returns false
// console.log(isInterger('dabc'));  //  returns false


// // 5. How can you convert a number to a string in JavaScript?
// // Answer: Using .toString() method
// var num = 45;
// var str = num.toString();


// // 6. Write a JavaScript function to convert the number 42 to a string.
// var number = 42;
// var string = number.toString();


// // 7. Can you convert a string representing a decimal number (e.g.,"3.14") to an integer in JavaScript? If so, how?
// // Answer: Yes it is possible using
// var decimalString = "3.14";
// var integer = parseInt(decimalString);






// -------------------------------- Chapter 30 - Controlling the length of decimals --------------------------------

// // 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
// var num = 2.5039045;
// var newNum = num.toFixed(4);


// // 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
// var num = 2.3539;
// var newNum = Number(num.toFixed(2));


// // 3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
// var num = 8.4958;
// var newNum = num.toFixed(2);
// if(newNum.length > 4) {};


// // 4. Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.
// var num = 7.49203958;
// var strNum = num.toFixed(2);
// alert(strNum);






// -------------------------------- Chapter 31-34 - Date & Time --------------------------------

// // 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
// var dObj = new Date();


// // 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
// var dStr = new Date().toString();


// // 3. Code a statement that extracts the day of the week from a Date
// // object represented by d and assigns it to day, which hasn't been declared beforehand.
// var d = new Date();
// var day = d.getDay();


// // 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date();
// var day = d.getDay();
// var currentDay = dayNames[day];
// alert("Today is " + currentDay);


// // 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
// var dateObj = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// var day = dateObj.getDay();     // Extracting Current Day
// var currentDay = dayNames[day];

// var mon = dateObj.getMonth();   // Extracting Current Month
// var currentMonth = months[mon];

// var date = dateObj.getDate();   // Extracting Current Date

// var year = dateObj.getFullYear();   // Extracting Current Year

// var currHour = dateObj.getHours();   // Extracting Current Hour

// var currMins = dateObj.getMinutes();   // Extracting Current Minutes

// var currSecs = dateObj.getSeconds();   // Extracting Current Seconds

// var currMilliSecs = dateObj.getMilliseconds();   // Extracting Current Milliseconds

// var currMilliSecsFrom1Jan = dateObj.getTime();   // Extracting Current Milliseconds from midnight 1st Jan 1970


// // 6. Code a statement that creates a Date object for the last day of the
// // last month of 2020 and assigns it to later, which hasn't been declared beforehand.
// var later = new Date("December 31, 2020");


// // 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
// var feb21992 = new Date("February 02, 1992");


// // 8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
// alert(new Date().getTime() - new Date("January 01, 1980").getTime());


// // 9. How do you change the year of a date in JavaScript?
// // Answer: using .setFullYear() method e.g.
// var dateObj = new Date();
// dateObj.setFullYear(2014);


// // 10. Write a JavaScript function to change the month of a given date to January.
// var date = new Date();
// date.setMonth(0);


// // 11. What is the method to change the day of the week for a specific date in JavaScript?
// // // Answer: using .setDate() method e.g.
// var date = new Date();
// date.setDate(7);


// // 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
// var userMins = +prompt("Enter minutes you want to render");
// function setMin(givenMins) {
//     var date = new Date();
//     date.setMinutes(givenMins);
//     return date
// }
// console.log(setMin(userMins));


// // 13. Write a JavaScript function to add a specific number of hours to a given time.
// var userHrs = +prompt("Enter hours you want to add");
// function setHours(givenHrs) {
//     var date = new Date();
//     date.setHours(givenHrs);
//     return date
// }
// console.log(setHours(userHrs));


// // 14. You have to create an age calculator in JavaScript.
// var dob = prompt("Enter your date of birth, Use 'YYYY-MM-DD' format");
// var currentDate = new Date();
// var birthDate = new Date(dob);
// var age;

// var yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
// var currentMonth = currentDate.getMonth();
// var birthMonth = birthDate.getMonth();

// if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
// // Subtract 1 year if the birthdate hasn't occurred yet this year.
//     age = yearsDiff - 1;
// } else {
//     age = yearsDiff;
// }
// alert("You are " + age + " years old.");






// -------------------------------- Chapter 35-37 - Functions --------------------------------

// // 1. Code the first line of a function displayAlert.
// function displayAlert() {};


// // 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
// function askName() {
//     var userName = prompt("Enter name");
//     return userName;
// }
// askName();


// // 3. Code a function that calls 2 other functions.
// function func1() {
//     return "I'm function 1";
// }
// function func2() {
//     return "I'm function 2";
// }
// function foo() {
//     func1();
//     func2();
// }
// foo();


// // 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
// function displayName() {
//     var userName = prompt("Enter name");
//     alert("Hi " + userName);
// }
// displayName();


// // 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
// function concat(a, b, c) {}
// concat(food, "text", 5);


// // 6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
// function concatenate(param1, param2) {
//     var concat = param1 + param2;
//     return concat;
// }
// concatenate(param1, param2);


// // 7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
// function multiply(a, b, c) {
//     var result = a * b * c;
//     return result;
// }
// multiply(4, 5, 7);


// // 8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
// function calcAverage() {
//     var input = prompt("Find Average \nEnter a list of numbers separated by commas to e.g. 10,21");
    
//     var array = input.split(",");
//     var numbers = [];
//     for(var i = 0; i < array.length; i++) {
//         numbers.push(Number(array[i]));
//     }
    
//     if(numbers.length === 0) {
//         return 0;
//     }
    
//     var sum = 0;
//     for(var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     var average = sum / numbers.length;

//     if (isNaN(average)) {
//         return alert("Invalid input. Please enter a list of numbers separated by commas.");
//     } else {
//         return alert("The average is " + average);
//     }
// }
// calcAverage();


// // 9. Write a JavaScript function that takes two parameters and returns their sum.
// function calcSum(a, b) {
//     var sum = a + b;
//     return sum;
// }
// calcSum(5, 7);


// 10. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
// Answer: This problem is already solved on line no. 1305.


// // 11. You have to capture the returned value from a function and store it in a variable?
// function foo() {
//     return "This is a statement";
// }
// var statement = foo();


// // 12. Write a function which tells letter counts of (word).
// function countLetters(str) {
//     var count = str.length;
//     return count;
// }
// var string = prompt("Enter a word to count it's letters");
// countLetters(string);


// // 13. Write a function to set (year) in date object.
// function setYear(year) {
//     var date = new Date(year);
//     return date;
// }
// var userYear = prompt("Enter a year to add to the date");
// setYear(userYear);


// // 14. Write a function which tells the age of a person who Born on (dateOfBirth)
// function calcAge(dob) {
//     var currentDate = new Date();
//     var birthDate = new Date(dob);
//     var age;

//     var yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
//     var currentMonth = currentDate.getMonth();
//     var birthMonth = birthDate.getMonth();

//     if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
//     // Subtract 1 year if the birthdate hasn't occurred yet this year.
//         return age = yearsDiff - 1;
//     } else {
//         return age = yearsDiff;
//     }
// }
// var dob = prompt("Enter your date of birth, Use 'YYYY-MM-DD' format");
// calcAge(dob);


// // 15. Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false
// function checkPresence(word) {
//     var check = array.includes(word);
//     return check;
// }

// var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var word = prompt("Enter a word to check whether it includes or not");
// checkPresence(word);


// // 16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)
// function repeatString(str) {
//     var repeat = str.repeat(10);
//     return repeat;
// }
// var str = prompt("Enter a word to repeat 10 times");
// repeatString(str);


// // 17. Write a function which reverse array = ['a','b','c','d','e']. Hint: arr.reverse()
// function repeatString(array) {
//     var reverse = array.reverse();
//     return reverse;
// }
// var array = ['a','b','c','d','e'];
// repeatString(array);






// -------------------------------- Chapter 38 - Local vs. Global Variables --------------------------------

// // 1. Write a JavaScript function that demonstrates the usage of a local variable.
// // Answer: Local variables have Function Scope:
// // They can only be accessed from within the function.
// function localVariable() {
//     var localVar = "I'm a local variable";  //  Function Scope
//     alert(localVar);
// }
// localVariable();


// // 2. How can you access a global variable inside a function in JavaScript?
// // Asnwer: You can access a global variable inside a function without any special syntax.
// // Variables declared Globally (outside any function) have Global Scope.
// // All scripts and functions on a web page can access it.
// var globalVar = "I'm a global variable";  //  Global Scope
// function globalVariable() {
//     alert(globalVar);
// }
// globalVariable();






// -------------------------------- Chapter 39-40 - Switch Statement --------------------------------

// // 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
// var day = new Date().getDay();
// switch (day) {
//     case 4:
//     case 5:
//         console.log("Weekend is near.");
//         break;
//     case 6:
//     case 0:
//         console.log("Yup! It's Weekend.");
//         break;
//     default:
//         console.log("Looking forward to the Weekend.");
//         break;
// }


// // 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.
// var cityName = prompt("Enter your city");
// switch (cityName) {
//     case "karachi":
//         console.log("Welcome to the city of lights and the heart of Pakistan.");
//         break;
//     case "islamabad":
//         console.log("Welcome to the Capital.");
//         break;
//     default:
//         console.log("Welcome to the city.");
//         break;
// }






// -------------------------------- Chapter 41-42 - While Loops, do...while Loops --------------------------------

// // 1.	Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.
// // Using While Loop:
// var i = 0;
// while (i <= 1) {
//     i++;
// }

// // Using Do... While Loop:
// var j = 0;
// do {
//     j++;
// } while (j <= 1);


// // 2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.
// // var animals=["horse", "ox", "cow", "pig", "duck"];

// var animals=["horse", "ox", "cow", "pig", "duck"];
// // Using While Loop:
// var i = 0;
// while (i < animals.length) {
//     if(animals[i] === "pig") {
//         alert("Found it!");
//         break;
//     }
//     i++;
// }

// // Using Do... While Loop:
// var j = 0;
// do {
//     if(animals[j] === "pig") {
//         alert("Found it!");
//         break;
//     }
//     j++;
// } while (j < animals.length);


// // 3. Code to use a while & do while loop to print the numbers from 1 to 10.
// // Using While Loop:
// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// // Using Do... While Loop:
// var j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);


// // 4. To use a while loop to ask the user for a number and then print that number back to them.
// // Using While Loop:
// var i = 0;
// var userNum = prompt("Enter a number");
// while (i <= userNum) {
//     console.log(i);
//     i++;
// }

// // Using Do... While Loop:
// var j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j <= userNum);


// // 5. To use a while loop to check if a number is even or odd.
// // Using While Loop:
// var i = 1;
// while (i <= 100){
//     if(i % 2 === 0){
//         console.log("Even " + i);
//     } else {
//         console.log("Odd " + i);
//     }
//     i++;
// }

// // Using Do... While Loop:
// var j = 0;
// do {
//     if(j % 2 === 0){
//         console.log("Even " + j);
//     } else {
//         console.log("Odd " + j);
//     }
//     j++;
// } while (j <= 100);


// // 6. Create a guessing game where the user has to guess a number between 1 and 100. 
// // Using While Loop:
// var i = 10;
// var rdmNum = Math.floor(Math.random() * 100 + 1);
// while (i >= 1){
//     var userNum = +prompt("Guess the Number. Enter a number between 1 and 100. \nChances left " + i);
//     if(userNum === rdmNum){
//         alert("Yes! it's " + userNum);
//         break;
//     } else if(i === 1) {
//         alert("You've got all wrong. Better luck next time.");
//     } else if(userNum < rdmNum) {
//         alert("No! it's not " + userNum + "\nHint: Try a higher number.");
//     } else {
//         alert("No! it's not " + userNum + "\nHint: Try a lower number.");
//     }
//     i--;
// }

// // Using Do... While Loop:
// var j = 10;
// var rdmNum = Math.floor(Math.random() * 100 + 1);

// do {
//     var userNum = +prompt("Guess the Number. Enter a number between 1 and 100. \nChances left " + j);
//     if(userNum === rdmNum){
//         alert("Yes! it's " + userNum);
//         break;
//     } else if(j === 1) {
//         alert("You've got all wrong. Better luck next time.");
//     } else if(userNum < rdmNum) {
//         alert("No! it's not " + userNum + "\nHint: Try a higher number.");
//     } else {
//         alert("No! it's not " + userNum + "\nHint: Try a lower number.");
//     }
//     j--;
// } while (j >= 1);



// 7. Use a while & do-while loop to create a countdown timer?
// // Using While Loop:
// var countdown = 10;
// while (countdown >= 0){
//     console.log("Countdown: " + countdown);
//     countdown--;
// }

// // Using Do... While Loop:
// var countdown = 10;
// do {
//     console.log("Countdown: " + countdown);
//     countdown--;
// } while (countdown >= 0);






// -------------------------------- Chapter 46, 48 - Events --------------------------------

// // 1. Create a simple event that prints a message when the user clicks on an element.
// // For elements go to index.html line no. 11
// function displayMessage() {
//     var para = document.getElementById("msgPara");
//     var message = "Hi there!";
//     para.innerHTML = message;
// }


// // 2. Create an event that hides an element when the user clicks on a different element.
// function hide() {
//     var box = document.getElementById("box");
//     box.style.display = "none"; // OR
//     // box.style.visibility = "hidden";
// }


// // 3. Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away.
// function changeColor() {
//     var link = document.getElementById("link");
//     link.style.color = "#aeaeae";
// }
// function originalColor() {
//     var link = document.getElementById("link");
//     link.style.color = "";
// }


// // 4. Create an event that scrolls to the top of the page when the user clicks on a link.
// function scrollToTop() {
//     var scrollLink = document.getElementById("scrollTop");
//     scrollLink.scrollTo({ top: 0, behavior: 'smooth' });
// }


// // 5. Create a link that plays a sound when the user clicks on it.
// var groupSound = new Audio();
// groupSound.src = "./group-cheer.wav";


// // 6. Create a simple link that opens a new window when clicked.
// function openWindow() {
//     var newWindow = window.open("", "win1", "width=420,height=380,left=200,top=100");
//     return newWindow;
// }


// // 7. Create a simple button that alert a message when clicked.
// function alertMessage() {
//     var message = alert("Hi there!");
//     return message;
// }


// // 8. Create a button that changes color when the user hovers over it.
// function diffColorOnHover() {
//     var hoverBtn = document.getElementById("hoverBtn");
//     hoverBtn.style.backgroundColor = "#ff9a8a"
// }

// function backToOirginalColor() {
//     var hoverBtn = document.getElementById("hoverBtn");
//     hoverBtn.style.backgroundColor = "";
// }


// // 9. Create a button that plays a sound when the user clicks on it.
// var birdsSound = new Audio();
// birdsSound.src = "./singing-birds.wav";


// // 10. Create an event that alert a message when the user moves the mouse over an element.
// function alertMsg() {
//     return alert("This is a circle.");
// }


// // 11. Create an event that hides an element when the user moves the mouse out of it.
// function hideElement() {
//     var triangle = document.getElementById("triangle");
//     triangle.style.display = "none";
// }


// // 12. Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks on a close button in the new window. The size of the new window should be determined by the user's mouse position.
// function openNewWindow() {
//     // Determine the window size based on the mouse position
//     var mouseX = event.clientX;
//     var mouseY = event.clientY;

//     // Set the width and height of the new window
//     var windowWidth = mouseX + 100;
//     var windowHeight = mouseY + 100;
    
//     // Open a new window with specified size
//     var newWindow = window.open("", "", "width=" + windowWidth + ", height=" + windowHeight + ", top=" + mouseY + ", left=" + mouseX);
    
//     // Add content to the new window
//     newWindow.document.write('<html><head><title>New Window</title></head><body>');
//     newWindow.document.write('<h1>This is a new window</h1>');
//     newWindow.document.write('<button onclick="closeWindow()">Close</button>');
//     newWindow.document.write('</body>');
//     newWindow.document.write('<script>function closeWindow() {window.close();}</script>');
//     newWindow.document.write('</html>');
// }






// -------------------------------- Chapter 49, 50 - Reading and Setting field values --------------------------------

// // 1. Read the value of a user Input and print it to the console.
// function getUserName() {
//     var userName = document.getElementById("userName").value;
//     console.log("Input Value:", userName);
// }


// // 2. Read the value of a checkbox and print it to the console.
// function getUserHobbies() {
//     var reading = document.getElementById("reading");
//     var writing = document.getElementById("writing");
//     var coding = document.getElementById("coding");
//     console.log("Checkbox Value:");
//     if(reading.checked) {
//         console.log(reading.value);
//     }
//     if(writing.checked) {
//         console.log(writing.value);
//     }
//     if(coding.checked) {
//         console.log(coding.value);
//     }
// }


// // 3. Read the value of a select box and print it to the console.
// function getUserCountry() {
//     var userCountry = document.getElementById("country").value;
//     console.log(userCountry);
// }
