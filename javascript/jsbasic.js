//========== Exercise number: 1 ==============//


/**
 * Sum two numbers
 * 
 * Write a function that takes two numbers (a and b) as argument
 * Sum a and b
 * Return the result 
 */


// function myFunction(a, b){
//     let result = a + b
//     return result
// }

// let a,b,c;
// a = myFunction(1,2)
// b = myFunction(1,10)
// c = myFunction(99,1)


// console.log(`
// Funcion(1.2): ${a}\n
// Funcion(1,10): ${b}\n
// Funcion(99,1): ${c}    
//  `)


//========== Exercise number: 2 ==============//


/**
 * Comparison operatos, strict equality
 * 
 * Write a function that takes two values, say a and b, as arguments
 * Return true if the two values are equal and of the same type
 * 
 */

// function myFunction(a, b){
//     let result = "";
//     if (a === b){
//         result = true
//     }else{
//         result = false
//     }
//     return result
// }

// let a,b,c;
// a = myFunction(2,3)
// b = myFunction(3,3)
// c = myFunction(1,"1")
// d = myFunction("10","10")


// console.log(`
// Funcion(2,3): ${a}\n
// Funcion(3,3): ${b}\n
// Funcion(1,"1"): ${c}\n    
// Funcion("1","1"): ${d}    
//     `
// )


//========== Exercise number: 3 ==============//


/**
 * 
 * Get type of value
 * 
 *Write a function that takes a value as argument
 *Return the type of the value
 */


// function myFunction(a){
 
//  return typeof(a)
// }

// myFunction(1)



//========== Exercise number: 4 ==============//


/** 
 * Get nth character of string
 * 
 * Write a function that takes a string (a) and a number (n) as argument
 * Return the nth character of 'a'
 * 
 */

//  function myFunction(a, n){
//      return a[n - 1];
//  }

//  myFunction('abcd',1); // "a"
//  myFunction('zyxbwpl',5) //"w"
//  myFunction('gfedcba',3) //"e"



//========== Exercise number: 5 ==============//


/**
 * 
 * Remove first n characters of string
 * 
 *Write a function that takes a string (a) as argument
 *Remove the last 3 characters of a
 *Return the result
 * 
 */

// function myFunction(a){
//     let len = "";
//     if(a.length % 2 == 0){
//         len = (a.length / 2) - 1;
//     }else{
//        len = (a.length / 2); 
//     }

//    let rst = Math.ceil(len)



//     // console.log(a, len)
//     // console.log(a, rst)
    
//     console.log(a.slice(0,rst));
// }

// myFunction('abcdefg')
// myFunction('1234')
// myFunction('fgedcba')



//========== Exercise number: 6 ==============//


/***
 * 6-7-8-9
 * 
 */




//========== Exercise number: 10 ==============//


/**
 * 
 *Write a function that takes two numbers (a and b) as argument
 *Return b percent of a
 * 
 */

// function myFunction(a, b){

//     console.log(a * (b/100)) 

// }


// myFunction(100,50)
// myFunction(10,1)
// myFunction(500,25)


//========== Exercise number: 11 ==============//


/**
 * 
 * Basic Javascript math operators
 * 
 *Write a function that takes 6 values (a,b,c,d,e,f) as arguments
 *Sum a and b
 *Then substract by c
 *Then multiply by d and divide by e
 *Finally raise to the power of f and return the result
 *Tipp: mind the order
 *
 */

 // function myFunction(a, b, c, d, e, f){

//     let result =  (((a + b) -c) * d / e ) ** f
//     console.log(result)
// }


// myFunction(6,5,4,3,2,1) // 10.5
// myFunction(6,2,1,4,2,3) // 2744
// myFunction(2,3,6,4,2,3) // -8



//========== Exercise number: 12 ==============//


/**
 * Check if a number is even
 * 
 * Write a function that takes a number as argument
 * If the number is even, return true
 * Otherwise, return false
 * 
 */


// function myFunction(a){

//     let result = "";
//     if(a % 2 == 0){
//         console.log(result = true) 
//     }else {
//         console.log(result = false)
//     }

// }

// myFunction(10) // True
// myFunction(-4) // True
// myFunction(5) //False
// myFunction(-111) // False



//========== Exercise number: 13 ==============//


/**
 * How many times does a character occur?
 * 
 * Write a function that takes two strings (a and b) as arguments
 * Return the number of times a occurs in b
 * 
 */

//Auth solution

// function myFunction(a, b) {
//     return b.split(a).length - 1
//   }


//My solution

// function letterInString(a,b){
//     let count = 0;
//     for(let i = 0; i <= b.length; i++){
       
//         if(a === b[i]){
//            return count ++;
//         }else{
//            return "None"
//         }

//     }
//     console.log(count) 
// }
  
// letterInString("o", "Hello World")
  
  
//   console.log(b.split(a).length - 1)

// myFunction('m', 'how many times does the character occur in this sentence?') //2
// myFunction('h', 'how many times does the character occur in this sentence?') //4
// myFunction('?', 'how many times does the character occur in this sentence?') //1
// myFunction('z', 'how many times does the character occur in this sentence?') //0



//========== Exercise number: 14 ==============//


/**
 * Check if a number is a whole number
 * 
 * Write a function that takes a number (a) as argument
 * If a is a whole number (has no decimal place), return true
 * Otherwise, return false
 * 
 */

