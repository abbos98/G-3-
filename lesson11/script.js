// <<< task 1 >>>
// Baxolash sistemasi!


// function findMyGrade(grade) {

// if(grade <= 39) {
//     console.log('F');
// } else if(grade >= 40 && grade <= 49) {
//     console.log('D');
// } else if(grade >= 50 && grade <= 59) {
//     console.log('C');
// } else if(grade >= 60 && grade <= 69) {
//     console.log('B');
// } else if(grade >= 70 && grade <= 79) {
//     console.log('B+');
// } else if(grade >= 80 && grade <= 89) {
//     console.log('A');
// } else if(grade >= 90 && grade <= 100) {
//     console.log('A+');
// } else {
//     console.log('Something gone wrong!');
//  }
// }

// findMyGrade(100);

//////////////////////////////////////////////////////////////////////////////////////////////

// <<< task 2 >>>
// Kabisa yili! (Leapyear!)

// let year = 2020;

// if(year % 4 === 0) {
//     console.log('Kabisa yili');
// } else if ( year % 4 !== 0) {
//     console.log('Kabisa yili emas');
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// <<< task 3 >>>
//Butun son va toq son chiqarish!

// function sonlar(num) {
//     if (num % 2 === 0) {
//         console.log('Qoldiqsiz son (even)');
//     } else {
//         console.log('Qoldiqli son! (odd)');
//     }
// }
// sonlar(2);

////////////////////////////////////////////////////////////////////////////////////////////////

// <<< task 4 >>>
// Function findTriangleType() finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.
//  1 Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
//  2 Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
//  3 Else “Scalene triangle.” since values of all sides are unequal.

// function checkMe(a, b, c) {
//     if(a == b && b == c) {
//       return `Equilateral triangle`
//     } else if (a == b || b == c) {
//       return `Isosceles triangle`
//     } else {
//       return `Scalene triangle`
//     } 
// }
// console.log(checkMe(2, 2, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////

// <<< task 5 >>>
// Function findDaysInMonth() finds the number of days in a given month of a year.

// If month is outside the range of 1 and 12 print “Invalid month”.
// If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// Else print “31 days”.

// function clickHand(month, year) {
//     if(month === 4 || month === 6 || month === 9 || month === 11) {
//         console.log('31 days');
//     } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         console.log('30 days');
//     } else if (month === 2 && year % 4 === 0) {
//         console.log('28 days');
//     } else if (month === 2 && year % 4 !== 0) {
//         console.log('leap-year 29-days');
//     } else {
//         console.log('check again something gone wrong!');
//     }
// }
// clickHand(2,2023)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <<< task 6 >>> 
//find min or max number!

// function num(a, b, d) {
// if (a > b && b > d) {
//     console.log('A is the largest');
// } else if(b > d) {
//     console.log('B is the largest');
// } else {
//     console.log('C is the largest');
//  }
// }
// num(10, 1, 20);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function evalNumbers() prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.

//  1 Print result of num1+num2 if operation is “add”
//  2 Print result of num1-num2 if operation is “subtract”
//  3 Print result of num1*num2 if operation is “multiply”
//  4 Print result of num1/num2 if operation is “divide”
//  5 Print result of num1%num2 if operation is “modulus”
//  6 Else print “Invalid operation”

// function clickMe(num1, num2, operation) {
//     if(operation == 'add') {
//         console.log(num1 + num2);
//     } else if(operation == 'subtract') {
//         console.log(num1 - num2);
//     } else if(operation == 'multiply') {
//         console.log(num1 * num2);
//     } else if(operation == 'divide') {
//         console.log(num1 / num2);
//     } else if(operation == 'modules') {
//         console.log(num1 % num2);
//     }
// }

// clickMe(2, 2, 'subtract')

///////////////////////////////////////////////////////////////////////////////////////////////////

// 10 penalty

// 1st Abbos ismini teskari holatda chiqarib bering!

// let name = 'Abbos';

// console.log(name.split('').reverse().join(''));

// ================

// 2nd function ichida number data typeni stringga ogirib bering va qayta stringga o'giring!

// function num() {
// let num = 1998;

// console.log(typeof +num.toString());
// }
// num()

// =================

// 3th function ichida berilgan qiymat yani textni bosh va oxirgi qiymalrini olib tashlang! (Misol => Abbos (bbo))

// function getName(){

// let name = 'Abbos';
// console.log(name.slice(1, -1));
// }
// getName();

// ==================

// 4th Berilgan qiymatni qisman ozgartirib bering! (Misol Abbosjon => Abbosbek ga);

// let name = 'Abbosjon jon jon';

// console.log(name.replace(/jon/gi, 'bek'));

// ==================

// 5th greeting function yarating va biz ismni kiritsak biz bilan salomlashsin!

// function greeting(name) {

// console.log(`Hello ${name} how are you today?`);   

// }
// greeting('Abbos');
// greeting('Shoxrux');
// greeting('Axrorbek');

//=====================

// 6th berilgan boolean data typeni string data type o'girib bering!

// let boolaen = true;

// console.log(boolaen.toString());

//=====================

// 7th strinf ichida math amalarini bajarib ularning qoldiqlarini yoq qilib bering!

// let num = '23.56 * 5';

// console.log(parseInt(eval(num)));

//=====================

//8th berilgan textnin ichida malum bir harfni nechinchi indexda turganini topib bering topib bering!(2ta uslubi bor)

// let name = 'Abdullajon';

// console.log(name.search('a'));
// console.log(name.indexOf('a'));

// ====================

//9th berilgan qiymatni qayta-qayta ciqsin 5 marta!

// let name = 'Abbos';

// console.log(name.repeat(5));

//=====================

// 10th Berilgan indexni harfini olish uchun nima qilish kerak?

// let name = 'Axrorbek';

// console.log(name.charAt(2));


// nasted loop

// for (let i = 0; i <= 3; i++) {
//     console.log('------outside');

//     for(let j = 0; j <= 3; j++) {
//         console.log('----Inside');
//     }
// }
