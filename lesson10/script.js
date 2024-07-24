// let str = 'Be coder Academy';

// console.log(str.indexOf("coder")); 

// console.log(str.search("B"));

// console.log(str.slice(3, -1));          //slice(minusda ham ishora oladi!)
// console.log(str.slice(0, 4));

// console.log(str.substring(3, 10));   //substring minusda qiymat olmaydi)

// console.log(str.substr(3, 5));     // 3dan 10gacha sanab beradi





// let str = 'Abbos Bek Bek Bek';


// console.log(str.replace(/bek/,'jon'));          //  /bek/i  belgisini qoysak kichkina harif bolsa ham almawtirib beradi!

// console.log(str.replace(/Bek/g, 'jon'));          //    /bek/g belgisi hamma bir xil bolgan qiymatni alishtirib beradi!

// console.log(str.replace(/bek/gi, 'jon'));            //   /bek/gi belgisi katto yoki kichkina harf bolsa ham alishtirib beradi



// let str = 'Abbos';

// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());


// let str = 'Abbos    '

// console.log(str.trim().length);           // => white spacelarni olib beradi! 



/////////////////////////////////////////////////////

// Function


// function handleClick() {                                      // function yaratish

// let num = 2 + 2;
// console.log(num);                                             // functionga shart berish ichida
// }

// handleClick();                                                // function ni chaqirish





// function handleClick(name, age, surname) {                                      // => paramentr
//     console.log(`name: ${name} age: ${age} surname: ${surname}`);

// }
// handleClick('Abbos', 25, 'Begmatov')
// handleClick('Madina', 25, 'Kamolova')
// handleClick('Yasmina', 0, 'Begmatova')



// const handleClick = (a, b) => {
//     return console.log(a + b)
// }
// handleClick(5, 6);



// function some(name) {
//     console.log('hello ' + name);
// }
// some('Abbos')



// Arrow function

// const webBrain = (a) => {
//     return a * a;
// }
// console.log(webBrain(2));


// function 1 qatorlik bolsa unga return qoymasa ham boladi!

// const webBrain = (a) => a * a;

// console.log(webBrain(2));



// const hello = (name) => {
//     console.log(`Hello ${name}`);
// }

// hello('Abbos');



// =============================================================================================
// <<< with declaration function >>>

// 1st function ichida 20 sonini 3ga bo'ling va qoldiq sonlarni remove qilib tashlang!

// function webBrain() {
//     let firstNum = 20;
//     let secondNum = 3;
//     let result = firstNum / secondNum;
    
//     console.log(parseInt(result));
// }
// webBrain();
// ===============================================================================


// 2nd function ichida musbat sonli qiymatni oddiy qiymatga aylantirib bering(ya'ni minus son chiqmasin!

// function webBrain() {
//     let firstNum = 50;
//     let secondNum = 65;

//     console.log(Math.abs(firstNum - secondNum));
// }
// webBrain();
// ===============================================================================


// 3th function ichida shunday qiymat beringki ular ism, familya, yosh haqida malumot bo'lsin va ular bir nechta insonlarniki bolsin!

// function webBrain (ism, familya, yosh) {
//     console.log(`Salom ${ism} ${familya} sizning yoshingiz ${yosh}da`);
// }
// webBrain('Ahrorbek', 'Sadulayev', 19);
// webBrain('Abbos', 'Begmatov', 25);
// webBrain('Murod','Abdullayev', 30);
// ===================================================================================


// 4th function ichida for loopda orqali 1dan 10 gacha bo'lgan sonlarni chiqaring!

// function webBrain() {
//     for(i = 0; i <= 10; i++) {
//         console.log(i);
//     }
// }
// webBrain();
// ====================================================================================


// 5th funtion ichida sahifaga kirish yani parol login terish orqali sahifaga kirishni bajaring!
// (Agar togri bolsa sahifangizga xush kelibsiz deb agar xato bolsa id yoki parol xato deb ciqsin!)