// function check_number(n){
//     // let result = ""
//     // if (Number.isInteger(n)){
//     //     result = true
//     // }else{
//     //     result = false
//     // }
//     // console.log(result)


//     let result = Number.isInteger(n);
//     console.log(result)
// }

/**

 let resultMath = Math.floor(n)
    console.log(resultMath)
    let result = n - Math.floor(n) === 0

    console.log(`El valor de n: ${n} - el valor de math.floor ${resultMath} eso es igual a ${result}`);
 * 
 */


/**
 * Solucion del author: a - Math.floor(a) === 0
 */

// check_number(4);
// check_number(1.123);
// check_number(1048);
// check_number(10.48);



//========== Exercise number: 15 ==============//

/** 
 * Multiplication, division, and comparison operators
 * 
 * Write a function that takes two numbers (a and b) as arguments
 * If a is smaller than b, divide a by b
 * Otherwise, multiply both numbers
 * Return the resulting value
 * 
 */

// let resultado_total = (a,b) =>{
//     let result = a < b ? a / b : a * b;
//     // if (a < b){
//     //     result = a / b
//     // }else{
//     //     result = a * b
//     // }
//     console.log(result)
// }
// resultado_total(10,100)
// resultado_total(90,45)
// resultado_total(8,20)
// resultado_total(2,0.5)



//========== Exercise number: 16 ==============//


/**
 * Check wheteher a string contains another string and concatenate
 * 
 * Write a function that takes two strings (a and b) as arguments
 * If a contains b, append b to the beginning of a
 * If not, append it to the end
 * Return the concatenation
 * 
 * 
 */

// function myFunction(a,b){

//     let result = ""

//     // 1 Using include

//     if (a.includes(b)){
//         result = b.concat(a)
//     }else{
//         result = a.concat(b)
//     }

//     // 2 Using Match

//     if (a.match(b) === null){
//         result = a.concat(b)
//     }else{
//         result = b.concat(a)
//     }

//     // 
//     result = a.includes(b) ? b.concat(a) : a.concat(b);


//     //Author page
//     result = a.indexOf(b) === -1 ? a + b : b + a;


//     console.log(result)
// }


// myFunction('cheese', 'cake') // 'cheesecake'
// myFunction('lips', 's') // 'slips'
// myFunction('Java', 'script')// 'Javascript'
// myFunction(' think, therefore I am', 'I')// 'I think, therefore I am'



//========== Exercise number: 17 ==============//


/**
 * Round a number to 2 decimal places
 * 
 * Write a function that takes a number (a) as argument
 * Round a to the 2nd digit after the comma
 * Return the rounded number 
 */


// function twoDecimals(decimal){


//     console.log(decimal.toFixed(2)); 
// }


// twoDecimals(2.12397)
// twoDecimals(3.136)
// twoDecimals(1.12397)
// twoDecimals(26.1379)



//========== Exercise number: 18 ==============//


/***
 * Split a number into its digits
 * 
 * Write a function that takes a number (a) as argument
 * Split a into its individual digits and return them in an array
 * Tipp: you might want to change the type of the number for the splitting
 * 
 */

// My solution

// let split_number = function(number){
//     //1 
//     let numString = String(number)
//     let num = numString.split("")
//     let result = []
//     for (let ele of num){
//         result.push(parseInt(ele))
//     }

// 2 Author metod
// const string = number + '';
// console.log(string)
// const strings = string.split('');
// console.log(strings)
// // console.log(strings.map(digit => Number(digit))) 


//     console.log(result)
// }


// split_number(10)
// split_number(931)
// split_number(193278)


//========== Exercise number: 19 ==============//

/**
 * Clear up the chaos behind these strings
 * 
 * It seems like something happened to these strings
 * Can you figure out how to clear up the chaos?
 * Write a function that joins these strings together such that they form the following words:
 * 'Javascript', 'Countryside', and 'Downtown'
 * You might want to apply basic JS string methods such as replace(), split(), slice() etc
 * 
 * 
 */

// function fixing_the_chaos(a,b){

//     // First way

//     let stringA = a.replace("%","").split("");
//     let stringB = b.replace("%","").split("");
//     let stringReverse = stringB.reverse();
//     let stringUnion = stringA.concat(stringReverse);
//     let stringFinal = stringUnion.join("")
//     let chaosFixed = stringFinal.replace(stringFinal[0],stringFinal[0].toUpperCase())

//     // Second way 

//     // let replaceFunction = str => str.replace("%","").split("");
//     // let stringA = replaceFunction(a).join("");
//     // let stringB = replaceFunction(b).reverse().join("");
//     // let stringUnion = stringA.concat(stringB);
//     // let chaosFixed = stringUnion.replace(stringUnion[0],stringUnion[0].toUpperCase())


//     console.log(chaosFixed);



//    //Author

// /**
//     const func = x => x.replace('%','');
//     const first = func(a);
//     const second = func(b).split('').reverse().join('');
//     return first.charAt(0).toUpperCase() + first.slice(1) + second;
// */

// }


// fixing_the_chaos("java","tpi%rcs");//"Javascript"
// fixing_the_chaos('c%ountry', 'edis');//"Javascript"
// fixing_the_chaos('down', 'nw%ot');//"Javascript"



//========== Exercise number: 20 ==============//


/**
 * Write a function that takes two strings (a and b) as arguments
 * Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
 * Return the resulting string
 * 
 */




