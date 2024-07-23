// let str = 'Be coder Academy';

// console.log(str.indexOf("coder")); 

// console.log(str.search("A"));

// console.log(str.slice(3, -1));          //slice(minusda ham ishora oladi!)
// console.log(str.slice(0, 4));

// console.log(str.substring(3, -1));   //substring minusda qiymat olmaydi)

// console.log(str.substr(3, 10));     // 3dan 10gacha sanab beradi






// let str = 'Abbos Bek Bek Bek';


// console.log(str.replace(/bek/i, 'jon'));          //  /bek/i  belgisini qoysak kichkina harif bolsa ham almawtirib beradi!

// console.log(str.replace(/bek/g, 'jon'));          //    /bek/g belgisi hamma bir xil bolgan qiymatni alishtirib beradi!

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



function some(name) {
    console.log('hello ' + name);
}
some('Abbos')