// <<< Hometask >>>

// <<< 1 >>>
// Function evalNumbers() prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.

//  1 Print result of num1+num2 if operation is “add”
//  2 Print result of num1-num2 if operation is “subtract”
//  3 Print result of num1*num2 if operation is “multiply”
//  4 Print result of num1/num2 if operation is “divide”
//  5 Print result of num1%num2 if operation is “modulus”
//  6 Else print “Invalid operation


// function evelNumbers(num1, num2, operation) {

//     switch(operation) {
//         case 'add' : console.log(num1 + num2);break
//         case 'subtract' : console.log(num1 - num2);break
//         case 'multiply' : console.log(num1 * num2);break
//         case 'divide' : console.log(num1 / num2);break
//         case 'modules' : console.log(num1 % num2);break
//         default : console.log('there is no such as numbers');break
//     }
// }

// evelNumbers(2, 2, 'add');
// evelNumbers(2, 2, 'subtract');
// evelNumbers(2, 2, 'modules');
// evelNumbers(2, 2, 'some');

// ============================================

// <<< 2 >>>

// Function findTriangleType() finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.
//  1 Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
//  2 Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
//  3 Else “Scalene triangle.” since values of all sides are unequal.


// function findTriangleType(side1, side2, side3, operation) {
//      switch(operation) {
//         case 'Equilateral triangle' : console.log(side1 === side2 && side2 === side3 );break
//         case 'Isosceles triangle' : console.log(side1 === side2 || side2 !== side3);break
//         case 'Scalene triangle' : console.log(side1 !== side2 || side2 !== side3);break
//      }
// }
// findTriangleType(2,2,2,'Equilateral triangle');
// findTriangleType(2,2,3,'Isosceles triangle');
// findTriangleType(2,3,4,'Scalene triangle');

// =======================================

// <<< 3 >>>
//  Function checkLeapYear() find if the given year is a leap year or not by using %, !=, && and || operators in JavaScript.

//  1 If year is divisble by 4 and not divisble by 100 then print “leap year”.
//  2 Or if year is divisible by 400 then print “leap year”.
//  3 Else print “not a leap year”.

// function clickMe(num, operation) {
//    switch(operation) {
//     case 'leap year' : result = num % 4 === 0; console.log(result);break
//     case 'not a leap year' : result = num % 4 !== 0; console.log(result);break
//    }
// }
// clickMe(4,'leap year');
// clickMe(2,'not a leap year');


// ============================

// <<< 4 >>>

// Function findLargest() finds the largest of three number by using “>” and “&&” operator in JavaScript.

// Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2<num3.
// Else print num3.




///////////////////////////////////////////////////////////////////////////////////////////////////////////

// <<< For loop hometask>>>

// 1st => Shudan for loop tuzingki berilgan sonlarni toq yokida juftligini topib bersin va yonida raqami bilan chiqsin!

// for(let i = 1; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i,'Juft son');
//     } else if(i % 2 !== 0) {
//         console.log(i,'Toq Son');
//     }
// } 

// =================================

// 2nd for loop orqali berilgan qiymatning kerakli harflarini ajratib oling va nechtaligini ko'rasting!

// let name = 'Abdullajon';

// let result = "";

// for(let i = 0; i <= name.length; i++){

//     if(name[i] === 'l') {
//         result += name[i]
//     }
// }
// console.log(result.length);

// ==================================

// 3th for loopda berilgan qiymatni teskari qilib chiqarib bering!

// let str = 'Abbos';

// for(i = str.length-1; i >= 0; i--) {
//     console.log(str[i]);
// };

// ===================================

// 4th for loop da infinite loop yaratib bering! 

// for(let i = 1; i > 0; i++) {
//     console.log(i);
// }

// ===================================

// 5th for loopdan 1 dan 5 gacha raqamni olib ularni orasidan 3 raqamini ciqarib tashlang (continue) orqali!
 
// for(let i = 0; i <= 5; i++) {
//     if(i === 3){
//        continue
//     }
// console.log(i);
// }

// ====================================

// 6th berilgan raqamlarni teskari holatda ciqarib bering!

// for(let i = 10; i >= 0; i--) {
//     console.log(i);
// }
// 

// ====================================

//7th for loppda faqatgina juft sonlarni chiqarib bering!

// for(let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// =====================================

//8th for loopda katta hariflarni olib bering!

// let str = 'AbbosBEK';

// for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toLocaleUpperCase()){
//         console.log(str[i]);
//     }
// }

// ======================================

// 9th curry table yating for loopda!

// for(let i = 1; i <= 10; i++) {
//     for(let j = 1; j <=10; j++) {
//         console.log(i + "x" + j + '=' + i * j);
//     }
//     console.log('==============');
// }

// ======================================

//10th uchburchakni tengligini toping!

// function findTriangleType(side1, side2, side3, operation) {
//      switch(operation) {
//         case 'Equilateral triangle' : console.log(side1 === side2 && side2 === side3 );break
//         case 'Isosceles triangle' : console.log(side1 === side2 || side2 !== side3);break
//         case 'Scalene triangle' : console.log(side1 !== side2 || side2 !== side3);break
//      }
// }
// findTriangleType(2,2,2,'Equilateral triangle');
// findTriangleType(2,2,3,'Isosceles triangle');
// findTriangleType(2,3,4,'Scalene triangle');
