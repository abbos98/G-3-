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

// let year = 2024;

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
// Uchburchaklar tengligini toping!


// function findTriangle(a, b, d) {
//   if(a == b && b == d ) {
//     console.log('Teng tomonlik uchburchak!');
//   } else if (a == b || b == d) {
//     console.log('Teng bolmagan uchburchak!');
//   } else {
//     console.log('umuman teng bolmagan uchburchak!');
//   }
// }
// findTriangle(10, 10, 10);
// findTriangle(10, 10, 15);
// findTriangle(10, 15, 20);

//////////////////////////////////////////////////////////////////////////////////////////////////

// <<< task 5 >>>
// Oylarni kunini topish!

// function findDays(month) {
//     if(month == 1) {
//         console.log('31 kunlik oy');
//     } else if (month == 2) {
//         console.log('29 kunlik oy');
//     } else if(month == 3) {
//         console.log('31 kunlik oy');
//     } else if ( month == 4) {
//         console.log('30 kunlik oy');
//     } else if (month == 5) {
//         console.log('31kunlik oy');
//     } else if (month == 6) {
//         console.log('30 kunlik oy');
//     } else if (month == 7) {
//         console.log('31 kunlik oy');
//     } else if (month == 8) {
//         console.log('31 kunlik oy');
//     } else if (month == 9) {
//         console.log('30 kunlik oy');
//     } else if (month == 10) {
//         console.log('31 kunlik oy');
//     } else if (month == 11) {
//         console.log('30 kunlik oy');
//     } else if (month == 12) {
//         console.log('31 kunlik oy');
//     } else {
//         console.log('Bunday oyning ozi yoq!');
//     }
// }

// findDays(11);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <<< task 6 >>> 
//find min or max number!

// function num(a, b, d) {
// if (a > b && b > d) {
//     console.log('A is the largest');
// } else if(b > d) {
//     console.log('B is the largest');
// } else {
//     console.log('last one is the largest');
// }

// }
// // num(10, 5, 2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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