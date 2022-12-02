// ===Math method===
// console.log("sqrt(): ", Math.sqrt(4));

// let data = [9,3,1,"Peter",5,10];
// to retrieve last element .length-1
// let size = data.length-1;
// console.log("Array size: ", size);
// console.log("Element: ", data[size] );

// / to retrieve last element 
// console.log("at(): ", data.at(-1));

// to return middle value for even numbers
// Math.trunc returns only integer value
// let middleIndex = Math.trunc((data.length-1)/2);
// console.log("middleIndex: ", middleIndex);
// console.log("middle element: ", data.slice(middleIndex, middleIndex+2));

// to return middle value for uneven numbers
// let middleIndex = Math.trunc((data.length-1)/2);
// to check for even number
// if(data.length % 2 == 0) {
    //     console.log(data.slice(middleIndex, middleIndex+2));
    // } else {
        //     console.log(data[middleIndex]);
        // }

// to search for particular element on array
// let onlyNumbers = data.filter((item)=>{
//     if (typeof item != "string")
//         return item;
// })
// data.splice(3,1) //to remove only Peter
// to get max integer value
// console.log("Max: ", Math.max(...onlyNumbers));


//===String Methods===
// let sentence = "I love programming";
// console.log(sentence.toLowerCase());
//console.log(sentence.split('p')); // to remove, add into array from string

// ===Date===

// constructor function
// let myDate = new Date();
// let myDate = new Date("2022/11/28");
// let myDate = new Date();
// console.log("My date: ", myDate);
//console.log("My date: ", myDate.toLocaleDateString()); //current date


// ===Conditionals & Switch===
// if statement
// let age = 17;
// if(age > 17){
//     console.log("You qualify");
// }else {
//     console.log("You do not qualify");
// }
// Nested if statement
// don't use
// let age = 18;
// let salary = 5000;
// if(age > 17) {
//     if (salary >= 5000) {
//         console.log("Well done");
//     }else {
//         console.log("You're not qualified");
// }

// }

// rather use

// if((age > 17) && (salary >= 5000)){
//     console.log("Well done");
// }else {
//     console.log("Thanks for coming");
// }


// ===Switch===

// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
// }

// let grade = 30;
// switch(true){
//     case grade == -1:
//         console.log("You're awesome");
//         break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("Well done");
//         break;
//     case (grade >= 75) && (grade <= 89):
//         console.log("Distinction");
//         break;
//     case (grade >= 50)&& (grade <= 74):
//         console.log("Passed");
//         break;
//     case (grade <= 49) && (Math.sign(grade) !=-1):
//         console.log("Fail");
//         break;
//     default:
//         console.log("Out of range");
    
// }

// ===Loops===

// for in, in reads the properties, in checks for index
// for of, reads value and displays content of array
// for(start; end; increment by), infinite loop
// while, when you don't know when to stop
// do while, 
// .forEach()


// let numbers = [8,9,3,12,34];
// let people = {
//     name: 'Cassidy',
//     surname: 'Lawrence',
//     email: 'cassidy@gmail.com'
// }
// for in
// for(let num in numbers) {
    // console.log(num);
// }
// console.table(numbers);

// for(let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }

// for of
// for(let num of numbers) {
//     console.log(num);
// }

// for(let p of people) {
//     console.log(people);
// }

// for(let i=0; i<5 ; i++){
//     console.log("Hello world");
// }

// while loop
// let count = 0;
// while(count < numbers.length) {
//     console.log(`Step: ${numbers[count]}`);
//     count++;
// }


// do while
// do{
//     console.log(`Step: ${numbers[count]}`);
//     count++;
// }while(count < numbers.length)

// ===Function===
// function addition(num1, num2){
//     console.log(`Sum is: `, num1+num2);
// }

// addition(4,4)
// addition(5,7)
// addition(9,23)

// let addition = (num,num2)=>{
//     console.log(num+num2);
// }
// addition(1,2)

// let subtraction = (num1, num2)=>{
//     return num1-num2;
// }
// console.log(`Return value: `,subtraction(10,4)); 

// Arrow
// ((numb1, numb2)=>{
//     console.log(numb1 + numb2);
// })(8, 2);

// ternary operator
// let age = 17;
// console.log(age>=17 ? "You qualify" : "You don't qualify");

// rest operator
// function sumOf(...arg) { 
    //reduce gives one value
//     return arg.reduce((a,b)=>{
//         return a+b;
//     })
//  }
// console.log(sumOf(1,2,3));

// ===Constructor function===
// use uppercase
// function Person(...details){
    // sqaure brackets only takes positive numbers
    // use this. keyword
    // returns this
    // this.fName = details[0];
    // this.lName = details[1];
    // .at allows negative numbers
    // this.email = details.at(-1);
// }
// to create an instance, use new keyword
// let person1 = new Person("Peter", "Henk", "peter@gmail.com");
// console.log(person1);
// console.dir(person1);

// ===onclick===
// function addition(e){
//     e.preventDefault();
//     let num1 = document.querySelector("#num1").value;
//     let num2 = document.querySelector("#num2").value;

    // document.querySelector('#output').innerText = eval(`${num1}+${num2}`);
    // document.querySelector('#output').innerText = parseInt(num1) + parseInt(num2);
// }

// ===addEventListener===
// let btnAddition = document.querySelector('button');

// btnAddition.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let num1 = document.querySelector("#num1").value;
//     let num2 = document.querySelector("#num2").value;
//     document.querySelector('#output').innerText = parseInt(num1) + parseInt(num2);
// })

