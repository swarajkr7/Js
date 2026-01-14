// let and const are used to define variables
// js keywords are case sensitive so js will interpret LET and let 
// as two different things
//let and const are block variables means they are only
//available within the block they are defined
//var(not recommended) is a global variable it is available throughout the 

const NUM=45//const is used whwn you dont want value to change
let name="jhon doe"//let is used when value can change

let x="5"+4+6
//when add a string with numbers then numbers are also treated as string
console.log(x)

let x=2
//it is showing error bcz variable declared with let cannot be redeclared

//you can add element, change element in const array but you cannot
//assign a new array to the const variable
//same with object you can add properties , cahnge properties 
//but you cannot change object


//There are 8 datatypes in js
//1. Number EX->4.5.5
//2. String EX->"swaraj"
//3. Boolean Ex-True/False
//4. Object EX-{car:"ford", model:"mustang"}
//5. Undefined EX- var a; console.log(a);
//6. Null EX-var a=null;
//7. Symbol EX- Const sym=Symbol("id");
//8. BigInt EX- let num=BigInt(123456789012345678901234567890);