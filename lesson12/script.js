// <<< Switch case >>>

// let weather = 'cold';

// switch(weather){
//     case 'hot':
//     console.log('Bugun xavo zor');
//     break;
//  case 'cold':
//     console.log('galati havo');
//  default:
//  console.log('Bunday malumot yoq');
// }

// ================

// let student = 'Axrorbek';

// switch(student) {
//     case 'Abbos': console.log('bad student');break
//     case 'Axrorbek' : console.log('ordinary student');break
//     case 'Murodil' : console.log('quiet student');break
//     case 'Javohir' : console.log('just student');break
//     case 'Bekzod aka' : console.log('teacher of IT');break
//     default: console.log('there is not such as a student');break
// }

// =================

// let day = 4;

// switch(day) {
//     case 1: console.log('Dushanba');break
//     case 2: console.log('Seshanba');break
//     case 3: console.log('Chorshanba');break
//     case 4: console.log('Payshanba');break
//     case 5: console.log('Juma'); break
//     case 6: console.log('Shanba');break
//     case 7: console.log('Yakshanba');break
//     default: console.log('Bunday ku yoq');
// }

// =================

// let car = 'spark';

// switch(car) {
//     case 'lasetti' : console.log('$15000');break
//     case 'damas' : console.log('$10000');break
//     case 'matiz' : console.log('$6000');break
//     case 'spark' : console.log('$9000');break
//     case 'malibu' : console.log('$18000');break
//     default : console.log('bunday moshina yoq');break
// }


////////////////////////////////////////////////////////////////////////////////////////////////

// <<< For Loop >>>

// function student() {
//     console.log('Abbos');
// }
// for(let i = 0; i <= 5; i++) {
//     student()
// }

// ===============

// < While >

// let weather = 21;

// while (weather > 20) {
//     console.log('good weather');
//  break;
// }

// ============

// < do while >

// let weather = 21;

// do{
//     console.log('good weather');break
// } while(weather > 20);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <<< Array methods >>>

// let arr = ["Danny","Molly","Abbos","Murodil"];

// console.log(arr.push("Javohir")); 
// console.log(arr.unshift("Someone"));
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.toString());             // => arrayni stringga otqazib beradi! qoshimcha qo'shilmaydi!
// console.log(arr.join(" and "));          // => arrayni stringga ogiradi va qoshimcha qoshsa boladi!
// console.log(arr.concat("Jurabek"));
// console.log(arr.splice(1, 1));
// console.log(arr.slice(1,-1));
// console.log(arr.indexOf("Abbos"));
// console.log(arr.lastIndexOf("Abbos"));   // => bir xil qiymatni hamisha 2chisini olib beradi!
// console.log(arr.flat(2));                // => nasted bolgan larni olib beradi!

// ===================================================================================================

// forEach vs map

// let arr = ["Danny","Molly","Abbos","Murodil"];

// arr.forEach((a, b, c) => {    // => update qilib bo'lmaydi
//     console.log(a);
//     console.log(b);
//     console.log(c);
// });


// let check = arr.forEach((a) => {
//     return 'Salom'
// });
// console.log(check);



// let check = arr.map((a) => {      // update value qilsa bo'ladi!
//         return 'Salom'
//     });
//     console.log(check);
    

// ===========================

// filter => filter qilib beradi berilgan condition bo'yicha!

// let arr = [38, 43, 76, 56, 21, 38];

// let newArr = arr.filter((value) => value > 38);

// console.log(newArr);


// =============================

// find 

// let arr = [38, 43, 76, 56, 21, 38];

// let newArr = arr.find((a) => a === 76);

// console.log(newArr);

// =============================

// fill 

// let arr = [38, 43, 76, 56, 21, 38];

// let newArr = arr.fill(90);

// console.log(newArr);


// ==============================

// sort 

// let arr = ['d', 'c', 'B', 'a', 'g'];

// console.log(arr.sort(function (a, b){
//     return a.localeCompare(b);
// }));


/////////////////////////////////////////////////////////////////////////////////////////////////////

// hometask problems

// Function evalNumbers() prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.

//  1 Print result of num1+num2 if operation is “add”
//  2 Print result of num1-num2 if operation is “subtract”
//  3 Print result of num1*num2 if operation is “multiply”
//  4 Print result of num1/num2 if operation is “divide”
//  5 Print result of num1%num2 if operation is “modulus”
//  6 Else print “Invalid operation”


// function clickMe(num1, num2, operation) {
//  switch(operation) {
//     case 'add' : console.log(num1 + num2);break
//     case 'subtract' : console.log(num1 - num2);break
//     case 'multiply' : console.log(num1 * num2);break
//     case 'divide' : console.log(num1 / num2);break
//     case 'modules' : console.log(Math.abs(num1 - num2));break
//     default : console.log('check it again bratishka');break
//  }

// }
// clickMe(2, 2, 'subtract');
// clickMe(2, 2, 'multiply');
// clickMe(2, 2, 'modules');
// clickMe(2, 2, 'modu');


// ===============================

// function kabisa(yil) {
//     switch( yil % 4 ) {
//         case 0 :console.log(`leap year`);
//         break;
//         default:console.log(`not a leap year`);
//     }
//     }
//     kabisa(2000)


// ==================================

// function isEvenOrOdd(number) {
//     switch (number % 2) {
//         case 0:
//             console.log(`Number is even`);
//             break;
//         case 1:
//             console.log(`Number is odd`);    
//             break;
//         default:
//             console.log(`The number didn't find`);
//     }
// }
// isEvenOrOdd(10)