// function webBrain() {
//     let id = 'Abbos'
//     let parol = 1998;
//     if(id === 'Abbos' && parol === 1998) {
//         console.log('Sahifangizga xush kelibsiz');
//     } else {
//         console.log('id yoki parol xato');
//     }
// }
// webBrain();
// ===================================================================================


// 6th function ichida Abbos nomili o'zgaruvchini Murodilga o'zgartiring hamda Murodil sozi 5 marotaba qayta-qayta chiqsin!

// function webBrain() {
//     let name = 'Abbos';

//     console.log(name.replace('Abbos', 'Murodil').repeat(5));
// }

// webBrain();
// ====================================================================================


// 7th  function ichida string typedagi qiymatni matematik amal bajarish uchun imkon berib ularni hisoblab bering!

// function webBrain() {
//     let num = '2 + 2';

//     console.log(eval(num));
// }
// webBrain();
// ====================================================================================


// 8th function ichida Random sonini aniqlab bering!(son qoldiqsiz bolishi kerak!)

// function webBrain() {
//     console.log(parseInt(Math.random()*100));
// }
// webBrain();
// =====================================================================================



// 9th function ichida string holadida text yozib ularni barchasini katta harfga ogirib kegin 0dan 3gacha indexlarini kesib bering!

// function webBrain() {
//    let name = 'Abbos';
//    console.log(name.toLocaleUpperCase().substring(0, 3));
// }
// webBrain();
// ====================================================================================



// 10th function ichida berilgan qiymatning uzunligini topib bering!

// function webBrain() {
//     let name = 'AbbosAbbosAbbosAbbosAbbosAbbosAbbosAbbosAbbosAbbosAbbos';

//     console.log(name.length);
// }
// webBrain();
// ===================================================================================

// ===================================================================================


// <<< with arrow function >>>

// 11th function ichidagi textni bosh va oxirgi harfini remove qilib bering!

// const cut = (title) => {
//    return title.slice(1, -1)
// }
// console.log(cut('Abbos'));
// =====================================================================================



// 12th function ichida berilgan texni teskari holatda chiqarib bering va qayta stringga otqazing!

// const click = (name) => {
//     return name.split("").reverse().toString();
// }
// console.log(click('Abbos'));
// =====================================================================================


// 13th function ichida berilgan sonlarni ketma ketligi boyicha qo'yib bering!

// const numbers = () => {

//    let arr = [4,2,3,5,1];
   
//    console.log(arr.sort((a,b) => a - b));
// }

// numbers();
// =========================================================================================


// 14th function ichida Abbos sozida o harifi nechinchi indexdaligini topib bering!

// const find = (name) => {
//     return name.search('o');
// }

// console.log(find('Abbos'));
// =========================================================================================



//15th function ichidagi textning hariflarini alfavit holatda sort qilib bering!

// const touch = (laters) => {
//     let text = ['s', 'b', 'a'];
    
//     console.log(text.sort((a, b) => a.localeCompare(b)));
// }
// touch();
// ==========================================================================================


// 16th strinda bolgan raqamlar orqali matematik amal bajaring!

// const some = () => {
//     let num = '2 + 2'
//     console.log(eval(num));
// }
// some();
// =========================================================================================================


// 17th function ichida shunday kod yozing 10gacha bo'lgan random soni chiqsin (sonlar qoldiqsiz holatda chiqsin!

// const rand = () => {
//     return parseInt(Math.random() * 10);
// }
// console.log(rand());
// =========================================================================================================

// 18th function ichcidagi qiymatning white spacelarini yoqotib va oxiriga A harifini qoshib qoying!

// const click = (name) => {
//     return name.trim().padEnd(6,'A');
// }
// console.log(click('Abbos     '));
// ==========================================================================================================


// 19th function ichida Abbos sozidan o harfni nechinchi indexda turgnaini topib bering!

// const click = () => {
//     let index = 'Abbos';

//     console.log(index.charAt(3));
// }
// click();
// =============================================================================================



// 20th function ichida berilgan texning eng oxirgi harfini olib bering!
// const num = (name) => {
   
// let str = 'Adfsgjdfngljksdfkgjasfsadf';

// console.log(str[str.length -1]);
// }

// num();





